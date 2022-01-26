import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

export default function Register () {
    const [ user, setUser ] = useState({
        username: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const registerSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://sas-rest-api.herokuapp.com/api/auth/register', {
                username: user.username,
                email: user.email,
                password: user.password
            });
            console.log(res);
            setUser({ username: '', email: '', password: '' });
            return navigate('/');
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className='login'>
            <img
                className="login__logo"
                src='https://s3.amazonaws.com/thumbnails.venngage.com/template/fc8535df-be09-4c80-8ea5-a69a34b2318e.png' 
                alt="amazon"
            />

            <div className='login__container'>
                <h1>Register</h1>

                <form onSubmit={registerSubmit} method="post">          
                    <h5>Username</h5>
                    <input type='text' id="username" name="username" value={user.username} onChange={handleChange} />
         
                    <h5>E-mail</h5>
                    <input type='text' id="email" name="email" value={user.email} onChange={handleChange} />

                    <h5>Password</h5>
                    <input type='password' id="password" name="password" value={user.password} onChange={handleChange} />

                    <button type='submit' className='login__signInButton'>Register</button>
                </form>

            </div>
        </div>
    )
}