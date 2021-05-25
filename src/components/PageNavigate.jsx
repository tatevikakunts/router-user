import React from "react";
import {NavLink} from "react-router-dom";


const PageNavigate=()=>{
    return(
        <ul className="navigation">
            <li><NavLink to="todo">Todo</NavLink></li>
            <li><NavLink to="posts">Posts</NavLink></li>
            <li><NavLink to="albums">Albums</NavLink></li>

        </ul>
    )
}
export default PageNavigate