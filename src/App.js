import React, {useState} from "react";
import Login from './Components/Login/index'
import DashboardNav from './Components/Dashboard/DashboardNav';

export default function App(){
    let token = localStorage.getItem('Token')
 return(

     <div className="container-fluid mt-3">
         <div className="container">
         {
              token ? <DashboardNav/>  : <Login />
              
         }
         </div>


     </div>

 )   
}