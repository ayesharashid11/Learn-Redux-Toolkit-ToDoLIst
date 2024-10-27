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
    <div className='flex items-center justify-center p-3'> 
      <form  
      onSubmit={handleTodo}>
        <input  className='rounded-lg p-4 '
        type='text'  placeholder='Enter to do' value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button className='m-2 p-2 rounded-xl bg-green-200'
        type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Addtodo
