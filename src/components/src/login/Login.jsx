import React from 'react';
import './login.less';

import {connect} from '../../../utils/decorator';

@connect
class Login extends React.Component{
    componentDidMount() {
        this.getDecorator();
    }
    render() {
        return (
            <div className='login'>
               我是Login
            </div>
        )
    }
}

export default Login;
