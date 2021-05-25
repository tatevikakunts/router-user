import React, {Fragment, useContext, useEffect, useState} from "react";
import Loading from "./Loading";
import {userContext} from "./App";

const PostsList=()=>{
    const[postsList, setPostsList]=useState([])
    const cnt =useContext(userContext)
    useEffect(()=>{
        fetchingPosts()
    },[])
    useEffect(()=>{
        fetchingPosts()
    },[cnt.user])
    const fetchingPosts = ()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${cnt.user.id}`)
            .then(response=>response.json())
            .then(data=>setPostsList(data))

    }

    const renderPostsList = ()=>{
        if(!postsList.length){
            return(<Loading/>)
        }
        return(
            postsList.map(post=>(<div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>))
        )
    }
    return(
        <Fragment>
            {renderPostsList()}
        </Fragment>
    )
}

export default PostsList