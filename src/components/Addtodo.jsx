import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../slices/todoSlice';
const Addtodo = () => {
    const [ input , setInput] =useState('');
    const disptach= useDispatch();

    const handleTodo =(e)=>{
        e.preventDefault();
        disptach(addTodo(input))
        setInput('')
    }
  return (
    <div>
      <form onSubmit={handleTodo}>
<input type='text'  placeholder='enter to do' value={input} onChange={(e)=> setInput(e.target.value)}/>
<button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Addtodo
