import React, {
  Component,
  useRef,
  useState,
  useMemo,
  useCallback,
} from 'react';
import MyComponent from './3장/MyComponent';
import Counter from './3장/Counter';
import Say from './3장/Say';
import EventPracticeClass from './4장/EventPracticeClass';
import EventPracticeFn from './4장/EventPracticeFn';
import EventPracticeFn2 from './4장/EventPracticeFn';
import ValidationSample from './5장/ValidationSample';
import ScrollBox from './5장/ScrollBox';
import InputSample from './ETC/InputSample';
import Hello from './ETC/Hello';
import UserList from './ETC/UserList';
import CreateUser from './ETC/CreateUser';
import IterationSample from './6장/IterationSample';
import Counter2 from './8장/Counter2';
import Info from './8장/info';
import Average from './8장/Average';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './13장/Home';
import About from './13장/About';

function countActiveUsers(users) {
  console.log('활성 사용자 수 세기');
  return users.filter((user) => user.active).length;
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
  // const [visible, setVisible] = useState(false)
  // return (
  //   <div>
  //     <button onClick={() => {
  //       setVisible(!visible)
  //     }}>
  //       {visible?'숨기기':'보이기'}
  //     </button>
  //     <hr/>
  //     {visible && <Info/>}
  //   </div>
  // );

  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '리',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '액',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: '트',
  //     checked: false,
  //   },
  // ]);

  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(4);
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
      array.push({
        id: i,
        text: (
          <>
            <span class="co31">할</span>
            <span class="co31">일</span>
            <span class="co49">$</span>
            <span class="co33">i</span>
            <span class="co49"></span>
            <span class="co31"></span>
          </>
        ),
        checked: false,
      });
    }
    return array;
  }

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
    // <div>
    //   <Route path="/" component={Home} exact={true} />
    //   <Route path={['/about', '/info']} component={About} />
    // </div>
  );
};
export default App;
