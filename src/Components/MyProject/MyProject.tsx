import React, { useState } from 'react'
import { useTodos } from '../Store/todos';

const MyProject = () => {
    const[todo,setTodo]=useState("");
const {hadleAddTodo}=useTodos();
    const handleSubmit=(e:React.FormEvent<HTMLButtonElement>)=>{
console.log("sanjana");

        hadleAddTodo(todo)
        setTodo("");
    }
  return (
    <div className='form'>
      <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
      <button onClick={(e)=>handleSubmit(e)}>Add</button>
    </div>
  )
}

export default MyProject
