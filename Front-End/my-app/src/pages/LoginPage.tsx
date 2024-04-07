import React, { useState } from 'react';
import '../css/App.css';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC<LoginPageProps> = ({ setToken }) => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  // Función para enviar el formulario de inicio de sesión
  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevenir el comportamiento de envío de formulario predeterminado

    const formData = new FormData(event.currentTarget);
    const userData = {
      email: formData.get('email'),
      password: formData.get('password'),
    }

    try {
      const response = await fetch('http://localhost:3000/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      setLoginError(false);

      if (response.ok) {
        console.log('User logged in successfully');
        localStorage.setItem('token', data.token);
        console.log(data.token);
        setToken(data.token);
        navigate('/');
      } else {
        setLoginError(true);
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <div className={`login-box ${loginError ? 'error' : ''}`}>
        <div className='login-title'>
          <h1>Login</h1>
          <p>Enter your email and password</p>
        </div>
        <form className='login-form' action='/usuarios/login' method='POST' onSubmit={handleLoginSubmit}>
          <input type="email" name="email" required autoComplete='email' placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          {loginError && <p style={{ color: 'red' }}>Email or password are incorrect</p>}
          <input type="submit" placeholder="Login" />
        </form>
        <div className='login-footer'>
          <p>Don't have an account? <a href="/register" onClick={(e) => { e.preventDefault(); navigate("/register"); }}>Register</a></p>
        </div>
      </div>
    </div>
  );
}

// Interfaz para las propiedades del componente LoginPage
interface LoginPageProps {
  setToken: (token: string) => void;
}

export default LoginPage;
