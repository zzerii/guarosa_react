import React, {useEffect, useState } from 'react';
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
        
        <hr class="sidebar-divider d-none d-md-block"/>

        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        <div class="sidebar-card">
            <img class="sidebar-card-illustration mb-2" src="img/grs_member.png" alt=""/>
            <p class="text-center mb-2"><strong>과로사</strong>를 소개 합니다!</p>
        </div>

    </ul>
    );
  
}

export default Sidebar;
