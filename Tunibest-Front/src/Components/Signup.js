import './Signup.css';
import { useState } from 'react';
function Signup(){
    const [password,setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [showpassword, setshowpassword] = useState(false);
    const [showconfirmpassword, setshowconfirmpassword] = useState(false);
    const [passworderror, setpassworderror] = useState('');
    const hanndleconfirmpasswordappear = () =>{
        setshowconfirmpassword(!showconfirmpassword);
    }
    const handlepasswordchange = (event) =>{
        setpassword(event.target.value);
    }
    const handlepasswordconfirm = (event) => {
        setconfirmpassword(event.target.value);
    }
    const hanndlepasswordappear = () => {
        setshowpassword(!showpassword);
    }
    const handlesubmit = (event) => {
        event.preventDefault();
        if(password === ''){
            setpassworderror('Password is required...');
        }
        else if(password !== confirmpassword){
            setpassworderror('Passwords do not match...');
        }
        else{
            setpassworderror('');
        }
    }
        return(
        <div className='Sign'>
            <div className='Sign-field'>
                <h1 id='Signup'>Sign Up</h1>
                <input id='Sitxt' type='text' placeholder='Full Name'/>
                <input id='Sitxt' type='email' placeholder='Email'/>
                <input id='Sitxt1' type={showpassword ? 'text' : 'password'} placeholder='Password' onChange={handlepasswordchange} pattern='.{5,20}'/><i onClick={hanndlepasswordappear} id='Signfa1' class="fa fa-eye-slash" aria-hidden="true"></i>
                <input id='Sitxt1' type={showconfirmpassword ? 'text' : 'password'} placeholder='Confirm Password' onChange={handlepasswordconfirm} pattern='.{5,20}'/><i onClick={hanndleconfirmpasswordappear} id='Signfa1' class="fa fa-eye-slash" aria-hidden="true"></i>
                <input id='Sibtn' type='Submit' value='Sign Up' onClick={handlesubmit}/>
                <p style={{color:'red'}}>{passworderror}</p>
            </div>
            <div id='Si'></div>
        </div>
    );
}
export default Signup;