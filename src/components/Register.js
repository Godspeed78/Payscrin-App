import React, { Component } from "react"
import cash from '@iconify/icons-typcn/credit-card';
import { Icon, InlineIcon, } from '@iconify/react';
import {Redirect, Link} from "react-router-dom"
import logo from "../components/payscrin.png"
import logo_dark from "../assets/payscrin_dark.png"





class Register extends Component {
    state = {
        email:"",
        password:""
    }


    Login = () => {
        if(this.state.email == "Admin@payscrin.com" && this.state.password == "."){
            this.setState({
                navigateToAdmin: true,
            })
        }else{
            alert("Invalid Login Credentials")
        }
    }
    render(){
        if(this.state.navigateToAdmin){
          return(
            <Redirect
            to={{pathname:"/Dashboard"}}
        />
          )
        }
        return(
            <>
    <div style={{backgroundColor:"#002563", float:"left", width:"100%"}}>
        <Link to={{pathname:"/Login"}}>
            <div style={{width:"100%", height:"100px", marginTop:"30px"}}>
    <img src={logo} height="50px" style={{float:"left", marginLeft:"20px", marginBottom:"0px"}}/>

                                </div>
                                </Link>
        
                    

                
    <div class="align-items-center justify-content-center text-center h-100vh">
            <div class="form-wrapper m-auto">
                <div class="form-container my-4" style={{marginLeft:"auto", marginRight:"auto"}}>
                    <div class="register-logo text-center mb-4">
                        <img src="assets/dist/img/logo2.png" alt=""/>
                    </div>
                    <div class="panel">
                        <div class="panel-header text-center mb-3">
                        <img src={logo_dark} width="50px"/>

                            <h3 class="fs-24">Sign up for your account!</h3>
                            {/* <p class="text-muted text-center mb-0">Start your 15-day trial, no credit card required</p> */}
                        </div>
                        <a class="btn btn-linkedin btn-block bg-white text-left font-weight-normal position-relative mb-3">
                            <span>Sign up with LinkedIn</span>
                        </a>
                        <a class="btn  btn-google btn-block bg-white text-left font-weight-normal position-relative mb-3">
                            <span>Sign up with Google</span>
                        </a>
                        <p class="text-muted text-center">We won't post anything without your permission and your personal details are kept private</p>
                        <div class="divider font-weight-bold text-uppercase text-dark d-table text-center my-3">Or</div>
                        <form class="register-form">
                            <div class="form-group">
                                <input type="text" class="form-control" id="f_name" placeholder="First name"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="l_name" placeholder="Last name"/>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control is-valid" id="emial" placeholder="Enter email"/>
                                <div class="invalid-feedback text-left">Enter your valid email</div>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="pass" placeholder="Password"/>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                <label class="custom-control-label" for="customCheck1">By signing up, you agree to the <a>terms of service</a></label>
                            </div>
                            <button type="submit" class="btn btn-primary2 btn-block">Sign up</button>
                            <p class="text-muted text-center mt-3 mb-0">
                                By signing up, you agree to our <a class="external">terms of use</a>.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>






    </div>
            </>
        )
    }
}

export default Register;