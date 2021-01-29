import React, { Component } from "react"
import { Icon, InlineIcon, } from '@iconify/react';
import spiralIcon from '@iconify/icons-typcn/spiral';
import userOutline from '@iconify/icons-typcn/user-outline';
import cogOutline from '@iconify/icons-typcn/cog-outline';


class TopNav extends Component {



    clock = () =>{
       
        var timebox = document.getElementById('timebox');
        var timeSec = document.getElementById('time-sec');
        var timeMin = document.getElementById('time-min');
        var timeHours = document.getElementById('time-hours');
    
        
            var time = new Date();
            timeMin.innerHTML = time.getMinutes();
            timeSec.innerHTML = time.getSeconds();
            timeHours.innerHTML = time.getHours();
          console.log(time);
        
          setInterval(this.clock, 1000);
        
        
    }

    componentDidMount(){

        this.clock();
    }
    render(){
        return(
            <>


<nav class="navbar-custom-menu navbar navbar-expand-lg m-0">
                    
                    
                    
                    {/* id="sidebarCollapse" */}
                        <div class="sidebar-toggle-icon" style={{color:"#002563"}} >
                            sidebar toggle< span
                            style={{color:"#002563"}}
                            
                            ></span>
                        </div>
                        {/* <!--/.sidebar toggle icon--> */}
                        <div class="d-flex flex-grow-1">
                            <ul class="navbar-nav flex-row align-items-center ml-auto">
                                <li class="nav-item dropdown quick-actions">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown">
                                        <Icon icon={userOutline}/>
                                    </a>
                                    
                                </li>
                                {/* <!--/.dropdown--> */}
                                <li class="nav-item">
                                    <a class="nav-link">

                                    <Icon icon={cogOutline}/>

                                    </a>
                                </li>
                               
                                
                                
                                {/* <!--/.dropdown--> */}
                                <li class="nav-item dropdown user-menu">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown">
                                        {/* <!--<img src="assets/dist/img/user2-160x160.png" alt="">--> */}
                                        <Icon icon={cogOutline}/>

                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <div class="dropdown-header d-sm-none">
                                            <a href="" class="header-arrow"><i class="icon ion-md-arrow-back"></i></a>
                                        </div>
                                        <div class="user-header">
                                            <div class="img-user">
                                                <img src="assets/dist/img/avatar-1.jpg" alt=""/>
                                            </div>
                                            {/* <!-- img-user --> */}
                                            <h6>Naeem Khan</h6>
                                            <span><a href="cdn-cgi/l/email-protection.html" class="__cf_email__" data-cfemail="0f6a776e627f636a4f68626e6663216c6062">[email&#160;protected]</a></span>
                                        </div>
                                        {/* <!-- user-header --> */}
                                        <a href="" class="dropdown-item"><Icon icon={spiralIcon}/> My Profile</a>
                                        <a href="" class="dropdown-item"><i class="typcn typcn-edit"></i> Edit Profile</a>
                                        <a href="" class="dropdown-item"><i class="typcn typcn-arrow-shuffle"></i> Activity Logs</a>
                                        <a href="" class="dropdown-item"><i class="typcn typcn-cog-outline"></i> Account Settings</a>
                                        <a href="page-signin.html" class="dropdown-item"><i class="typcn typcn-key-outline"></i> Sign Out</a>
                                    </div>
                                    {/* <!--/.dropdown-menu --> */}
                                </li>
                            </ul>
                            {/* <!--/.navbar nav--> */}
                            <div class="nav-clock">
                                <div class="time">
                                    <span id="time-hours"></span>
                                    <span id="time-min"></span>
                                    <span id="time-sec"></span>
                                </div>
                            </div>
                            {/* <!-- nav-clock --> */}
                        </div>
                    </nav>
                   
                   






            </>
        )
    }
}

export default TopNav;