import React, {Component} from "react";
import MyComponent from "./3장/MyComponent";
import Counter from "./3장/Counter";
import Say from "./3장/Say";
import EventPracticeClass from "./4장/EventPracticeClass";
import EventPracticeFn from "./4장/EventPracticeFn";
import EventPracticeFn2 from "./4장/EventPracticeFn";
import ValidationSample from "./5장/ValidationSample";
import ScrollBox from "./5장/ScrollBox";

// function App() {
//   return (
//     <div>
//       <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//       <button onClick={() => this.scrollBox.scrollToBottom()}>맨밑으로</button>
//     </div>
//   );
// }

class App extends Component {
  render(){
  return(
    <div>
    <ScrollBox ref={ref => this.scrollBox=ref}/>
    <button onClick={() => this.scrollBox.scrollToBottom()}>밑으로</button>
    </div>
  )
  }
}

export default App;
