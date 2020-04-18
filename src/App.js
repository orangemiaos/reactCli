// lazy ： 路由懒加载
// Suspense：载入过程中的页面显示
import React, {Suspense} from 'react';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter} from "react-router-dom";
import {Loader} from './components/src/index';
import renderRoutes from './utils/renderRoutes';
import routes from './utils/routes';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={Loader}>
                {renderRoutes(routes)}
            </Suspense>
        </BrowserRouter>
    </Provider>
);
export default App;
