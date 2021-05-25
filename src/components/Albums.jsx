import React, {Fragment, useContext, useEffect, useState} from "react";
import Loading from "./Loading";
import {userContext} from "./App";

const Albums = ()=>{
    const [albums, setAlbums]=useState([])
    const cnt = useContext(userContext)
    useEffect(()=>{
        fetchingAlbums()
    },[])
    useEffect(()=>{
        fetchingAlbums()
    },cnt.user)
    const fetchingAlbums = ()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${cnt.user.id}`)
            .then(response=>response.json())
            .then(data=>setAlbums(data))
    }
    const renderAlbums=()=>{
        if(!albums.length){
            return (<Loading/>)
        }
        return(
            albums.map(album=>(<div key = {album.id}>{album.title}</div>))
        )
    }
    return(
        <Fragment>
            {renderAlbums()}
        </Fragment>
    )
}
export default Albums