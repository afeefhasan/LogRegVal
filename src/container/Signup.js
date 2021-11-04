import React, { Component } from "react";
import Form from "../component/form";
import validator from "validator";
class Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            name:'',
            empty:false
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onEmailChange=this.onEmailChange.bind(this);
        this.onPassChange=this.onPassChange.bind(this);
        this.onNameChange=this.onNameChange.bind(this);
    }
    onNameChange(event){
        this.setState({name:event.target.value})
    }
    onEmailChange(event){
        this.setState({email:event.target.value})
    }
    onPassChange(event){
        this.setState({password:event.target.value})
    }
    onSubmit(){
        if(!this.state.name|| !this.state.email || this.state.password.length<6 || !validator.isEmail(this.state.email)){
            
            this.setState({empty:true})
        }
            else{
                localStorage.setItem("user",JSON.stringify(this.state.email))
                window.location.replace("/home")
            }
           
    }
    render(){
        localStorage.clear();
        let {email,password,name,empty}=this.state;
        return(
            <div className="App">
                <div className="center">
                <Form empty={empty} isSignup={true} email={email} name={name} password={password} NameChange={this.onNameChange} EmailChange={this.onEmailChange} PassChange={this.onPassChange} onSubmit={this.onSubmit}/>
                </div>
                
            </div>
        );
    }
}
export default Signup;