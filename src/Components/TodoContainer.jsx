import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from "./TodoItem";
import CreateTodo from "./CreateTodo";

const TodoContainer = () => {
    const [ tasks, setTasks] = useState([])

    useEffect( async () => {
        try{
            const responseArray = []
            responseArray.push(axios.get('https://todos-academlo.herokuapp.com/api/todos'))
            Promise.all(responseArray).then((raw) => setTasks(raw[0].data))
        } catch (er) {
            console.error(er)
        }

    },[])

    return (
        <div>
            <CreateTodo/>
            {tasks.todos ? tasks.todos.map(
                (element) =>{return <TodoItem key={element._id} data={element}/>})
                 : null} 
            
        </div>
    )
};
//ss
export default TodoContainer;