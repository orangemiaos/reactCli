import React from "react";
import {Link} from "react-router-dom";

const renderNavigation = (routes)=>{
   return(
           <ul>
               {
                   routes.map((item,index)=>(
                       <li key={index}><Link to={item.path}>{item.name}</Link></li>
                   ))
               }
           </ul>
   )
};

export default renderNavigation;
