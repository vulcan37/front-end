import React, { useState } from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const handleSignUp = () => {
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(errorData => {
            throw new Error(errorData.msg);
          });
        }
        return response.json()
      })

      .then(data => {

        toast.success('Account created!..', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 7000,
        });

        navigate('/login', { replace: true })
      })
      .catch(error => {
        setErr(error.message);

      });
  }

  return (
    <div>
      <div className="card auth-card input-field">
        <h2 className='brand-logo'>Instagram</h2>
        <input
          type="text"
          placeholder='name' onChange={(e) => {
            setName(e.target.value);
          }} value={name} />
        <input
          type="email"
          placeholder='email'
          onChange={(e) => {
            setEmail(e.target.value);
          }} value={email}
        />
        <input
          type="password"
          placeholder='password' onChange={(e) => {
            setPassword(e.target.value)
          }} value={password} />
        {err && <p style={{ color: 'red' }}>{err}</p>}
        <Button onClick={handleSignUp} variant="contained" >signup</Button><br />
      </div>

      <div className="card auth-card">
        <p>
          Alreay have an Account
          <Link to='/login'> login</Link>
        </p>

      </div>
    </div>
  )
}

export default Register