import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    //state 초기값 설정, 호출되면 현재 클래스형 컴포넌트가 상속하고
    //있는 리액트의 component 클래스가 지닌 생성자 함수를 호출해준다
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  //컴포넌트에 state 설정할 때 -> constructor 메서드 작성
  render() {
    const { number, fixedNumber } = this.state;
    //state 조회할 때 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          //   onClick={() => {
          //     this.setState({ number: number + 1 });
          //   }}
          onClick={() => {
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

//state 를 constructor 에서 꺼내기
// class Counter extends Component {
//     state = {
//         number: 0,
//         fixedNumber: 0
//     };
//     render(){
//         const {number,fixedNumber} = this.state;
//         return(...)
//     }
// }

export default Counter;
