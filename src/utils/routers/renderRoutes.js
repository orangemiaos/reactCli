import React from "react";
//Switch匹配到第一个路由就不会继续匹配了
//Route 中 不加 exact，/about 也会匹配到 / ，不会停止匹配
import { Switch,Route} from "react-router-dom";

const renderRoutes = (routes)=>{
    return(
        <Switch>
            {
                routes.map((item,index)=>(
                    <Route path={item.path} component={item.component} exact={item.exact} key={index}/>
                ))
            }
        </Switch>
    )
};
export default renderRoutes;
