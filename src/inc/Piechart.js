import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut } from "react-chartjs-2";

const PieChart =({match})=>{

    const user_no=match.params.user_no
    // console.log(id)
    const [voiceData, setVoiceData]=useState(0);

    const apiEndpoint='https://se87vc7273.execute-api.us-east-1.amazonaws.com/default/get-rds?table=voice_emotion&user_id='+user_no;
    // console.log(apiEndpoint)

    const getVoiceStatus=async()=>{
        await axios.get(apiEndpoint).then((res) => {
            const data = res.data;
        setVoiceData(data)
        // console.log(data)
        });
    };


    let emotionList=[];
    var Happy=0, Sad=0, Angry=0,Fearful=0, Disgust=0, Surprised=0;
    
    {voiceData&&voiceData.map((data)=>{
        // emotionList.push(data.emotion)
        switch(data.emotion){
            case 1:
                Happy+=1
                break;
            case 2:
                Sad+=1
                break;
            case 3:
                Angry+=1
                break;
            case 4:
                Fearful+=1
                break;
            case 5:
                Disgust+=1
                break;
            case 6:
                Surprised+=1
                break;
        }
        
    });}
    
    emotionList=[Happy, Sad, Angry, Fearful, Disgust, Surprised]

    console.log(emotionList)
    useEffect(()=>{
        getVoiceStatus()

    },[]);


    const expData = {
        labels: ["Happy", "Sad", "Angry", "Fearful", "Disgust", "Surprised"],
        datasets: [
          {
            labels: ["Happy", "Sad", "Angry", "Fearful", "Disgust", "Surprised"],
            data: emotionList,
            borderWidth: 2,
            hoverBorderWidth: 3,
            backgroundColor: [
              "rgba(238, 102, 121, 1)",
              "rgba(98, 181, 229, 1)",
              "rgba(255, 198, 0, 1)",
              "rgba(115, 255, 128, 1)",
              "rgba(238, 253, 97, 1)",
              "rgba(128, 150, 242, 1)",
              
            ],
            fill: true
          }
        ]
      };
    return(
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
                <div class="card-body" id="chart_cardbody">
                        <Doughnut
                            options={{
                            legend: {
                                display: true,
                                position: "bottom"
                            }
                            }}
                            data={expData}
                            height={300}
                        />
                    </div>
            </div>
        </div>
    );
}

export default PieChart;