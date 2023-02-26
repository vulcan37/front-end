import { Button } from '@mui/material'
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password)

    try {
      const response = await fetch('http://192.168.55.104:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      console.log("hi", data)

      if (response.ok) {
        localStorage.setItem('token', `Bearer ${data.token}`);
        toast.success('Logged in successfully');
        setTimeout(() => {
          navigate('/', { replace: true })
        }, 1000);
      } else {
        toast.error(data.msg);
      }

    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again later.');
    }
  };
  return (
    <div>
      <div className="card auth-card input-field">
        <h2 className='brand-logo'>Instagram</h2>
        <input
          type="email"
          placeholder='email'
          ref={emailRef}
        />
        <input
          type="password"
          placeholder='password'
          ref={passwordRef} />
        <Button onClick={handleLogin} variant="contained" >login</Button>

      </div>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="card auth-card">
        <p>
          Don't have an account
          <Link to='/register'> click here</Link>
        </p>
      </div>
    </div>
  )
}

export default Login