# Project: Login and Registration Page with JWT

This repository contains a project for a user login and registration page, which connects to a PostgreSQL database to store user information. Additionally, it uses JWT (JSON Web Tokens) to authenticate users and allow them access to protected routes without needing to log in again.

## Technologies Used

- **Frontend**: React (with TypeScript), SCSS, React DOM
- **Backend**: TypeScript, Node.js with Express
- **Database**: PostgreSQL
- **Libraries**: dotenv, bcrypt for password encryption, jwt for managing session tokens

## Key Features

- **User Login**: Users can log in using their credentials (username and password).
- **User Registration**: New users can create an account by providing required information and then log in.
- **Password Encryption**: User passwords are encrypted before being stored in the database using bcrypt, ensuring data security.
- **JWT Authentication**: Once a user successfully logs in, a JWT token is generated, which is used to authorize access to protected routes without needing to authenticate again.
- **Route Protection**: Middleware is implemented to protect certain routes and ensure that only authenticated users can access them.

## Installation and Usage

1. **Clone the Repository**: `git clone https://github.com/SlavikBlxt4/login-page.git`
2. **Install Dependencies**:
   - **Frontend**: `cd Front-End && npm install`
   - **Backend**: `cd Back-End && npm install`
3. **Set Environment Variables**:
   - Create a `.env` file in the `backend` folder and provide necessary variables such as database connection and JWT configuration.
4. **Start the Application**:
   - **Frontend**: `cd Front-End/my-app && npm start`
   - **Backend**: `cd Back-End && npm run dev`

## Process
This project has been an opportunity to develop my skills in backend development. I have learned how to make database connections, insert and read data from it, and finally I have learned how to encrypt the data and even use JWT to store the users token. The hardest part, for me, has been learning how to use JWT so that my frontend part is able to collect the tokens from the server

## Conclusions and Learnings
During the development of this project, I have learned the importance of security and encryption that comes with a user login that contains sensitive data, which needs to be protected. In addition, I have also learned to use SASS, a CSS compiler that allows me to exploit my creativity more in frontend development, although it is not the main technology of the project. Finally, I have learned to create and save logged in user tokens in the browser cache, a feature widely used on any page that requires user registration. I have certainly gained experience in server-side development and learned how to handle sensitive data.

## Additional Notes

- If you encounter any issues or have suggestions for improving the project, feel free to open an issue.

Thank you for your interest in this project! We hope it's helpful and educational. If you have any questions, feel free to reach out.
