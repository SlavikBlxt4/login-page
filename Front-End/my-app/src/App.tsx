import React, { useEffect, useState } from 'react'; //si ts da el coñazo, reiniciar servidor con ctrl + shift + p
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './css/App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Main from './pages/Main';

function App() {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (!token && currentPath !== '/login' && currentPath !== '/register') {
      window.location.href = '/login'; // Usa navigate en lugar de window.location.href

    }
  }, [token]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Hay un token almacenado
      // Puedes realizar acciones basadas en la presencia del token
      console.log('Token almacenado:', storedToken);
    } else {
      // No hay token almacenado
      console.log('No hay token almacenado');
    }
  }, []);

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <Main /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage setToken={setToken} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
