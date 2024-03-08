import React from 'react';
import '../css/App.css';

const LoginPage: React.FC<LoginPageProps> = ({ setPage }) => {
    return (
      <div>
        <div className='login-box'>
          <div className='login-title'><h1>Login</h1></div>
        </div>
      </div>
    );
  }


// LoginPage component type or interface
type LoginPageProps = {
  setPage: (page: string) => void;
}

export default LoginPage;