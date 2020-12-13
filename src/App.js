import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import './css/sb-admin-2.css';
import './css/sb-admin-2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Content from './inc/Content';
import Sidebar from './inc/Sidebar';
import Topbar from './inc/Topbar';
import Footer from './inc/Footer';
import Employee_detail from './inc/Employ_detail';
import Test from './inc/Test';



class App extends Component{
  render(){
    return(
      <div className="App" id="wrapper">
        <BrowserRouter>
          <Route path="/" component={Sidebar} />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Route path="/" component={Topbar} />
              <switch>
                <Route exact path="/" component={Content} />
                <Route path="/detail" component={Employee_detail} />
              </switch>
              <Route path="/" component={Footer} />
            </div>
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
