import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from "react-chartjs-2";

// const AreaChart =()=>{




const AreaChart = ({match}) => {

    const user_no=match.params.user_no
    // console.log(id)
    const [EyeData, setEyeData]=useState(0);

    const apiEndpoint='https://se87vc7273.execute-api.us-east-1.amazonaws.com/default/get-rds?table=eye_tracking&user_id='+user_no;
    // console.log(apiEndpoint)

    const getEyeStatus=async()=>{
        await axios.get(apiEndpoint).then((res) => {
            const data = res.data;
        setEyeData(data)
        });
    };

    useEffect(()=>{
        getEyeStatus()
    },[]);

    let eye_interval=[];
    {EyeData&&EyeData.map((data)=>{
        eye_interval.push(data.time_interval)
    })
    }
    let recently_eye=[];
    for(var i=0; i<20;i++){
        recently_eye[i]=eye_interval.reverse()[i];
    }
    console.log(recently_eye)


    const options = {
        legend: {
          display: false, // label 보이기 여부
        },
        scales: {
          yAxes: [{
            ticks: { 
              min: 0, // y축 스케일에 대한 최소값 설정
              stepSize: 1, // y축 그리드 한 칸당 수치
            }
          }]
        },
       
        // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
        // true : 크기가 알아서 결정됨.
        maintainAspectRatio: false 
      }
      const data = {
        // 각 막대별 라벨
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        datasets: [
          {
            borderColor : "#7585FD",
            borderWidth: 2,
            
            pointColor : "#fff",
            pointStrokeColor : "#7585FD",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#7585FD",
            data : recently_eye
          }
        ]
      };
    


    return(
        <>
        
            <div class="col-xl-8 col-lg-4">

                
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
                    <div class="card-body" id="chart_cardbody_eye">
                        <div class="chart-area">
                        <Line
                            data={data}
                            options={options}
                            height={100}
                        />
                        </div>
                    </div>
                </div>
                
            </div>
        
        </>
    );
}

export default AreaChart;