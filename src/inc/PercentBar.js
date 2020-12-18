import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';


const PercentBar=()=>{
    

return(
    <>
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
    </>
);

}

export default PercentBar;