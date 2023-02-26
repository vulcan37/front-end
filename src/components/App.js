import "../../src/App.css";
import NavBar from "./NavBar";
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Profile from "./routes/Profile";
import Create from "./routes/Create";
function App() {
  const token = localStorage.getItem('token');

  const location = useLocation();
  return (<div>
    {location.pathname !== "/login" && location.pathname !== '/register' && <NavBar />}
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/login" element={token ? <Navigate to="/" replace /> : <Login />} />
      <Route path="/register" element={token ? <Navigate to="/" replace /> : <Register />} />
      <Route path="/" element={!token ? <Navigate to="/login" replace /> : <Home />} />
      <Route path="/profile" element={!token ? <Navigate to="/login" replace /> : <Profile />} />
      <Route path="/create" element={!token ? <Navigate to="/login" replace /> : <Create />} />
      <Route path="*" element={token ? <Navigate to="/" replace /> : <Navigate to="/login" replace />} />
    </Routes>
  </div>
  )


}
export default App;
