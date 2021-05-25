import React from "react";
import {Route, Switch} from "react-router-dom";
import ToDoList from "./ToDoList";
import PostsList from "./PostsList";
import Albums from "./Albums";


const PageContent=()=>{
    return(
        <Switch>
            <Route path="/todo">
                <ToDoList/>
            </Route>
            <Route path="/posts">
                <PostsList/>
            </Route>
            <Route path="/albums">
                <Albums/>
            </Route>
        </Switch>
    )
}
export default PageContent