import React,{Component} from 'react';
import ThemedButton from './ThemedButton.jsx';
import {globalContext, globalData} from "./global";
const {Provider} = globalContext;

class Toolbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...globalData
        }
    }
    render(){
        return(
            <Provider value={this.state}>
                <ThemedButton/>
            </Provider>
            )
    }
}

export default Toolbar;
