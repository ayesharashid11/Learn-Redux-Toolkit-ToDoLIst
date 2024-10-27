import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../slices/todoSlice';

const ToDo = () => {
    const todo = useSelector(state => state.todos)
    const  dispatch = useDispatch();

  return (
    <div className=' '>
      {todo.map((todo => (<>
      <div className='bg-orange-200 w-96 p-2 m-2 flex justify-between items-center rounded-lg'>
        <li className='list-none'
          key ={todo.id}>
            {todo.text}
        </li>
        <button className='bg-cyan-200 text-xl rounded-md p-2 m-2'
         onClick={()=> dispatch(removeTodo(todo.id))}>X</button>
        </div>
        </>
      )))}
      
    </div>
  )
}

export default ToDo
