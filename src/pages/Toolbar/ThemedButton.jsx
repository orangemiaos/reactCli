import React,{Component} from 'react';
import {globalContext} from "./global";

const {Consumer} = globalContext;


class ThemedButton extends Component{
    render(){
        return(
            <Consumer>
                {item=>item.value}
            </Consumer>
        )
    }
}

export default ThemedButton;
