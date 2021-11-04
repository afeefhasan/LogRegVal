import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component{
    constructor(props){
        super(props);
        this.state={

            user:JSON.parse(localStorage.getItem("user"))
        }
    }
    componentDidMount(){
        window.history.pushState(null, null, window.location.href);
    window.addEventListener('popstate', function (event) {
      window.history.pushState(null, null, window.location.href);
    });
    }
    render(){
        this.componentDidMount()
    let {user}=this.state;
    return(
        
            <div className="Home">
                <div className="navlink">
                <NavLink to="/" className="">Logout</NavLink>
                </div>
               
                <h1 className="text">Welcome </h1>
            </div>  
    );
    }
    
}
export default Home;