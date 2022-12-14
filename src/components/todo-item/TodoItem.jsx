
import { useContext } from "react";
import TodoContext from "../../context/todolist-context";


const TodoItem = ()=>{

    const {item,deleteTodo} = useContext(TodoContext)

    console.log(item)

 

    return(

        <ul>

          {item.map( i =>{
             return   <li key={i.id}> {i.text}   <button onClick={()=> deleteTodo(i.id)}> delete</button> <button>update</button> </li>
          } )}
            
          

        </ul>
    )
}

export default TodoItem;


