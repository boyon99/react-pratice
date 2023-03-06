// 경로 : src/App.js
import React, { Component, useState, useEffect } from "react";
import "./App.css";
import Practice from "./practice";
import reactImg from "./img/react.png";
import data from "./data";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  // redux에 저장된 내용을 가져와주는 함수
  let save = useSelector((state) => {
    return state;
  });

  return (
    <div className="App">


      <button
        style={{ margin: "10px 0" }}
        onClick={() => {
          navigate("/practice");
        }}
      >
        practice
      </button>
      <Link to="/practice" style={{ margin: "0 10px" }}>
        practice
      </Link>
      <Link to="/img" style={{ margin: "0 10px" }}>
        img
      </Link>
      <Link to="/about" style={{ margin: "0 10px" }}>
        about
      </Link>
      <Link to="/detail/1" style={{ margin: "0 10px" }}>
        detail
      </Link>
      <Link to="/" style={{ margin: "0 10px" }}>
        home
      </Link>
      <Routes>
        <Route path="/practice" element={<Practice></Practice>} />
        <Route path="/about" element={<About />}>
          <Route
            path="member"
            element={<div className="about">{save.cart[0].name}</div>}
          />
          <Route
            path="location"
            element={<div className="about">{save.cart[1].name}</div>}
          />
        </Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/img" element={<IMG></IMG>} />
        <Route path="*" element={<div>없습니다.</div>} />
        <Route path="/" element={<div>홈</div>} />
      </Routes>
    </div>
  );
}

export default App;

/**
 * @author 이미지 넣는 법
 * @param css
 * url(상대경로)
 * @param js
 * import 이름 from '이미지경로'; src={이름}
 * 절대경로 사용하기
 * public 폴더에서 이미지 가져와서 사용하기
 */
function IMG() {
  return (
    <div>
      <h1>이미지</h1>
      <div className="img">
        <div className="image"></div>
        <img src={reactImg}></img>
        <img src="./img/react.png"></img>
        <img src="https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg"></img>
        <img src={process.env.PUBLIC_URL + "/logo512.png"}></img>
      </div>
    </div>
  );
}

function Detail(props) {
  /*URL 파라미터를 사용할 수 있는 useParams*/
  let { id } = useParams();
  return (
    <div className="shoe">
      <h3>{props.shoes[id].title}</h3>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + id + ".jpg"}
        width="80%"
      />
      <p>{props.shoes[id].price}</p>
    </div>
  );
}

function About() {
  /* 슬라이드 효과 */
  let [fade, setFade] = useState("");

  useEffect(() => {
    setFade("end");
    return () => {
      setFade("");
    };
  });

  return (
    <div className="abouts">
      <h4>about</h4>
      {/* 슬라이드 효과 */}
      <div className={"start " + fade}>내용 슬라이드 효과</div>
      {/* 자식 링크 */}
      <Link to="member" style={{ margin: "10px" }}>
        member
      </Link>
      <Link to="location">location</Link>

      <Outlet></Outlet>
    </div>
  );
}
