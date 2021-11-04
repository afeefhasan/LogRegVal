import React, { Component } from "react";
import Form from "../component/form";
import validator from "validator";
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            empty:false
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onEmailChange=this.onEmailChange.bind(this);
        this.onPassChange=this.onPassChange.bind(this);
    }
    onEmailChange(event){
        this.setState({email:event.target.value})
    }
    onPassChange(event){
        this.setState({password:event.target.value})
    }
    onSubmit(){
                if(!this.state.email || this.state.password.length<6 || !validator.isEmail(this.state.email)){
                    console.log(!this.state.email,(this.state.password.length),!validator.isEmail(this.state.email))
                    this.setState({empty:true})
                }
                    else{
                        console.log(1)
                        localStorage.setItem("user",JSON.stringify(this.state.email))
                        window.location.replace("/home")
                    }
                   
                
   
                
               
               
    
    }
    render(){
        localStorage.clear()
        let {email,password,empty}=this.state;
        return(
            <div className="App">
                <div className="center">
                <Form empty={empty} isSignup={false} email={email} password={password} EmailChange={this.onEmailChange} PassChange={this.onPassChange} onSubmit={this.onSubmit}/>
            </div>
            </div>
            
        );
    }
}
export default Login;