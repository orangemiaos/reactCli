import React,{Component} from 'react';
import {globalContext} from "./global";


class ThemedButton extends Component{
    render(){
        return(
          <div>{this.context.value}</div>
        )
    }
}

ThemedButton.contextType =globalContext;
export default ThemedButton;
