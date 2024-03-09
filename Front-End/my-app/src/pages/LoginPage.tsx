import React from 'react';
import '../css/App.css';


//backend request scripts

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); // Prevents the default form submission behavior

  const formData = new FormData(event.currentTarget);
  const userData = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

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
    } else {
      console.log('User not registered');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};



const LoginPage: React.FC<LoginPageProps> = ({ setPage }) => {
    return (
      <div>
        <div className='login-box'>
          <div className='login-title'>
            <h1>Login</h1>
            <p>Enter your email and password</p>
          </div>
          <form className='login-form' action='/usuarios' method='POST' onSubmit={handleSubmit}>
            <input type="email" name="email" required autoComplete='email' placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" placeholder="Login" />
          </form>

        </div>
      </div>
    );
  }




// LoginPage component type or interface
type LoginPageProps = {
  setPage: (page: string) => void;
}

export default LoginPage;