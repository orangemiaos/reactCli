import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Test from './components/Test.jsx';
import Main from './components/main.jsx';

const routes = [
    {path: '/', component: Main, exact: true},
    {path: '/test', component: Test}
]

class App extends Component {

    render() {
        return (
            <Router>
                {routes.map(route => (
                    <Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>
                ))}
            </Router>
        )
    }
}

export default App;
