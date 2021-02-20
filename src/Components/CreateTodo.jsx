import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const CreateTodo = () => {

    const { register, handleSubmit } = useForm(); 

    const onSubmit = async (data) => {
        try {
            axios.post(`https://todos-academlo.herokuapp.com/api/todo`, {
                task:data.task,
                student:data.student
              });
          } catch (er) {
            console.error(er)
          }
        }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        
            <label>
                Add a New Task: 
                <input type="string" name="task" ref={register}/>
            </label>    
        
            <label>
                Who is this: 
                <input type="string" name="student" ref={register}/>
            </label>    

            <button>Publish</button>
        </form>
    )
};

export default CreateTodo;