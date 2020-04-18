// 路由懒加载
import {lazy} from "react";
const Login = lazy(() => import('../components/src/login/Login'));
const Test = lazy(() => import('../components/src/Test'));
const routes = [
    {path:'/Test',component:Test,exact:true},
    {path:'/',component:Login,exact:true},
];

export default routes;
