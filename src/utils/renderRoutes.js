import React from "react";
import { Route} from "react-router-dom";

const renderRoutes = (routes)=>{
    return(
        routes.map((item,index)=>(
            <Route path={item.path} component={item.component} key={index}/>
        ))
    )
};
export default renderRoutes;
