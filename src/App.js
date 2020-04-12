
import React,{Component} from 'react';
import './App.css';
// UI
// import {Button} from "antd";
// import 'antd/dist/antd.css';
// import Login from './pages/login/login.jsx';
import Toolbar from './pages/Toolbar/Toolbar.jsx';
import {globalContext,globalData} from "./pages/Toolbar/global";
const {Provider}  = globalContext;

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            ...globalData
        }
    }
    render() {
        return (
            <Provider value={this.state}>
                <div className="App">
                    <Toolbar/>
                </div>
            </Provider>
        );
    }
}

export default App;
