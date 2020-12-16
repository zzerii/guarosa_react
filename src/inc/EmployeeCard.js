import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeCard=()=>{

    const [employeeData, setEmplyeeData]=useState(0);

    const apiEndpoint="https://se87vc7273.execute-api.us-east-1.amazonaws.com/default/get-rds?table=user&user_id=1"

    const getEmployeeStatus=async()=>{
        await axios.get(apiEndpoint).then((res) => {
            const data = res.data;
            console.log(data)
        setEmplyeeData(data)

        
        });
    };

    useEffect(()=>{
        getEmployeeStatus()
    });

    console.log(employeeData)
    // const name=employeeData.user_name;
    // const img=employeeData.thumbnail;

    
    return(
 
        <div class="row">
            {
                this.employeeData.map((employeeData)=>
                <div class="col-lg-3 mb-4">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">{employeeData.user_name}</h6>
                        </div>
                        <div id="main_employee_card">                            
                            <img id="main_employee_pic" src={employeeData.thumbnail}/>
                        </div>
                        <div class="card-body">
                            <h4 class="small font-weight-bold">Bad <span
                                    class="float-right">20%</span></h4>
                            <div class="progress mb-4">
                                <div class="progress-bar bg-danger" role="progressbar" style={{width: '20%'}}
                                    aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 class="small font-weight-bold">Good <span
                                    class="float-right">60%</span></h4>
                            <div class="progress mb-4">
                                <div class="progress-bar" role="progressbar" style={{width: '60%'}}
                                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>)
            }

            {/* <div class="col-lg-3 mb-4">
                
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">{name}</h6>
                    </div>
                    <div id="main_employee_card">                            
                        <img id="main_employee_pic" src={img}/>
                    </div>
                    <div class="card-body">
                        <h4 class="small font-weight-bold">Bad <span
                                class="float-right">20%</span></h4>
                        <div class="progress mb-4">
                            <div class="progress-bar bg-danger" role="progressbar" style={{width: '20%'}}
                                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 class="small font-weight-bold">Good <span
                                class="float-right">60%</span></h4>
                        <div class="progress mb-4">
                            <div class="progress-bar" role="progressbar" style={{width: '60%'}}
                                aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div> */}
            
        </div>

    );
  
}

export default EmployeeCard;