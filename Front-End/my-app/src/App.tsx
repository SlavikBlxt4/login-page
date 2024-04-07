import React, { useEffect, useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, NavLink } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './css/App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Main from './pages/Main';

function App() {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  


  
  return (
    <Router>
      <Routes>
        <Route path="/" element={token === null ? <Navigate to="/login" /> : <Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
