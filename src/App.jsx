import React, { Component } from "react";
import IterationSample from "./6/IterationSample";
import LifeCycleSample from "./7/LifeCycleSample";
import ErrorBoundary from "./7/ErrorBoundary";
import "./App.css";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <div className="IterationSample">
          <IterationSample />
        </div>
        <div className="LifeCycleSample">
          <button onClick={this.handleClick}>랜덤색상</button>
          {/* 에러가 발생하는 경우 */}
          <ErrorBoundary>
            <LifeCycleSample color={this.state.color} />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}
export default App;
