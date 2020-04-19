// lazy ： 路由懒加载
// Suspense：载入过程中的页面显示
import React, {Suspense} from 'react';
import {Provider} from "react-redux";
import store from "./store";
//将 BrowserRouter 替换为 Router
import {BrowserRouter as Router} from "react-router-dom";
import {Loader} from './components/src/index';
import renderRoutes from './utils/renderRoutes';
import renderNavigation from './utils/renderNavigation';
import routes from './utils/routes';
import './utils/index.less';

const App = () => (
    <Provider store={store}>
        <Router>
            <Suspense fallback={Loader}>
                <div className='box'>
                    <div className="box-left">
                        {renderNavigation(routes)}
                    </div>
                    <div className="box-right">
                        {renderRoutes(routes)}
                    </div>
                </div>
            </Suspense>
        </Router>
    </Provider>
);
export default App;
