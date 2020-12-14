import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';


const Employee_detail =()=>{
   
    const [employeeData, setEmplyeeData]=useState(0);

    const apiEndpoint="https://se87vc7273.execute-api.us-east-1.amazonaws.com/default/get-rds?user_id=1&table=user"

    const getEmployeeStatus=async()=>{
        await axios.get(apiEndpoint).then((res) => {
            const data = res.data[0];
            
        setEmplyeeData(data)

        
        });
    };

    useEffect(()=>{
        getEmployeeStatus()
    });

    console.log(employeeData)
    const name=employeeData.user_name;
    const birth=employeeData.birth;
    const img=employeeData.thumbnail;
    const task="지나가던 사람01";
    const rank=employeeData.user_rank;
    const userno="123456";
    // const name=employeeData.user_name;
    // const birth=employeeData.birth;
    // const img=employeeData.thumbnail;
    // const task="지나가던 사람01";
    // const rank=employeeData.user_rank;
    // const userno="123456";



    return(
        <div class="container-fluid">

            {/* <!-- Page Heading --> */}
            <div class="row">
                <div class="col-lg-12 mb-4">
                    {/* <!-- Project Card Example --> */}
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">직원 정보</h6>
                        </div>
                        <div class="cardbody row" id="employee_info">
                            <div class="col-lg-4 mb-4">
                                <div style={{margin: '20px'}}>                            
                                    <img src={img} style={{width: '300px'}} />
                                </div>
                            </div>
                            
                            <div class="col-lg-8 mb-4"  style={{fontSize:'x-large',padding:'90px 0px 0px 0px',textAlign:'left'}}>
                                <div style={{marginBottom:'20px'}}><strong>이름:</strong> {name}</div>
                                <div style={{marginBottom:'20px'}}><strong>생년월일:</strong> {birth}</div>
                                <div style={{marginBottom:'20px'}}><strong>직무:</strong> {task}</div>
                                <div style={{marginBottom:'20px'}}><strong>직급:</strong> {rank}</div>
                                <div style={{marginBottom:'20px'}}><strong>사번:</strong> {userno}</div>
                            </div>
                            
                        </div>
                    </div>
                           
                </div>
            </div>
            {/* <!-- Content Row --> */}

            <div class="row">

                {/* <!-- Area Chart --> */}
                <div class="col-xl-4 col-lg-4">
                    <div class="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">눈 피로도</h6>
                            <div class="dropdown no-arrow">
                                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                    aria-labelledby="dropdownMenuLink">
                                    <div class="dropdown-header">Dropdown Header:</div>
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card Body --> */}
                        <div class="card-body">
                            <div class="chart-area">
                                <canvas id="myAreaChart"></canvas>
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* <!-- Pie Chart --> */}
                <div class="col-xl-4 col-lg-5">
                    <div class="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">감정 상태</h6>
                            <div class="dropdown no-arrow">
                                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                    aria-labelledby="dropdownMenuLink">
                                    <div class="dropdown-header">Dropdown Header:</div>
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card Body --> */}
                        <div class="card-body">
                            <div class="chart-pie pt-4 pb-2">
                                <canvas id="myPieChart"></canvas>
                            </div>
                            <div class="mt-4 text-center small">
                                <span class="mr-2">
                                    <i class="fas fa-circle text-danger"></i> Angry
                                </span>
                                <span class="mr-2">
                                    <i class="fas fa-circle text-info"></i> Happy
                                </span>
                                <span class="mr-2">
                                    <i class="fas fa-circle text-warning"></i> Sad
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
  
}

export default Employee_detail;
