import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TodoItem = ({data}) => {
    const { _id, task, student, isCompleted, __v } = data
    const [ completed, setCompleted] = useState();

    //Quería probar para ver como seguir con el crud pero pasó lo de la persona
    //No sé si funcione xdd según yo así es el delete no?
    const DeleteComponent = () => {
        axios.delete(`https://todos-academlo.herokuapp.com/api/todo/${_id}`)
    }


    const UpdateCompleted =  () => {

        const proms = new Promise((resolve, reject) => {
            setCompleted(!completed)
        })

        proms.then(axios.put(`https://todos-academlo.herokuapp.com/api/todo/${_id}`, {
            _id:_id,
            student:student,
            task:task,
            isCompleted:!completed,
            __v:__v
        }))
    }
    
    useEffect(() => {
        setCompleted(isCompleted)
    }, [data])


    return(
        <form>
            <div>
                {completed ? <input type="checkbox" defaultChecked="isChecked" name="isCompleted" onClick={UpdateCompleted}/> : <input type="checkbox" name="isCompleted" onClick={UpdateCompleted}/> }
                <p>{task}</p>
                {completed ? <p>is completed?: <span>Yeah</span></p> : <p>is completed?: <span>Nop</span></p>}    
                <span>~by: <span>{student}</span></span>
                <button onClick={DeleteComponent}>Delete</button>
            </div>
        </form>
    )
};

export default TodoItem;