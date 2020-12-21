import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountEmployee=()=>{

    const [employeeNum, setEmplyeeData]=useState(0);

    const apiEndpoint="https://teoz6y07xc.execute-api.us-east-1.amazonaws.com/default/get-rds-alluser?table=chat_user"

    const getEmployeeStatus=async()=>{
        await axios.get(apiEndpoint).then((res) => {
            const data = res.data;
            console.log(data.length)
        setEmplyeeData(data.length)

        
        });
    };

    useEffect(()=>{
        getEmployeeStatus()
    },[]);

    

    
    return(
    <div class="col-xl-4 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            직원 수</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{employeeNum}명</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-user fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default CountEmployee;