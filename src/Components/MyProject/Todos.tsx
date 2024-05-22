import React from 'react'
import { useTodos } from '../Store/todos'
import { useSearchParams } from 'react-router-dom';
const Todos = () => {
    const {todos,ToggleTodoAsCompleted,handleDeleteTodo}=useTodos();
    const [serchParams]=useSearchParams();
    let todosData=serchParams.get("todos");
    console.log(todosData,"todosData");
    
    let filteredData=todos;
    if(todosData=="active"){
        filteredData=filteredData.filter((task)=>!task.completed);
    }
    if(todosData=="completed"){
        filteredData=filteredData.filter((task)=>!task.completed);
    }
  return (
    <ul className='main-task'>
        {
            filteredData.map((todo)=>{
                return <li key={todo.id}>
                    <input type="checkbox" id={`todo-${todo.id}`}
                    checked={todo.completed}
                    onChange={()=>ToggleTodoAsCompleted(todo.id)}
                    />
                    <label htmlFor="">{todo.task}</label>
                    {
                        todo.completed && (
                            <button onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
                        )
                    }
                </li>
            })
        }
    </ul>
  )
}

export default Todos
