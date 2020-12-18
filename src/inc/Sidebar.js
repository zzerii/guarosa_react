import React, { Component, useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';


const Sidebar =()=>{

    const [employeeData, setEmplyeeData]=useState(0);

    const apiEndpoint="https://teoz6y07xc.execute-api.us-east-1.amazonaws.com/default/get-rds-alluser?table=chat_user"

    const getEmployeeStatus=async()=>{
        await axios.get(apiEndpoint).then((res) => {
            const data = res.data;
            // console.log(data)
        setEmplyeeData(data)

        
        });
    };

    useEffect(()=>{
        getEmployeeStatus()
    },[]);

    
  
    return(
    <ul class="navbar-nav bg-gradient-warning sidebar sidebar-dark accordion" id="accordionSidebar" style={{paddingTop:'10px'}}> 

        
        <div style={{textAlign:'center'}}>
            <a href="/">
                <img src='https://employee-img-grs.s3.ap-northeast-2.amazonaws.com/logo/LOGO_1.png'  style={{maxWidth:'200px'}}/>
            </a>
        </div>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item active">
            <a class="nav-link" href="/">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Main</span></a>
        </li>

        <hr class="sidebar-divider"/>

        <div class="sidebar-heading">
            직원 관리
        </div>

        {employeeData && employeeData.map((data) => {
            const name = data.user_name;
            const user_no= data.user_no;
            const link='/detail/'+user_no;
            // console.log(link)
            return (
                <li class="nav-item" key={user_no}>
                        <a href={link} class="nav-link" >
                            <i class="fas fa-user"></i>
                            <span>{name}</span>
                        </a>
                </li>);
        })}
        
        <li class="nav-item">
            <a class="nav-link" href="/detail">
                <i class="fas fa-user"></i>
                <span>table</span></a>
        </li>

        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-cog"></i>
                <span>설정</span>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Custom Components:</h6>
                    <a class="collapse-item" href="buttons.html">Buttons</a>
                    <a class="collapse-item" href="cards.html">Cards</a>
                </div>
            </div>
        </li>

        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fas fa-fw fa-wrench"></i>
                <span>Utilities</span>
            </a>
            <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Custom Utilities:</h6>
                    <a class="collapse-item" href="utilities-color.html">Colors</a>
                    <a class="collapse-item" href="utilities-border.html">Borders</a>
                    <a class="collapse-item" href="utilities-animation.html">Animations</a>
                    <a class="collapse-item" href="utilities-other.html">Other</a>
                </div>
            </div>
        </li>

        <div class="sidebar-heading">
            Addons
        </div>

        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                aria-expanded="true" aria-controls="collapsePages">
                <i class="fas fa-fw fa-folder"></i>
                <span>Pages</span>
            </a>
            <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Login Screens:</h6>
                    <a class="collapse-item" href="login.html">Login</a>
                    <a class="collapse-item" href="register.html">Register</a>
                    <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                    <div class="collapse-divider"></div>
                    <h6 class="collapse-header">Other Pages:</h6>
                    <a class="collapse-item" href="404.html">404 Page</a>
                    <a class="collapse-item" href="blank.html">Blank Page</a>
                </div>
            </div>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="charts.html">
                <i class="fas fa-fw fa-chart-area"></i>
                <span>Charts</span></a>
        </li>

        <hr class="sidebar-divider d-none d-md-block"/>

        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        <div class="sidebar-card">
            <img class="sidebar-card-illustration mb-2" src="img/grs_member.png" alt=""/>
            <p class="text-center mb-2"><strong>과로사</strong>를 소개 합니다!</p>
            <a class="btn btn-info btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">About GRS</a>
        </div>

    </ul>
    );
  
}

export default Sidebar;
