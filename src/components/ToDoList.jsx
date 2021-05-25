import React, {Fragment, useContext, useEffect, useState} from "react";
import {userContext} from "./App";
import Loading from "./Loading";

const ToDoList = ()=>{
    const[todoList, setTodoList]=useState([])
    const cnt = useContext(userContext)
    useEffect(()=>{
        fetchingData()
    },[])
    useEffect(()=>{
        fetchingData()
    },[cnt.user])
    const fetchingData = ()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${cnt.user.id}`)
            .then(data=>data.json())
            .then(json=>setTodoList(json))
    }

    const renderTodoList=()=>{
        if(!todoList.length){
            return(<Loading/>)
        }
        return(
            todoList.map(item=>(<div key = {item.id}>{item.title}</div>))
        )
    }
    return(
        <Fragment>
            {renderTodoList()}
        </Fragment>
    )
}
export default ToDoList