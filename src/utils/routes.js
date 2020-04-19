// 路由懒加载
import {lazy} from "react";
const Login = lazy(() => import('../components/src/login/Login'));
const Test = lazy(() => import('../components/src/Test'));
const routes = [
    {path:'/',name:'主页',component:Login,exact:true},
    {path:'/Test',name:'技巧1',component:Test,exact:true},
];

export default routes;
