import React from 'react';
import { useContext,useState } from 'react';
import TodoContext from '../../context/todolist-context';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {

    const [text,setText]=useState("");
    const{addTodo} = useContext(TodoContext);

    const handleChange =(e)=>{
        setText( e.target.value )
    }

    const handlesubmit =(e)=>{
        e.preventDefault()
        if(text){
            const newTodo = { id:uuidv4() , text:text }
            addTodo(newTodo)
        }
    }
    return (
        <form onSubmit={handlesubmit}>
            <input type="text"  onChange={handleChange} />
            <button>send</button>
        </form>
    );
}

export default Form;
