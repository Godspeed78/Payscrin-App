import React, { Component } from "react"
import { Icon, InlineIcon, } from '@iconify/react';
import spiralIcon from '@iconify/icons-typcn/spiral';
import userOutline from '@iconify/icons-typcn/user-outline';
import eject from '@iconify/icons-typcn/contacts';
import {Link, Redirect} from "react-router-dom"
import cash from '@iconify/icons-typcn/credit-card';
import logo from "../components/payscrin.png"





class SideNav extends Component {



    

    componentDidMount(){

    }
    render(){
        return(
            <>


<nav class="sidebar sidebar-bunker" style={{backgroundColor:"#002563"}}>
                <div class="sidebar-header">
                    {/* <a href="index.html" class="logo"><span>bd</span>task</a> */}
                    {/* <img src="assets/dist/img/logo.png" alt=""/> */}
                    {/* <h3 style={{color:"green", fontFamily:"arial"}}>PayScrin <Icon icon={cash}/></h3> */}
                    <img src={logo}/>
                </div>
                
                {/* <!--/.sidebar header--> */}
                <div class="profile-element d-flex align-items-center flex-shrink-0">
                    <div class="avatar online">
                        <img src="assets/dist/img/avatar-1.jpg" class="img-fluid rounded-circle" alt=""/>
                    </div>
                    <div class="profile-text">
                        <h6 class="m-0">Miracle Godspeed</h6>
                        <span><a>miracle@payscrin.com</a></span>
                    </div>
                </div>
                {/* <!--/.profile element--> */}
                <form class="search sidebar-form" action="#" method="get">
                    <div class="search__inner">
                        <input type="text" class="search__text" placeholder="Search..."/>
                        <i class="typcn typcn-zoom-outline search__helper" data-sa-action="search-close"></i>
                    </div>
                </form>
                {/* <!--/.search--> */}
                <div class="sidebar-body">
                    <nav class="sidebar-nav">
                        <ul class="metismenu">
                            <li class="nav-label">Main Menu</li>
                            <li class="mm-active" style={{backgroundColor:"#002563"}}>
                                <Link to={{pathname:"/Dashboard"}} class="has-arrow material-ripple">
                                    <i class="typcn typcn-home-outline mr-2"></i>
                                    Dashboard
                                </Link>
                                {/* <ul class="nav-second-level">
                                    <li class="mm-active"><a href="index.html">Default</a></li>
                                    <li><a href="dashboard_two.html">Dashboard Two</a></li>
                                </ul> */}
                            </li>
                            <li>
                                <Link to={{pathname:"/Profile"}} class="has-arrow material-ripple">
                                    <i class="typcn typcn-chart-pie-outline mr-2"></i>
                                    Profile Management
                                </Link>
                                
                            </li>
                            <li>
                                <Link to={{pathname:"/PasswordReset"}} class="has-arrow material-ripple">
                                    <i class="typcn typcn-chart-pie-outline mr-2"></i>
                                    Reset Password
                                </Link>
                                
                            </li>
                            <li><a ><i class="typcn typcn-messages mr-2"></i>Deposit Request</a></li>
                            <li>
                                <a class="has-arrow material-ripple" >
                                    <i class="typcn typcn-mail mr-2"></i>
                                    Withdrawal Request
                                </a>
                                {/* <ul class="nav-second-level">
                                    <li><a href="mailbox.html">Mailbox</a></li>
                                    <li><a href="mailbox_details.html">Mailbox Details</a></li>
                                    <li><a href="compose.html">Compose</a></li>
                                </ul> */}
                            </li>
                            <li>
                                <a class="has-arrow material-ripple">
                                    <i class="typcn typcn-archive mr-2"></i>
                                    Transaction Log
                                </a>
                                
                            </li>
                            <li>
                                <a class="has-arrow material-ripple">
                                    <i class="typcn typcn-clipboard mr-2"></i>
                                    Account Statement
                                </a>
                               
                            </li>
                            
                            
                           
                           
                            {/* <li><a href="widgets.html"><i class="typcn typcn-gift mr-2"></i>Widgets</a></li> */}
                            {/* <li class="nav-label">Extra</li> */}
                         
                            {/* <li>
                                <a class="has-arrow material-ripple">
                                    <i class="typcn typcn-book mr-2"></i>
                                    Authentication
                                </a>
                                
                            </li> */}
                            <li>
                                <a class="has-arrow material-ripple">
                                    <i class="typcn typcn-flow-merge mr-2"></i>
                                    Payscrin User Guide
                                </a>
                          
                            </li>
                            <br/>
                            <br/>

                            <li>
                                <Link to={{pathname:"/Login"}} class="has-arrow material-ripple">
                                    {/* <Icon icon={eject} /> &nbsp; */}
                                    LOGOUT
                                </Link>
                          
                            </li>
                            {/* <li><a href="blank-page.html"><i class="typcn typcn-bookmark mr-2"></i>Blank page</a></li> */}
                          
                        </ul>
                    </nav>
                </div>
                {/* <!-- sidebar-body --> */}
            </nav>
            
            
                   
                   






            </>
        )
    }
}

export default SideNav;