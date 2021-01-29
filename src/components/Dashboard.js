import React, { Component } from "react"
import "../assets/dist/js/sidebar"
import $ from "jquery"
import happiness from "../assets/dist/img/happiness.svg";
import { Icon, InlineIcon, } from '@iconify/react';
import spiralIcon from '@iconify/icons-typcn/spiral';
import userOutline from '@iconify/icons-typcn/user-outline';
import cogOutline from '@iconify/icons-typcn/cog-outline';
import cash from '@iconify/icons-typcn/credit-card';
import eye from '@iconify/icons-typcn/eye-outline';
import edit from '@iconify/icons-typcn/edit';
import {Pie, Bar} from "react-chartjs-2"
import {Link, Redirect} from "react-router-dom"
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"
import Loader from "./Loader"
import TopNav from "./TopNav"
import SideNav from "./SideNav"
import logo from "../components/payscrin.png"




class Dashboard extends Component {

    state = {
        labels: ['January', 'February', 'March',
        'April', 'May'],
datasets: [
 {
   label: 'Rainfall',
   backgroundColor: '#002563',
   borderColor: '#fff',
   borderWidth: 2,
   data: [65, 59, 80, 81, 56]
 }
]
    }


    // clock = () =>{
       
    //     var timebox = document.getElementById('timebox');
    //     var timeSec = document.getElementById('time-sec');
    //     var timeMin = document.getElementById('time-min');
    //     var timeHours = document.getElementById('time-hours');
    
        
    //         var time = new Date();
    //         timeMin.innerHTML = time.getMinutes();
    //         timeSec.innerHTML = time.getSeconds();
    //         timeHours.innerHTML = time.getHours();
    //       console.log(time);
        
    //       setInterval(this.clock, 1000);
        
        
    // }

    logout = () => {
        setInterval(this.clock, 1000);

        this.setState({
            loggedOut:true
        })
    }

    // componentDidMount(){

    //     this.clock();
    // }
    render(){

        if(this.state.loggedOut){
                return(
            <Redirect to={{pathname:"/Home"}}/>

                )
                    }
        return(
            <>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content="Responsive Bootstrap 4 Admin &amp; Dashboard Template"/>
        <meta name="author" content="Bdtask"/>
        <link rel="shortcut icon" href="assets/dist/img/favicon.png"/>
      
        <link href="assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="assets/plugins/metisMenu/metisMenu.min.css" rel="stylesheet"/>
        <link href="assets/plugins/fontawesome/css/all.min.css" rel="stylesheet"/>
        <link href="assets/plugins/typicons/src/typicons.min.css" rel="stylesheet"/>
        <link href="assets/plugins/themify-icons/themify-icons.min.css" rel="stylesheet"/>
      
        <link href="assets/plugins/datatables/dataTables.bootstrap4.min.css" rel="stylesheet"/>

        <link href="assets/dist/css/style.css" rel="stylesheet"></link>

        {/* <Loader/> */}
   
            <div className="fixed">

                  

                    <div class="wrapper">
            {/* SideNav */}
            <SideNav/>

            
            
            
            {/* <!-- Page Content  --> */}
            <div class="content-wrapper">
                <div class="main-content">

{/* TopNAv Spot */}
<TopNav/>



                 
                   
                   
                   
                   
                   
                   
                   
                    {/* <!--/.navbar--> */}
                    {/* <!--Content Header (Page header)--> */}
                    <div class="content-header row align-items-center m-0" style={{marginTop:"20px"}}>
                        <nav aria-label="breadcrumb" class="col-sm-4 order-sm-last mb-3 mb-sm-0 p-0 ">
                            <ol class="breadcrumb d-inline-flex font-weight-600 fs-13 bg-white mb-0 float-sm-right">
                                <li class="breadcrumb-item"><a>Home</a></li>
                                <li class="breadcrumb-item active" style={{color:"#002563"}}>Dashboard</li>
                            </ol>
                        </nav>
                        <div class="col-sm-8 header-title p-0">
                            <div class="media">
                                <div class="header-icon text-primary mr-3" ><Icon icon={spiralIcon}/></div>
                                <div class="media-body">
                                    <h1 class="font-weight-bold">Admin Dashboard</h1>
                                    <small>From now on you will start your activities.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--/.Content Header (Page header)-->  */}
                    <div class="body-content">
                        <div class="row">
                            <div class="col-lg-12 col-xl-6">
                                <div class="card mb-4">
                                    <div class="card-body text-center">
                                        <div class="row justify-content-center">
                                            <div class="greet-user col-12 col-xl-10">
                                                <img src={happiness} alt="..." class="img-fluid  mb-2"/>
                                                <h2 class="fs-23 font-weight-600 mb-2">
                                                    Congratulations John,
                                                </h2>
                                                <p class="text-muted">
                                                    You have done 57.6% more sales today. Check your new badge in your profile.
                                                </p>
                                                <a href="#!" class="btn btn-success" style={{backgroundColor:"#002563"}}>
                                                    Try it for free
                                                </a>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-xl-6">
                                <div class="row">
                                    <div class="col-md-6 col-lg-6">
                                        {/* <!--Revenue today indicator-->  */}
                                        <div class="p-2 bg-white rounded p-3 mb-3 shadow-sm">
                                            <div class="header-pretitle text-muted fs-11 font-weight-bold text-uppercase mb-2">
                                                Revenue today
                                            </div>
                                            <div class="badge badge-success fs-26 text-monospace mx-auto" style={{backgroundColor:"#002563"}}>$98<span class="opacity-50 small">.50</span></div>
                                            <div class="text-muted small mt-1">
                                                <span class="text-danger">
                                                    <i class="fas fa fa-long-arrow-alt-down"></i>
                                                    5% 
                                                </span> vs average
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6">
                                        {/* <!--Feedback-->  */}
                                        <div class="d-flex position-relative overflow-hidden flex-column p-3 mb-3 bg-white shadow-sm rounded">
                                            <div class="header-pretitle text-muted fs-11 font-weight-bold text-uppercase mb-2">Latest Feedback</div>
                                            <i class="fas fa fa-smile opacity-25 fa-5x text-warning decorative-icon"></i>
                                            <div class="d-flex">
                                                <div>
                                                    <img class="d-block rounded-circle" width="32" src="assets/dist/img/avatar-5.jpg"/>
                                                </div>
                                                <div class="pl-3">
                                                    Nothing bad to say<br/> at this point ðŸ˜Œ
                                                    <a class="d-block mt-1 small opacity-75" style={{color:"#002563"}}>Write back</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6">
                                        {/* <!--Balance indicator-->  */}
                                        <div class="p-2 bg-white rounded p-3 mb-3 shadow-sm">
                                            <div class="header-pretitle text-muted fs-11 font-weight-bold text-uppercase mb-2">
                                                Balance
                                            </div>
                                            <div class="text-muted">
                                                <i class="fas fa fa-long-arrow-alt-up text-success"></i>
                                                <span class=" text-size-2 text-monospace" style={{color:"#002563"}}>
                                                    0.02% 
                                                </span> this month
                                            </div>
                                            <span class="small">Stripe:</span>
                                            <span class="small text-monospace mx-auto">$4,480<span class="opacity-50">.00</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6">
                                        {/* <!--Time on site indicator-->  */}
                                        <div class="d-flex flex-column p-3 mb-3 bg-white shadow-sm rounded">
                                            <div class="header-pretitle text-muted fs-11 font-weight-bold text-uppercase mb-2">avg time on site</div>
                                            <div class="d-flex align-items-center">
                                                <i class="fas fa fa-clock opacity-25 mr-2 text-size-3"></i>
                                                <span class="text-size-2 text-monospace">10</span>
                                                <span class="text-size-2">m</span>
                                                <span class="text-size-2 text-monospace">30</span>
                                                <span class="text-size-2">s</span>
                                            </div>
                                            <div class="text-muted small">
                                                <span class="text-success text-monospace">
                                                    <i class="fas fa fa-long-arrow-alt-up"></i>
                                                    5% 
                                                </span> vs last week
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6">
                                        {/* <!--Top Referrals-->  */}
                                        <div class="d-flex flex-column p-3 mb-3 bg-white shadow-sm rounded">
                                            <div class="header-pretitle text-muted fs-11 font-weight-bold text-uppercase mb-2">Top Referrals</div>
                                            <div>
                                                <i class="fas fa fa-caret-up text-success"></i>
                                                <span class="mx-1 text-monospace">62%</span>
                                                {/* <!--           <i class="fab fa-xs fa-google"></i>  --> */}
                                                <a>google</a>
                                            </div>
                                            <div class="opacity-75">
                                                <i class="fas fa fa-caret-down text-danger"></i>
                                                <span class="text-secondary mx-1 text-monospace">25%</span>
                                                {/* <!--           <i class="fab fa-xs fa-y-combinator"></i>  --> */}
                                                <a>news.ycombinator</a>
                                            </div>
                                            <div class="opacity-50">
                                                <i class="text-muted">â€“</i>
                                                <span class="text-secondary mx-1 text-monospace">20%</span>
                                                {/* <!--           <i class="fab fa-xs fa-product-hunt"></i>  --> */}
                                                <a>producthunt</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6">
                                        {/* <!--Sessions by device-->   */}
                                        <div class="d-flex flex-column p-3 mb-3 bg-white shadow-sm rounded">
                                            <div class="header-pretitle text-muted fs-11 font-weight-bold text-uppercase mb-2">Sessions by device</div>
                                            <div class="row text-center">
                                                <div class="col">
                                                    <i class="fas fa fa-mobile mb-2 text-size-2"></i>
                                                    <div class="text-monospace">54%</div>
                                                </div>
                                                <div class="col">
                                                    <i class="fas fa fa-tablet opacity-50 mb-2 text-size-2"></i>
                                                    <div class="text-monospace text-secondary">26%</div>
                                                </div>
                                                <div class="col">
                                                    <i class="fas fa fa-laptop opacity-25 mb-2 text-size-2"></i>
                                                    <div class="text-monospace text-secondary">20%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-3 mb-4">
                                <div class="card">
                                    <div class="card-header">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 class="fs-17 font-weight-600 mb-0">Pie Chart</h6>
                                            </div>
                                            <div class="text-right">
                                                <div class="actions">
                                                    <a class="action-item"><i class="ti-reload"></i></a>
                                                    <div class="dropdown action-item" data-toggle="dropdown">
                                                        <a class="action-item"><i class="ti-more-alt"></i></a>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a class="dropdown-item">Refresh</a>
                                                            <a class="dropdown-item">Manage Widgets</a>
                                                            <a class="dropdown-item">Settings</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                      

                                        <Pie
          data={this.state}
          options={{
            title:{
              display:true,
            //   text:'Average Rainfall per month',
              fontSize:20,
              
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
          className="cha"
        />
                                          
                                      
                                        <div class="chart-legend">
                                            <div class="chart-legend-item">
                                                <div class="chart-legend-color kelly-green"></div>
                                                <p>From Google</p>
                                                <p class="percentage text-muted">63.259 %</p>
                                            </div>
                                            <div class="chart-legend-item">
                                                <div class="chart-legend-color kelly-green2"></div>
                                                <p>Your Website</p>
                                                <p class="percentage text-muted">25.321 %</p>
                                            </div>
                                            <div class="chart-legend-item">
                                                <div class="chart-legend-color whisper"></div>
                                                <p>Others</p>
                                                <p class="percentage text-muted">11.42 %</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-12 col-xl-9">
                                <div class="card mb-4">
                                    <div class="card-header">
                                        <h2 class="fs-18 font-weight-bold mb-0">Bar chart</h2>
                                    </div>
                                    <div class="card-body">
                                    <Bar
          data={this.state}
          options={{
            title:{
              display:true,
            //   text:'Average Rainfall per month',
              fontSize:20,
              
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          className="cha"
        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-header">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 class="fs-17 font-weight-600 mb-0">Recent Orders</h6>
                                            </div>
                                            <div class="text-right">
                                                <div class="actions">
                                                    <a class="action-item"><i class="ti-reload"></i></a>
                                                    <div class="dropdown action-item" data-toggle="dropdown">
                                                        <a class="action-item"><i class="ti-more-alt"></i></a>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a class="dropdown-item">Refresh</a>
                                                            <a class="dropdown-item">Manage Widgets</a>
                                                            <a class="dropdown-item">Settings</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            {/* <!--<table class="table table-sm table-nowrap card-table">--> */}
                                            <table class="table display table-bordered table-striped table-hover bg-white m-0 card-table">
                                                <thead>
                                                    <tr>
                                                        <th>Image</th>
                                                        <th>Name</th>
                                                        <th>Phone</th>
                                                        <th>Street Address</th>
                                                        <th>% Share</th>
                                                        <th>City</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="avatar-group">
                                                                <a href="user_profile.html" class="avatar avatar-xs" data-toggle="tooltip" title="Melissa Ayre">
                                                                    <img src="assets/dist/img/avatar-1.jpg" class="avatar-img rounded-circle" alt="..."/>
                                                                </a>
                                                                <a href="user_profile.html" class="avatar avatar-xs" data-toggle="tooltip" title="Karen Robinson">
                                                                    <img src="assets/dist/img/avatar-2.jpg" class="avatar-img rounded-circle" alt="..."/>
                                                                </a>
                                                                <a href="user_profile.html" class="avatar avatar-xs" data-toggle="tooltip" title="Miyah Myles">
                                                                    <img src="assets/dist/img/avatar-3.jpg" class="avatar-img rounded-circle" alt="..."/>
                                                                </a>
                                                                <a href="user_profile.html" class="avatar avatar-xs" data-toggle="tooltip" title="Daniela Dewitt">
                                                                    <img src="assets/dist/img/avatar-4.jpg" class="avatar-img rounded-circle" alt="..."/>
                                                                </a>
                                                            </div>
                                                        </td>
                                                        <td>Naeem Khan</td>
                                                        <td>123 456 7890</td>
                                                        <td>294-318 Duis Ave</td>
                                                        <td>
                                                            <div class="sparkline1"></div>
                                                        </td>
                                                        <td>Noakhali</td>
                                                        <td>
                                                            <a class="btn btn-success-soft btn-sm mr-1"><Icon icon={eye}/></a>
                                                            <a class="btn btn-danger-soft btn-sm"><Icon icon={edit}/></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="avatar-group">
                                                                <a href="user_profile.html" class="avatar avatar-xs" data-toggle="tooltip" title="Miyah Myles">
                                                                    <img src="assets/dist/img/avatar-3.jpg" class="avatar-img rounded-circle" alt="..."/>
                                                                </a>
                                                                <a href="user_profile.html" class="avatar avatar-xs" data-toggle="tooltip" title="Daniela Dewitt">
                                                                    <img src="assets/dist/img/avatar-2.jpg" class="avatar-img rounded-circle" alt="..."/>
                                                                </a>
                                                            </div>
                                                        </td>
                                                        <td>Tuhin Sarkar</td>
                                                        <td>123 456 7890</td>
                                                        <td>680-1097 Mi Rd.</td>
                                                        <td>
                                                            <div class="sparkline2"></div>
                                                        </td>
                                                        <td>Lavoir</td>
                                                        <td>
                                                        <a class="btn btn-success-soft btn-sm mr-1"><Icon icon={eye}/></a>
                                                            <a class="btn btn-danger-soft btn-sm"><Icon icon={edit}/></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="avatar-group">
                                                                <a href="user_profile.html" class="avatar avatar-xs" data-toggle="tooltip" title="Karen Robinson">
                                                                    <img src="assets/dist/img/avatar-2.jpg" class="avatar-img rounded-circle" alt="..."/>
                                                                </a>
                                                                <a href="user_profile.html" class="avatar avatar-xs" data-toggle="tooltip" title="Miyah Myles">
                                                                    <img src="assets/dist/img/avatar-3.jpg" class="avatar-img rounded-circle" alt="..."/>
                                                                </a>
                                                                <a href="user_profile.html" class="avatar avatar-xs" data-toggle="tooltip" title="Daniela Dewitt">
                                                                    <img src="assets/dist/img/avatar-4.jpg" class="avatar-img rounded-circle" alt="..."/>
                                                                </a>
                                                            </div>
                                                        </td>
                                                        <td>Tanjil Ahmed</td>
                                                        <td>456 789 1230</td>
                                                        <td>Ap #289-8161 In Avenue</td>
                                                        <td>
                                                            <div class="sparkline3"></div>
                                                        </td>
                                                        <td>Dhaka</td>
                                                        <td>
                                                        <a class="btn btn-success-soft btn-sm mr-1"><Icon icon={eye}/></a>
                                                            <a class="btn btn-danger-soft btn-sm"><Icon icon={edit}/></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="avatar-group">
                                                                <a href="user_profile.html" class="avatar avatar-xs" data-toggle="tooltip" title="Melissa Ayre">
                                                                    <img src="assets/dist/img/avatar-1.jpg" class="avatar-img rounded-circle" alt="..."/>
                                                                </a>
                                                                <a href="user_profile.html" class="avatar avatar-xs" data-toggle="tooltip" title="Karen Robinson">
                                                                    <img src="assets/dist/img/avatar-2.jpg" class="avatar-img rounded-circle" alt="..."/>
                                                                </a>
                                                                <a href="user_profile.html" class="avatar avatar-xs" data-toggle="tooltip" title="Daniela Dewitt">
                                                                    <img src="assets/dist/img/avatar-4.jpg" class="avatar-img rounded-circle" alt="..."/>
                                                                </a>
                                                            </div>
                                                        </td>
                                                        <td>Sourav</td>
                                                        <td>789 123 4560</td>
                                                        <td>226-4861 Augue. St.</td>
                                                        <td>
                                                            <div class="sparkline4"></div>
                                                        </td>
                                                        <td>Rongpur</td>
                                                        <td>
                                                        <a class="btn btn-success-soft btn-sm mr-1"><Icon icon={eye}/></a>
                                                            <a class="btn btn-danger-soft btn-sm"><Icon icon={edit}/></a>
                                                        </td>
                                                    </tr>
                                                   
                                                  
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--/.body content--> */}
                </div>
                {/* <!--/.main content--> */}
                <footer class="footer-content">
                    <div class="footer-text d-flex align-items-center justify-content-between">
                        <div class="copy">&copy; 2020 Payscrin</div>
                        {/* <div class="credit">Designed by: <a>XsaySoft</a></div> */}
                    </div>
                </footer>
                {/* <!--/.footer content--> */}
                <div class="overlay"></div>
            </div>
            {/* <!--/.wrapper--> */}
        </div>

            </div>
            </>
        )
    }
}

export default Dashboard;