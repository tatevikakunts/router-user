import React, {useContext, useEffect, useState} from "react";
import {userContext} from "./App";
import Loading from "./Loading";

const User=()=>{
    const [users, setUsers]= useState(null)

    useEffect(()=>{
        fetchingUsers()
    }, [])
    const fetchingUsers=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }

    const cnt = useContext(userContext)

    const renderUsers=()=>{
        if(!users) {return(<Loading/>)}
        return(
            users.map(user=>(<button key={user.id} onClick={()=>cnt.changeUser(user)}>{user.username}</button>))
        )
    }

    const renderActiveUser=()=>{
        if (!cnt.user) {
            return null
        }
        return(
            <div className="info"> {cnt.user.name}({cnt.user.email})</div>
        )
    }
    return(
        <section >
            <div className="users">
                {renderUsers()}
            </div>
            {renderActiveUser()}
        </section>
    )
}
export default User