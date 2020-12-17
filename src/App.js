import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import './css/sb-admin-2.css';
import './css/sb-admin-2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import EmployeeCard from './inc/EmployeeCard';
import Sidebar from './inc/Sidebar';
import Search from './inc/TopBar/Search';
import Alert from './inc/TopBar/Alert';
import MessageAlert from './inc/TopBar/MessageAlert';
import TopManageInfo from './inc/TopBar/TopManageInfo';
import Footer from './inc/Footer';
import Piechart from './inc/Piechart';
import Areachart from './inc/Areachart';
import CountEmployee from './inc/CountEmployee';
import RestEmployee from './inc/RestEmployee';
import StressAvg from './inc/StressAvg';
import Income from './inc/Income';
import Employee_detail from './inc/Employ_detail';
import Test from './inc/Test';



const App =()=>{
    return(
      <div className="App" id="wrapper">
        <BrowserRouter>
          <Sidebar></Sidebar>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <Route path="/" component={Search} />
                <ul class="navbar-nav ml-auto">
                  <Route path="/" component={Alert} />
                  <Route path="/" component={MessageAlert} />
                  <div class="topbar-divider d-none d-sm-block"></div>
                  <Route path="/" component={TopManageInfo} />
                </ul>
              </nav>
              
              <div class="container-fluid">
                <switch>
                  <div class='row'>
                    <Route exact path="/" component={CountEmployee} />
                    <Route exact path="/" component={RestEmployee} />
                    <Route exact path="/" component={StressAvg} />
                    <Route exact path="/" component={Income} />
                  </div>
                  <Route exact path="/" component={EmployeeCard} />
                  <Route path="/detail/:user_no" component={Employee_detail} />
                  <div class="row">
                    <Route path="/detail" component={Areachart} />
                    <Route path="/detail" component={Piechart} />
                  </div>
                </switch>
              </div>
              <Route path="/" component={Footer} />
            </div>
          </div>
        </BrowserRouter>
        
      </div>
    );
}

export default App;
