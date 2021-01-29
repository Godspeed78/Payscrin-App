import React, { Component } from "react"
import cash from '@iconify/icons-typcn/credit-card';
import { Icon, InlineIcon, } from '@iconify/react';
import {Redirect, Link} from "react-router-dom"
import logo from "../components/payscrin.png"
import logo_dark from "../assets/payscrin_dark.png"
import { PushSpinner } from "react-spinners-kit";
import Spinner from "./Spinner"



class Login extends Component {
    state = {
        email:"",
        password:"",
        spin:true
    }


    Login = () => {
        
            this.setState({
                spin:true,
                navigateToAdmin: true,

             
            })
            
          

         
       
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                spin:false
            })
        },4000)
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
            <div className="App" >
    <div style={{backgroundColor:"#002563", float:"left", width:"100%"}}>
        {this.state.spin ? <Spinner/> : null}
                    
    <div style={{width:"100%", height:"100px", marginTop:"30px"}}>
    <img src={logo} height="50px" style={{float:"left", marginLeft:"20px"}}/>

                                </div>
                
        <div class="d-flex align-items-center justify-content-center text-center h-100vh" style={{marginTop:"-40px"}}>
            <div class="form-wrapper m-auto">
                <div class="form-container my-4">
                                


               
                                <div class="panel">
                                    <div class="panel-header text-center mb-3">
                                        <img src={logo_dark} width="50px"/>
                                        {/* <PushSpinner size={30} color="#686769" loading /> */}
                                        <br/>

                                        <h3 class="fs-24">Sign into your account!</h3>
                                        {/* <p class="text-muted text-center mb-0">Nice to see you! Please log in with your account.</p> */}
                                    </div>
                                    <a class="btn btn-linkedin btn-block bg-white text-left font-weight-normal position-relative mb-3" href="#">
                                        <span>Sign up with LinkedIn</span>
                                    </a>
                                    <a class="btn  btn-google btn-block bg-white text-left font-weight-normal position-relative mb-3" href="#">
                                        <span>Sign up with Google</span>
                                    </a>
                                    <p class="text-muted text-center">We won't post anything without your permission and your personal details are kept private</p>
                                    <div class="divider font-weight-bold text-uppercase text-dark d-table text-center my-3">Or</div>
                                    <form class="register-form">
                                        <div class="form-group">
                                            <input type="email" value={this.state.email} onChange={(e) => {this.setState({email:e.target.value})}} class="form-control is-valid" id="emial" placeholder="Enter email"/>
                                            {/* <div class="invalid-feedback text-left">Enter your valid email</div> */}
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" id="pass" placeholder="Password" onChange={(e) => {this.setState({password:e.target.value})}} />
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                            <label class="custom-control-label" for="customCheck1">Remember me next time </label>
                                        </div>
                                        <button class="btn btn-primary2 btn-block" onClick={() => this.Login ()}>Sign in</button>
                                    </form>
                                    <div class="bottom-text text-center my-3">
                                        Don't have an account? <a href="register.html" class="font-weight-500"><Link to={{pathname:"/Register"}}>Sign Up</Link></a><br/>
                                        Remind <a class="font-weight-500">Password</a>
                        </div>
                                </div>
                         









                </div>
            </div>
        
        </div>







    </div>
    </div>

    <div style={{ visibility: "hidden" }}>
          <span id="time-hours"></span>
          <span id="time-min"></span>
          <span id="time-sec"></span>
        </div>
            </>
        )
    }
}

export default Login;