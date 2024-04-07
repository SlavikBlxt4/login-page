import React, { useState } from 'react';
import '../css/App.css';
import { Navigate, useNavigate } from 'react-router-dom';



const LoginPage: React.FC<LoginPageProps> = ({ setToken }) => {
  const navigate = useNavigate();
  //backend request scripts





// fetch para el login de usuarios
const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); // Prevents the default form submission behavior

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
      
      navigate('/');
    } else {
      setLoginError(true);
      console.log('Login failed');
      
    }
  } catch (error) {
    console.error('Error:', error);
  }
}


const [loginError, setLoginError] = useState(false);





    return (
      <div>
        <div className={`login-box ${loginError ? 'error' : ' '}`}>
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
            <p>Don't have an account? <a href="/register" onClick={() => <Navigate to="/register" />}>Register</a></p>
          </div>

        </div>
      </div>
    );
  }




// LoginPage component type or interface
type LoginPageProps = {
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export default LoginPage;

