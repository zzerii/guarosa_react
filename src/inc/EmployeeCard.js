import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    
    return(
    <>
        <div class="row">
        {employeeData && employeeData.map((data) => {
            const name = data.user_name;
            const img=data.thumbnail;
            const user_no=data.user_no;
            const bad=data.bad;
            const good=data.good;
            const tbad=bad+'%';
            const tgood=good+'%';
            const link='/detail/'+user_no;
            
            return (
                <div class="col-lg-3 mb-4">
                    <a href={link}>
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">{name}</h6>
                            </div>
                            <div id="main_employee_card">                            
                                <img id="main_employee_pic" src={img}/>
                            </div>
                            <div class="card-body">
                                <h4 class="small font-weight-bold">Bad
                                <span id='bad_bar' class="float-right">{bad}%</span></h4>
                                <div class="progress mb-4">
                                    <div class="progress-bar bg-danger" role="progressbar" style={{width: tbad}}
                                        aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h4 class="small font-weight-bold">Good <span
                                        class="float-right">{good}%</span></h4>
                                <div class="progress mb-4">
                                    <div class="progress-bar" role="progressbar" style={{width: tgood}}
                                        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>  
            );
        })}
            
        </div>
        </>
    );
  
}

export default EmployeeCard;