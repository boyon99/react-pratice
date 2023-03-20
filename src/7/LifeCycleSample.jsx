import React, { Component } from "react";

class LifeCycleSample extends Component {
  // ref 설정
  myRef = null;

  // porps값을 상속받거나 초기 state를 설정할 수 있다.
  constructor(props) {
    super(props); // #000000
    console.log("constructor");
    this.state = {
      number: 0,
      color: null,
    };
  }

  // getDerivedStateFromProps을 통해 받아온 props를 state에 동기화한다.
  static getDerivedStateFromProps(nextProps, prevState) {
    // nextProps는 받아온 props 값인 #000000이며 prevState는 this.state 값이다.
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않는다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트되기 직전 색상: ", snapshot);
    }
  }

  render() {
    console.log("render");
    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {/* 해당 코드 제거하면 에러 발생 */}
        {/* {this.props.missing.value} */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}
export default LifeCycleSample;
