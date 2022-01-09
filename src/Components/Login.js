import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

export default function Login () {
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const loginSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://sas-rest-api.herokuapp.com/api/auth/login',{
                email: user.email,
                password: user.password
            });
            if(res.data.isAdmin) {
                console.log("Admin Login Has a Separate Page");
                return;
            }
            setUser({email: '', password: ''});
            localStorage.setItem('tokenStore', res.data.accessToken);
            return navigate('/user/header');
        }catch(err) {
            console.log(err);
        }
    }
    return (
        <div className='login'>
            <img
                className="login__logo"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                alt="amazon"
            />

            <div className='login__container'>
                <h1>Signin</h1>

                <form onSubmit={loginSubmit} method="post">                    
                    <h5>Email</h5>
                    <input type='text' id="email" name="email" value={user.email} onChange={handleChange} />

                    <h5>Password</h5>
                    <input type='password' id="password" name="password" value={user.password} onChange={handleChange} />

                    <button type='submit' className='login__signInButton'>Login</button>
                </form>

                <p>
                    Create a Account
                </p>

                <Link to="/user/register"><button type="submit" className='login__registerButton'>Register</button></Link>
            </div>
        </div>
    )
}
