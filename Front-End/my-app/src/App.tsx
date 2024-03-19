import React, { useState } from 'react'; //si ts da el coñazo, reiniciar servidor con ctrl + shift + p
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './css/App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Main from './pages/Main';

function App() {
  const [page, setPage] = useState('/');
  const token = localStorage.getItem('token');
  const currentPath = window.location.pathname;

  if (token && currentPath !== '/login') {
    // User is logged in and not on the login page
    // Allow access to any page
} else if (!token && currentPath !== '/login' && currentPath !== '/register') {
    // User is not logged in and not on the login or register page
    // Redirect to '/login'
    window.location.href = '/login';
} else if (token && (currentPath === '/login' || currentPath === '/register')) {
    // User is logged in and on the login or register page
    // Redirect to '/'
    window.location.href = '/';
}
  
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Main setPage={setPage} />} />
          <Route path="/login" element={<LoginPage setPage={setPage} />} />
          <Route path="/register" element={<RegisterPage setPage={setPage} />} />
        </Routes>
      </Router>
  );
}

export default App;
