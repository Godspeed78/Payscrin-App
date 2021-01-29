import React, { Component } from "react"
import {Link} from "react-router-dom"



class Home extends Component {
    render(){
        return(
            <>
            <div className="App">
                    <h1>Welcome to Payscrin</h1>
                    <Link to={{pathname:"/Dashboard"}} className="btn btn-primary">Go to Dashboard</Link>
            </div>
            </>
        )
    }
}

export default Home;