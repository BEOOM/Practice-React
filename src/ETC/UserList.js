import React, {useEffect} from 'react';

export default function UserList({users, onRemove, onToggle}) {
    return(
        <div>
            {users.map(user => (
 <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
           
        </div>
    )
}

function User({user, onRemove, onToggle}){
    useEffect(() => {
        console.log('출현');
        return () => {
            console.log('사라짐')
        }
    }, [])
    return(
        <div>
            <b style={{cursor:'pointer', color: user.active ? 'green' : 'black'}}
             onClick={()=> onToggle(user.id)}>
                {user.username}
                </b>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}