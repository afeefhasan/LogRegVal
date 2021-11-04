import React from "react";
import validator from "validator";
import { NavLink } from "react-router-dom";

const Forms=({name,email,password,empty,isSignup,EmailChange,PassChange,NameChange,onSubmit})=>{
    console.log(empty,!email)
        return (
            <div>
                {
                    isSignup?<h3 className="text">Sign Up</h3>:
                    <h3 className="text">Log in</h3>
                }
                
                <br />
                {
                    isSignup?
                    <div>
                        <div className="form-group">
                    <label>Name</label>
                    <input onChange={NameChange} type="text" className={(empty & !name)?"error form-control":"form-control"} placeholder="Enter Name" />
                    {
                        (empty & !name)?<span style={{fontWeight: 'bold',color: 'red'}}>Enter Name</span>:null
                    }
                            </div>
                    <br />
                    </div>
                    
                :
                    null
                }
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={EmailChange} type="email" className={(empty &( !email || !validator.isEmail(email)))?"error form-control":"form-control"} placeholder="Enter email" />
                    {
                       (empty & !validator.isEmail(email))?<span style={{fontWeight: 'bold',color: 'red'}}>Enter valid Email</span>:null
                    }
                    
                </div>
                <br />
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={PassChange} type="password" className={(empty & password.length<6)?"error form-control":"form-control" } placeholder="Enter password" />
                    {
                       (empty& password.length<6)?<span style={{fontWeight: 'bold',color: 'red'}}>Enter valid Password</span>:null
                    }
                </div>
                <br />

                <button onClick={onSubmit}  className="btn btn-primary btn-lg btn-block">
                    
                {
                    isSignup?
                    "SignUp":"Login"

                }
                    
                    </button>
                <p className=" text-right">
                    {
                        isSignup ?
                        <NavLink to="/login"  >Already have a Account Login?</NavLink>
                        :
                        <NavLink to="/signup"  >Don't have a Account Signup?</NavLink>
                    }
                    
                </p>
            </div>
        );

    
}

export default Forms;