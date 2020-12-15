import { Component } from 'react';


const Search=()=>{

    

    
    return(
        <form
            class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
                <input type="text" class="form-control bg-light border-0 small" placeholder="직원 검색"
                    aria-label="Search" aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
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