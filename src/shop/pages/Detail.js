import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Nav } from 'react-bootstrap'

import { Context1 } from '../App'

const Detail = ({ shoes }) => {

  let getData = useContext(Context1)
  console.log(getData)

  let { id } = useParams();
  let trueId = shoes.filter((i) => {
    return i.id === parseInt(id)
  })

  let [alert, setAlert] = useState(true)
  let [tab, setTab] = useState(0)
  // mount, update 시 코드를 실행해줌, html 렌더링 이후에 실행
  useEffect(() => {
    let alertToggle = setTimeout(() => {
      setAlert(false)
      // console.log("setTimeout")
    }, 2000)
    // console.log("2")
    // clean up function으로 useEffect 전에 실행된다.
    return () => {
      // console.log("1")
      clearTimeout(alertToggle)
    }
  })

  return (
    <div className="container">
      {alert === true ? <div className='alert alert-warining'><span>2초 이내에 주문하기 버튼 클릭 시 50% 할인</span></div> : null}
      <div className="row">
        <div className="col-md-6">
          <img src={trueId[0].img} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{trueId[0].title}</h4>
          <p>{trueId[0].content}</p>
          <p>{trueId[0].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab tab={tab} />

    </div>
  )
}

const Tab = ({ tab }) => {

  let [fade, setFade] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setFade('end')
    }, 100)

    return () => {
      setFade('')
    }
  }, [tab])
  if (tab === 0) {
    return <div className={'start ' + fade}>내용0</div>
  }
  if (tab === 1) {
    return <div className={'start ' + fade}>내용1</div>
  }
  if (tab === 2) {
    return <div className={'start ' + fade}>내용2</div>
  }
}

export default Detail;