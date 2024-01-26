import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const LoginComponent = () => {

    const [username, setUserName] = useState('admin')
    const [password, setPassword] = useState('admin')
    const [ErrorMessage, setErrorMessage] = useState(false)
    const navigator = useNavigate()
    const authContext = useAuth()
 
    function handleUsernameChange(event) {
        return (
            setUserName(event.target.value)
        );
    }
    function handlePasswordChange(event) {
        return (
            setPassword(event.target.value)
        );
    }

    
    function handleSubmit() {
        if(authContext.login(username, password)){
            navigator(`/welcome/${username}`)
            
        }else {
            setErrorMessage(true)
        }
    }


       return (
        <div className='Login'>
            
            {ErrorMessage && <div className='ErrorMessage'>Check Username or Password!!</div>}
            
            <h1>Time to Login!!</h1>

            <div className='LoginForm'>
                <div>
                  <label>User Name</label>
                  <input type='text' name='username' value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                  <label>Password</label>
                  <input type='password' name='password' value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type='button' name='loginBtn' onClick={handleSubmit}> login </button>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;