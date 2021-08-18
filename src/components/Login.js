import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

function Login() {
    const dispatch = useDispatch();

    //payload
    const payloadData = {
        name: 'hashir',
        age: 23,
        email: 'hashirbaig@gmail.com',
    }

    return (
        <div>
            <button onClick={
                ()=>{
                    dispatch( login(payloadData) );
                }
            } >Login</button>
            <button onClick={
                ()=>{
                    dispatch( logout() );
                }
            } >Logout</button>
        </div>
    )
}

export default Login;