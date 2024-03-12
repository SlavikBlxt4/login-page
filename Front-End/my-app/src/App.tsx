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
    // El usuario ha iniciado sesión y no está en la página de inicio de sesión
    // Permitir acceso a '/'
  } else if (!token && currentPath !== '/login') {
    // El usuario no ha iniciado sesión y no está en la página de inicio de sesión
    // Redirigir a '/login'
    window.location.href = '/login';
  } else if (token && currentPath === '/login') {
    // El usuario ha iniciado sesión y está en la página de inicio de sesión
    // Redirigir a '/'
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
