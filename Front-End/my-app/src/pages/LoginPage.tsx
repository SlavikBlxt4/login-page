import React from 'react';
import '../css/App.css';

const LoginPage: React.FC<LoginPageProps> = ({ setPage }) => {
    return (
      <div>
        <div className='login-box'>
          <div className='login-title'>
            <h1>Login</h1>
            <p>Enter your email and password</p>
          </div>

          <div className='login-input'><input type="email" placeholder="Email" /></div>
          <div className='login-input'><input type="password" placeholder="Password" /></div>
          <button className='login-button' onClick={() => setPage('/')}>Login</button>

        </div>
      </div>
    );
  }


// LoginPage component type or interface
type LoginPageProps = {
  setPage: (page: string) => void;
}

export default LoginPage;