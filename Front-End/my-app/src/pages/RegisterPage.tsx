import React, { useState } from 'react';
import '../css/App.css';
import { useNavigate } from 'react-router-dom';



const RegisterPage: React.FC<RegisterPageProps> = ({ setPage }) => {
  const navigate = useNavigate();
  //backend request scripts

// fetch para el registro de usuarios

// fetch para el registro de usuarios

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission behavior
  
    const formData = new FormData(event.currentTarget);
    const userData = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    setRegisterError(false);
  
    try {
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        console.log('User registered successfully');
        navigate('/');
      } else {
        console.log('User not registered');
        setRegisterError(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };



  

  const [registerError, setRegisterError] = useState(false);

    return (
      <div>
        <div className={`login-box ${registerError ? 'error' : ''}`}>
          <div className='login-title'>
            <h1>Create your account!</h1>
            <p>Enter your email and password to begin</p>
          </div>
          <form className='login-form' action='/usuarios' method='POST' onSubmit={handleSubmit}>
            <input type="email" name="email" required autoComplete='email' placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            {registerError && <p style={{ color: 'red' }}>This account already exists</p>}
            <input type="submit" placeholder="Login" />
          </form>
          <div className='login-footer'>
            <p>Already have an account? <a href="/login" onClick={() => setPage('/login')}>Log in</a></p>
          </div>

        </div>
      </div>
    );
  }




// RegisterPage component type or interface
type RegisterPageProps = {
  setPage: (page: string) => void;
}

export default RegisterPage;

