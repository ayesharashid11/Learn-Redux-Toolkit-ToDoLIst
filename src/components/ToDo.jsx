import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../slices/todoSlice';

const ToDo = () => {
    const todo = useSelector(state => state.todos)
    const  dispatch = useDispatch();

  return (
    <div>
      {todo.map((todo => (<>
        <li key ={todo.id}>
            {todo.text}
        </li>
        <button onClick={()=> dispatch(removeTodo(todo.id))}>X</button>
        </>
      )))}
    </div>
  )
}

export default ToDo
