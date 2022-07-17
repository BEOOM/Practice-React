import React from 'react';
import { DiBlackberry, DiCoda, DiCode, DiCodeigniter, DiComposer, DiCssTricks, DiDocker, DiEnvato } from 'react-icons/di';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo,onRemove,onToggle}) => {
    const {id,text, checked} = todo;
    return (
        <div className='TodoListItem'>
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked?<DiCode/>:<DiCoda/>}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <DiCodeigniter/>
            </div>
        </div>
    )
}

export default TodoListItem;