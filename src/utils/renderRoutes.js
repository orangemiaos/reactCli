import React from "react";
//Switch匹配到第一个路由就不会继续匹配了
import { Switch,Route} from "react-router-dom";

const renderRoutes = (routes)=>{
    return(
        <Switch>
            {
                routes.map((item,index)=>(
                    <Route path={item.path} component={item.component} key={index}/>
                ))
            }
        </Switch>
    )
};
export default renderRoutes;
