import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search=()=>{

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


    function search_employee() {

        const search = document.getElementById('search').value;

        {employeeData && employeeData.map((data) => {
            const name = data.user_name;
            const user_no= data.user_no;
            
    
            if (search==name){
                const link='/detail/'+user_no;
                console.log(link)
                document.location.href = link
            }
    
        })}
        
    }
    

    

    
    return(
        <form
            class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
                <input type="text" class="form-control bg-light border-0 small" id='search' placeholder="직원 검색"
                    aria-label="Search" aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button" onClick={search_employee} >
                        <i class="fas fa-search fa-sm"></i>
                    </button>
                </div>
            </div>
        </form>
        // <li class="nav-item dropdown no-arrow d-sm-none">
        //     <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
        //         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //         <i class="fas fa-search fa-fw"></i>
        //     </a>

        //     <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
        //         aria-labelledby="searchDropdown">
        //         <form class="form-inline mr-auto w-100 navbar-search">
        //             <div class="input-group">
        //                 <input type="text" class="form-control bg-light border-0 small"
        //                     placeholder="Search for..." aria-label="Search"
        //                     aria-describedby="basic-addon2"/>
        //                 <div class="input-group-append">
        //                     <button class="btn btn-primary" type="button">
        //                         <i class="fas fa-search fa-sm"></i>
        //                     </button>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // </li>
);
}

export default Search;