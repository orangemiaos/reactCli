import React, {Component} from 'react';
import './App.css';
// UI
// import {Button} from "antd";
// import 'antd/dist/antd.css';
// import Login from './pages/login/login.jsx';
// import Toolbar from './pages/Toolbar/Toolbar.jsx';
// import TestRedux from './pages/TestRedux/TestRedux.jsx';
import Test from './components/Test.jsx';

class App extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
                {/*<TestRedux/>*/}
                <Test/>
            </div>
        );
    }
}

export default App;
