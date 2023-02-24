import './login.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Login(props){
    const changeloginstate = () =>{
            props.onLogin();
    }
    return(
        <div className='login1'>
            <div className='login'>
            <p id='log'><b>Login</b></p>
            <input id='txt' type='text' placeholder='Username'/><i id='u' class="fa fa-user" aria-hidden="true"></i><br></br><br></br>
            <input id='txt' type='password' placeholder='Password'/><i id='u1' class="fa fa-unlock-alt" aria-hidden="true"></i><br></br><br></br><br></br>
            <input id='btn' type='submit' value='Login' onClick={changeloginstate}/><br></br><br></br><br></br>
            <p id='s1'>Forgot password?</p><br></br>
            <p><NavLink id='s1' to='/Signup'>New user? Sign Up</NavLink></p><br></br>
            </div>
            <div id='M'></div>
        </div>
    );
}

export default Login;