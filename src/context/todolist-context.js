import { createContext,useState } from "react";



const TodoContext = createContext();

export const ItemProvider =  ({children}) =>{

    const [item,setItem]=useState([
        {
            id:1,
            text:"hello 1234"
        },
        {
            id:2,
            text:"this is a test "
        }
    ])

    //add todo

    const addTodo = (newItem)=>{
        setItem( (curr)=>{
            return [ {id:newItem.id ,text:newItem.text},...curr ]
        } )
    }


    //delete todo

    const deleteTodo = (id) =>{

        setItem( (curr)=>{

            return curr.filter((st) => { 
                return st.id != id
             } )
        } )
    }


    return <TodoContext.Provider value={{item,addTodo,deleteTodo}}> {children} </TodoContext.Provider>

}

export default TodoContext