import React, {Component, useRef, useState, useMemo, useCallback} from "react";
import MyComponent from "./3장/MyComponent";
import Counter from "./3장/Counter";
import Say from "./3장/Say";
import EventPracticeClass from "./4장/EventPracticeClass";
import EventPracticeFn from "./4장/EventPracticeFn";
import EventPracticeFn2 from "./4장/EventPracticeFn";
import ValidationSample from "./5장/ValidationSample";
import ScrollBox from "./5장/ScrollBox";
import InputSample from "./ETC/InputSample";
import Hello from "./ETC/Hello";
import UserList from "./ETC/UserList";
import CreateUser from "./ETC/CreateUser";
import IterationSample from "./6장/IterationSample";

function countActiveUsers(users){
  console.log('활성 사용자 수 세기');
  return users.filter(user => user.active).length
}

// function App() {
//   const [inputs, setInputs] = useState({
//     username:'',
//     email:''
//   })
//   const {username, email} = inputs;
//   const onChange = e => {
//     const {name, value} = e.target;
//     setInputs({
//       ...inputs,
//       [name]:value
//     })
//   }
//   const [users,setUsers] = useState([
//     {
//       id: 1,
//       username: "a",
//       email: "a@a.com",
//       active:true
//     },
//     {
//       id: 2,
//       username: "b",
//       email: "b@b.com",
//       active:false
//     },
//     {
//       id: 3,
//       username: "c",
//       email: "c@c.com",
//       active:false
//     },
//   ])

//   const nextId = useRef(4);
//   const onCreate = useCallback(() => {
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     }
//     setUsers([...users,user])

//     setInputs({
//       username:'',
//       email:''
//     })
//     nextId.current += 1;
//   }, [users,username,email]);

//   const onRemove = useCallback(
//     id=>{
//     setUsers(users.filter(user=>user.id !==id))
//   },[users]);

//   const onToggle =useCallback( id => {
//     setUsers(
//       users.map(user =>
//         user.id === id ? {...user, active: !user.active} : user)
//     )
//   },[users]);
//   const count = useMemo(() => countActiveUsers(users), [users]);


//   return (
//     <>
//     <CreateUser
//     username={username}
//     email={email}
//     onChange={onChange}
//     onCreate={onCreate}/>
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// class App extends Component {
//   render(){
//   return(
//     <div>
//     <ScrollBox ref={ref => this.scrollBox=ref}/>
//     <button onClick={() => this.scrollBox.scrollToBottom()}>밑으로</button>
//     </div>
//   )
//   }
// }
const App = () => {
  return (
    <IterationSample/>
  )
}
export default App;
