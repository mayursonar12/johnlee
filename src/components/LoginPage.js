import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isForgetPassword, setIsForgetPassword] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrors((prevState) => ({ ...prevState, email: '' }));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrors((prevState) => ({ ...prevState, password: '' }));
  };

  const validateLoginForm = () => {
    const errors = {};

    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format.';
    }

    if (!password) {
      errors.password = 'Password is required.';
    }

    return errors;
  };

  const validateResetPasswordForm = (otp) => {
    const errors = {};

    if (!otp) {
      errors.otp = 'OTP is required.';
    } else if (otp !== '123456') {
      errors.otp = 'Invalid OTP.';
    }

    return errors;
  };

  // We will handle the Login here after click on submit button
  
  const handleLogin = (event) => {
    event.preventDefault();

    if (isForgetPassword) {
      // Simulating password reset flow
      // Replace this with your own implementation using API calls or authentication libraries
      const errors = validateResetPasswordForm(password);

      if (Object.keys(errors).length > 0) {
        setErrors(errors);
      } else {
        // Successful password reset
        navigate('/dashboard');
      }
    } else {
      // Simulating authentication and role-based authorization
      // Replace this with your own implementation using API calls or authentication libraries
      if (email === 'admin@example.com' && password === 'admin123') {
        // Successful authentication and authorization
        localStorage.setItem('isAuthenticated', true);
        navigate('/dashboard');
      } else {
        setErrors({ auth: 'Invalid email or password.' });
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        {!isForgetPassword && (
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
        )}
        {isForgetPassword && (
          <div>
            <label>Enter OTP:</label>
            <input type="text" value={password} onChange={handlePasswordChange} required />
            {errors.otp && <span>{errors.otp}</span>}
          </div>
        )}
        {errors.auth && <span>{errors.auth}</span>}
        {!isForgetPassword && (
          <div>
            <button type="submit">Login</button>
            <p>
              <Link onClick={() => setIsForgetPassword(true)}>Forget Password?</Link>
            </p>
          </div>
        )}
        {isForgetPassword && (
          <div>
            <button type="submit">Reset Password</button>
            <p>
              <Link onClick={() => setIsForgetPassword(false)}>Back to Login</Link>
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
