import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import PercentBar from './PercentBar';

const EmployeeCard=()=>{

    // 직원 정보 불러오기
    const [employeeData, setEmplyeeData]=useState(0);

    const apiEndpoint="https://teoz6y07xc.execute-api.us-east-1.amazonaws.com/default/get-rds-alluser?table=chat_user"

    const getEmployeeStatus=async()=>{
        await axios.get(apiEndpoint).then((res) => {
            const data = res.data;
            console.log(data)
        setEmplyeeData(data)
        });
        
    };

    useEffect(()=>{
        getEmployeeStatus()
    },[]);

    // let employee_no=[];
    // {employeeData && employeeData.map((data) => {

    // const apiEndpoint_barChart="https://l7lx447wmc.execute-api.us-east-1.amazonaws.com/dev/get_userinfo_rds?table=eye_tracking&user_id="+user_no;

    // const getEmployeeStatus=async()=>{
    //     await axios.get(apiEndpoint).then((res) => {
    //         const data = res.data;
    //         console.log(data)
    //     setEmplyeeData(data)
    //     });
    // };

    // useEffect(()=>{
    //     getEmployeeStatus()
    // },[]);
    
    return(
    <>
        <div class="row">
        {employeeData && employeeData.map((data) => {
            const name = data.user_name;
            const img=data.thumbnail;
            const user_no=data.user_no;

            

            return (
                <div class="col-lg-3 mb-4">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">{name}</h6>
                        </div>
                        <div id="main_employee_card">                            
                            <img id="main_employee_pic" src={img}/>
                        </div>
                        <div class="card-body">
                            <BrowserRouter>

                                <Route path='/' component={PercentBar}></Route>
                            
                            </BrowserRouter>
                        </div>
                    </div>
                </div>  
            );
        })}
            
        </div>
        </>
    );
  
}

export default EmployeeCard;