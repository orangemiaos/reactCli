// lazy ： 路由懒加载
// Suspense：载入过程中的页面显示
import React, {lazy, Suspense} from 'react';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter, Route} from "react-router-dom";

// 路由懒加载
const Login = lazy(() => import('./pages/login/login'));

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<div>正在加载中</div>}>
                <Route path={'/'} component={Login}/>
            </Suspense>
        </BrowserRouter>
    </Provider>
);
export default App;
