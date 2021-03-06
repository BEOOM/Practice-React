import React, {useState, useEffect, useReducer} from 'react';
import useInputs from './useInputs';

// function reducer(state,action){
//     return{
//         ...state,
//         [action.name]:action.value
//     }
// }

const Info = () => {
    const [state,dispatch] =useInputs( {
        name: '',
        nickname:''
    })

    const {name,nickname} = state;
    // const onChange = e => {
    //     dispatch(e.target);
    // }
    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');

    // useEffect(() => {
    //    console.log('effect');
    //    console.log(name);
    //    return () => {
    //     console.log('cleanup');
    //     console.log(name)
    //    }
    // })

    // const onChangeName = e => {
    //     setName(e.target.value)
    // }

    // const onChangeNickname = e => {
    //     setNickname(e.target.value)
    // }

    return (
        <div>
            <div>
                <input name="name" vlaue={name} />
                <input name="nickname" value={nickname}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;