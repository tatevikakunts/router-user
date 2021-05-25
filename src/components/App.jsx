import React, {Fragment, useState} from "react";
import PageContent from "./PageContent";
import PageNavigate from "./PageNavigate";
import User from "./User";

export const userContext =React.createContext()

const App = ()=>{
    const [user, setUser]=useState(null)

    const changeUser = (newUser)=>{
        setUser(newUser)
    }
    const renderPage =()=>{
        if(!user) return null
        return(
            <Fragment>
                <section className="content">
                    <div className="page-nav">
                        <PageNavigate/>
                    </div>
                    <div className="pageContent">
                        <PageContent/>
                    </div>


                </section>
            </Fragment>
        )
    }
    return(
        <userContext.Provider value ={{user, changeUser}}>
            <User/>
            {renderPage()}
        </userContext.Provider>

    )
}
export default App