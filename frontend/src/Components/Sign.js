import React, { useState } from "react";
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { username, email, password, confirmPassword };
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('http://localhost:5000/api/signup', {
          username,
          email,
          password
        });
        console.log('Signup successful:', response.data);
        setSuccessMessage('Signup successful!');
        setErrors({});
      } catch (error) {
        console.error('Signup failed:', error.response?.data?.message);
        setErrors({ server: error.response?.data?.message || 'Signup failed' });
      }
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    if (formData.username.trim() === '') {
      errors.username = 'Username is required';
    }
    if (formData.email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (formData.password.trim() === '') {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    if (formData.confirmPassword.trim() === '') {
      errors.confirmPassword = 'Confirm password is required';
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  return (
    <div className="Signup">
      <div className="form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
          <br/>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          <br/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
          <br/>

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
          <br/>

          {errors.server && <div style={{ color: 'red' }}>{errors.server}</div>}
          {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}

          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    </div>
  );
}

export default Signup;
