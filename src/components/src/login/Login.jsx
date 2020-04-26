import React from 'react';
import './login.less';
import {connect} from '../../../utils/decorator';
import {login} from '../../../utils/https/server';

@connect
class Login extends React.Component{
    componentDidMount() {
        this.getDecorator();
    }

    getDate = ()=>{
        login().then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    render() {
        return (
            <div className='login'>
                <input type="button" value={'点我获取数据'} onClick={this.getDate}/>
            </div>
        )
    }
}

export default Login;
