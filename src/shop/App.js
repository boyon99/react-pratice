import React, { lazy, createContext, useState, Suspense } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/shop.scss'
import { data } from './data'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';

const Detail = lazy(() => import('./pages/Detail'));

export let Context1 = createContext()

const App = () => {
  let [shoes, setShoes] = useState(data)
  let [add, setAdd] = useState(false)
  // 페이지 이동을 도와주는 함수
  let navigator = useNavigate()
  let home = useLocation(location)
  // context api 사용할 데이터
  let sendData = [1, 2, 3, 4, 5]

  // localStorage
  let obj = { name: 'kim' }
  // object나 json인 경우 변환해야 한다.
  localStorage.setItem('data', JSON.stringify(obj))
  let obj2 = localStorage.getItem('data')
  console.log(JSON.parse(obj2))

  // react-query : 성공 또는 실패를 쉽게 확인 가능하다.
  let result = useQuery('작명', () =>
    axios.get('https://codingapple1.github.io/userdata.json')
      .then((a) => { return a.data }), { staleTime: 10000 }
  )

  console.log(result.data) // 성공시 true
  console.log(result.isLoading) // 로딩중일 때 true
  console.log(result.error) // 실패시 true

  return (
    <div className='app'>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => { navigator('/') }}>SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigator('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigator('/detail/1') }}>detail</Nav.Link>
            <Nav.Link onClick={() => { navigator('/cart') }}>cart</Nav.Link>
            <Nav.Link onClick={() => { navigator('/about') }}>about</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            {result.isLoading ? 'loading' : result.data.name}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home shoes={shoes} />} />
        <Route path='/detail/:id' element={
          <Suspense fallback={<div>loading</div>}>
            <Context1.Provider value={{ sendData }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          </Suspense>
        } />
        <Route path='/about' element={<About />} >
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치</div>} />
        </Route>
        <Route path='*' element={<div>404</div>} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      {home.pathname === '/' ? <button className='btn--add' onClick={() => {
        axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((data) => {
            if (!add) {
              let copy = [...shoes, ...data.data]
              setShoes(copy)
              setAdd(true)
            } else {
              console.log("추가했습니다.")
            }
          })
          .catch(() => { console.log('fail') })
      }}>데이터 추가하기</button> : null}

    </div>);
};

export default App;