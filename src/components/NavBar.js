import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import SendIcon from '@mui/icons-material/Send';
import LogoutIcon from '@mui/icons-material/Logout';
import { toast } from 'react-toastify';

function NavBar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token');
    toast.success('logged Out Successfully...', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 4000,
    });
    navigate('/login', { replace: true })

  }
  return (<nav className='fix-top'>
    <div className="nav-wrapper white" >
      <a href="/" className="brand-logo " style={{ color: 'black' }} >Instagram</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/profile" className="Link-style" style={{ color: 'black', position: "relative", right: "50px" }}><AccountBoxRoundedIcon /></Link></li>
        <li><Link to="/create" className="Link-style" style={{ color: 'black', position: "relative", right: "50px" }}>{<SendIcon />}</Link></li>
        <li><Link onClick={handleLogout} style={{ color: 'black', position: "relative", right: "50px" }}>{<LogoutIcon />}</Link></li>

      </ul>
    </div>
  </nav >

  )
}

export default NavBar