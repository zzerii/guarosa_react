import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Json from 'react-json';
// import websocket from 'websocket';
// import json from 'react-json';


const Employee_detail =({match})=>{
   
    const user_no=match.params.user_no
    // console.log(id)
    const [employeeData, setEmplyeeData]=useState(0);

    const apiEndpoint='https://se87vc7273.execute-api.us-east-1.amazonaws.com/default/get-rds?table=chat_user&user_id='+user_no;
    // console.log(apiEndpoint)

    const getEmployeeStatus=async()=>{
        await axios.get(apiEndpoint).then((res) => {
            const data = res.data[0];
            
        setEmplyeeData(data)

        
        });
    };

    useEffect(()=>{
        getEmployeeStatus()
    },[]);

    // console.log(employeeData)
    const name=employeeData.user_name;
    const birth=employeeData.birth;
    const img=employeeData.thumbnail;
    const task=employeeData.task;
    const rank=employeeData.user_rank;
    const userno=employeeData.user_no;


    // Websocket

    const ws_url="ws://52.73.45.94:8000/ws/chat/"+user_no+'/'
    // const ws = new WebSocket(ws_url);
        
    function sendMessage(){

        const message = document.getElementById('message').value;

        const ws = new WebSocket(ws_url );

        ws.onopen = () => {
            console.log('WebSocket Client Connected');
            var pp=JSON.stringify({message});
            console.log(pp);
            ws.send(pp);
        };
    }

    return(
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
                        
                        <div class="col-lg-3 mb-4"  style={{fontSize:'x-large',padding:'90px 0px 0px 0px',textAlign:'left'}}>
                            <div style={{marginBottom:'20px'}}><strong>이름:</strong> {name}</div>
                            <div style={{marginBottom:'20px'}}><strong>생년월일:</strong> {birth}</div>
                            <div style={{marginBottom:'20px'}}><strong>직무:</strong> {task}</div>
                            <div style={{marginBottom:'20px'}}><strong>직급:</strong> {rank}</div>
                            <div style={{marginBottom:'20px'}}><strong>사번:</strong> {userno}</div>
                        </div>

                        <div class="col-lg-5 mb-4" style={{padding: '30px'}}>
                            <input id="message" type={Text}></input>
                                <button class="btn-info" id="sendButton" onClick={sendMessage} >Send</button>
                            
                        </div>
                        
                    </div>
                </div>
                        
            </div>
        </div>
    );
  
}

export default Employee_detail;
