import React, { Component } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { Redirect, Link } from "react-router-dom";
import logo from "../components/payscrin.png"


class PasswordReset extends Component {
  state = {
    hide: true,
  };

  componentDidMount() {}
  render() {
    return (
      <>
      
            <div style={{backgroundColor:"#002563", float:"left", width:"100%"}}>
            <div style={{width:"100%", height:"100px", marginTop:"30px"}}>
    <img src={logo} height="50px" style={{float:"left", marginLeft:"20px", marginBottom:"0px"}}/>

                                </div>

          <div class=" align-items-center justify-content-center text-center h-100vh" >
            <div class="form-wrapper m-auto">
              <div class="form-container my-4" style={{marginLeft:"auto", marginRight:"auto"}}>
                <div class="register-logo text-center mb-4">
                  <img src="assets/dist/img/logo2.png" alt="" />
                </div>
                <div class="panel">
                  <div class="panel-header text-center mb-3">
                    <h3 class="fs-24">Password Reset</h3>
                    <p class="text-muted text-center mb-0">
                      Fill with your mail to receive instructions on how to
                      reset your password.
                    </p>
                  </div>
                  <form class="register-form">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="emial"
                        placeholder="Enter email"
                      />
                    </div>
                    <button type="submit" class="btn btn-primary2 btn-block">
                      Reset password
                    </button>
                    <p class="text-muted text-center mt-3 mb-0">
                      Remember your password?{" "}
                      <Link class="external" style={{color:"#002563"}} to={{ pathname: "/Login" }}>
                        {" "}
                        Log in.
                      </Link>
                      .
                    </p>
                  </form>
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
    );
  }
}

export default PasswordReset;
