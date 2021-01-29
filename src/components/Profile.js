import React, { Component } from "react"
import SideNav from "./SideNav"
import TopNav from "./TopNav"


class Profile extends Component {
    render(){
        return(
            <>

<div className="fixed">

                  

<div class="wrapper">
    <SideNav/>
            <div class="content-wrapper">

                <div class="main-content"></div>
                <TopNav/>

<div class="body-content">
                        <div class="row">
                            <div class="col-sm-12 col-xl-8">
                                <div class="media d-flex m-1 ">
                                    <div class="align-left p-1">
                                        <a href="#" class="profile-image">
                                            <img src="assets/dist/img/avatar-1.jpg" class="avatar avatar-xl rounded-circle img-border height-100" alt="Profile image"/>
                                        </a>
                                    </div>
                                    <div class="media-body text-left ml-3 mt-1">
                                        <h3 class="font-large-1 white">Godspeed Miracle
                                            <span class="font-medium-1 white">.</span>
                                        </h3>
                                        <p class="white">
                                            <i class="fas fa-map-marker-alt"></i> Lagos, Nigeria </p>
                                        <p class="white text-bold-300 d-none d-sm-block">..</p>
                                        <ul class="list-inline">
                                            <li class="list-inline-item pr-1 line-height-1">
                                                <a href="#" class="fs-26 ">
                                                    <i class="fab fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item pr-1 line-height-1">
                                                <a href="#" class="fs-26 ">
                                                    <i class="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item line-height-1">
                                                <a href="#" class="fs-26 ">
                                                    <i class="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h6 class="mb-0 font-weight-600">Birthday</h6>
                                            </div>
                                            <div class="col-auto">
                                                <time class="fs-13 font-weight-600 text-muted" datetime="1988-10-24">10/24/88</time>
                                            </div>
                                        </div> 
                                        <hr/>
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h6 class="mb-0 font-weight-600">Joined</h6>
                                            </div>
                                            <div class="col-auto">
                                                <time class="fs-13 font-weight-600 text-muted" datetime="2018-10-28">10/24/18</time>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h6 class="mb-0 font-weight-600">Location</h6>
                                            </div>
                                            <div class="col-auto">
                                                <span class="fs-13 font-weight-600 text-muted">Lagos, Nigeria</span>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h6 class="mb-0 font-weight-600">Website</h6>
                                            </div>
                                            <div class="col-auto">
                                                {/* <a href="#!" class="fs-13 font-weight-600">themes.getbootstrap.com</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-4">
                                    <div class="card-header">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 class="fs-17 font-weight-600 mb-0">Work Progress</h6>
                                            </div>
                                            <div class="text-right">
                                                <div class="actions">
                                                    <a href="#" class="action-item"><i class="ti-reload"></i></a>
                                                    <div class="dropdown action-item" data-toggle="dropdown">
                                                        <a href="#" class="action-item"><i class="ti-more-alt"></i></a>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a href="#" class="dropdown-item">Refresh</a>
                                                            <a href="#" class="dropdown-item">Manage Widgets</a>
                                                            <a href="#" class="dropdown-item">Settings</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="row mb-3">
                                            <div class="col-9">
                                                <div class="progress-wrapper">
                                                    <span class="progress-label text-muted">Pendings Tasks</span>
                                                    <div class="progress mt-1 mb-2" style={{height:"5px"}}>
                                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:"40%"}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-3 align-self-end text-right">
                                                <span class="h6 mb-0">40%</span>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-9">
                                                <div class="progress-wrapper">
                                                    <span class="progress-label text-muted">Completed Tasks</span>
                                                    <div class="progress mt-1 mb-2" style={{height:"5px"}}>
                                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style={{width:"67%"}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-3 align-self-end text-right">
                                                <span class="h6 mb-0">67%</span>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-9">
                                                <div class="progress-wrapper">
                                                    <span class="progress-label text-muted">Tasks In Progress</span>
                                                    <div class="progress mt-1 mb-2" style={{height:"5px"}}>
                                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{width:"89%"}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-3 align-self-end text-right">
                                                <span class="h6 mb-0">89%</span>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-9">
                                                <div class="progress-wrapper">
                                                    <span class="progress-label text-muted">All Tasks</span>
                                                    <div class="progress mt-1 mb-2" style={{height:"5px"}}>
                                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{width:"55%"}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-3 align-self-end text-right">
                                                <span class="h6 mb-0">55%</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-9">
                                                <div class="progress-wrapper">
                                                    <span class="progress-label text-muted">Reports</span>
                                                    <div class="progress mt-1 mb-2" style={{height:"5px"}}>
                                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100" style={{width:"99%"}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-3 align-self-end text-right">
                                                <span class="h6 mb-0">99%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="card">
                                    <div class="card-header">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 class="fs-17 font-weight-600 mb-0">Edit Profile</h6>
                                            </div>
                                            <div class="text-right">
                                                <div class="actions">
                                                    <a href="#" class="action-item"><i class="ti-reload"></i></a>
                                                    <div class="dropdown action-item" data-toggle="dropdown">
                                                        <a href="#" class="action-item"><i class="ti-more-alt"></i></a>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a href="#" class="dropdown-item">Refresh</a>
                                                            <a href="#" class="dropdown-item">Manage Widgets</a>
                                                            <a href="#" class="dropdown-item">Settings</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <form>
                                            <div class="row">
                                                <div class="col-md-5 pr-md-1">
                                                    <div class="form-group">
                                                        <label class="font-weight-600">Company (disabled)</label>
                                                        <input type="text" class="form-control" disabled="" placeholder="Company" value="Creative Code Inc."/>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 px-md-1">
                                                    <div class="form-group">
                                                        <label class="font-weight-600">Username</label>
                                                        <input type="text" class="form-control" placeholder="Username" value=""/>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 pl-md-1">
                                                    <div class="form-group">
                                                        <label class="font-weight-600">Email address</label>
                                                        <input type="email" class="form-control" placeholder=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 pr-md-1">
                                                    <div class="form-group">
                                                        <label class="font-weight-600">First Name</label>
                                                        <input type="text" class="form-control" placeholder="Company" value=""/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 pl-md-1">
                                                    <div class="form-group">
                                                        <label class="font-weight-600">Last Name</label>
                                                        <input type="text" class="form-control" placeholder="Last Name" value=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label class="font-weight-600">Address</label>
                                                        <input type="text" class="form-control" placeholder="Home Address" value=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4 pr-md-1">
                                                    <div class="form-group">
                                                        <label class="font-weight-600">City</label>
                                                        <input type="text" class="form-control" placeholder="City" value=""/>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 px-md-1">
                                                    <div class="form-group">
                                                        <label class="font-weight-600">Country</label>
                                                        <input type="text" class="form-control" placeholder="Country" value=""/>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 pl-md-1">
                                                    <div class="form-group">
                                                        <label class="font-weight-600">Postal Code</label>
                                                        <input type="number" class="form-control" placeholder="ZIP Code"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-8">
                                                    <div class="form-group">
                                                        <label class="font-weight-600">About Me</label>
                                                        <textarea rows="4" cols="80" class="form-control" placeholder="Here can be your description"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-fill btn-primary">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    
                    
                    
                    
                    
                    
                   
                   
                   
                   
                    </div>
                    </div>

            </>
        )
    }
}

export default Profile;