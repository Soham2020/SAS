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
        <>
            <section className="vh-100" style={{ backgroundColor: "#01a3a4" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100" style={{marginTop:"-2.2em"}}>
      <div className="col col-xl-10">
        <div className="card" style={{ borderRadius: "1rem" }}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src={`${require(`../outerlogo.jpg`)}`}
                alt="login form"
                className="img-fluid"
                style={{ borderRadius: "1rem 0 0 1rem" ,height:"100%"}}
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form onSubmit={registerSubmit} method="post">
                  <div className="d-flex align-items-center mb-3 pb-1">
                  <img
                    className="login__logo"
                    src='https://s3.amazonaws.com/thumbnails.venngage.com/template/fc8535df-be09-4c80-8ea5-a69a34b2318e.png' 
                    alt="Smart Logo"/>
                  </div>
                  <h5
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: 1 }}
                  >
                    Create your account
                  </h5>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="username" name="username" value={user.username} onChange={handleChange}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="username">
                      Username
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email" name="email" value={user.email} onChange={handleChange}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="email">
                      Email address
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password" name="password" value={user.password} onChange={handleChange}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      type="submit"
                    style={{background: "#f0c14b"}}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
        )
    }
