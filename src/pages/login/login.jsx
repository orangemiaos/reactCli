import React,{useRef} from 'react';

import './login.less';

class Login extends React.Component{
     constructor(props){
         super(props);
         this.state = {
             result:'result'
         }
     }
     myClick=()=>{
       console.log(this.refs.a.value)
     };
    render() {
        return (
            <div className='login'  onChange={this.myClick}>
                <input type="text" ref='a'/>
            </div>
        )
    }
}
// function Login() {
//     const textInput = useRef(null);
//     function handle(event) {
//       console.log(event.target.value);
//     }
//     return (
//         <div className='login'>
//             <input type="text" ref={textInput} onChange={handle}/>
//         </div>
//     )
// }


export default Login;
