import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    usename: "",
    message: "",
  };
  // render() {
  //   return (
  //     <div>
  //       <h1>이벤트 연습</h1>
  //       <input
  //         type="text"
  //         name="message"
  //         placeholder="입력해보세요"
  //         value={this.state.message}
  //         onChange={(e) => {
  //           this.setState({
  //             message: e.target.value,
  //           });
  //         }}
  //       />
  //       <button
  //         onClick={() => {
  //           alert(this.state.message);
  //           this.setState({
  //             message: "",
  //           });
  //         }}
  //       >
  //         확인
  //       </button>
  //     </div>
  //   );
  // }

  // 임의 메소드 만들기
  // 함수를 미리 만들어 전달하는 방법
  // 클래스의 임의 메소드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 this 와의 관계가 끊어진다
  // 이에 this 를 컴포넌트 자신으로 제대로 가리키기 위해 메소드를 this 와 바인딩하는 작업이 필요
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      // message: e.target.value,
      [e.target.name]: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="아무거나 입력해보세요"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
