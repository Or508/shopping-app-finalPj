import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async e => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, formData);
      const { token, user } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      alert('התחברת בהצלחה!');
    } catch (err) {
      setError(err.response?.data?.message || 'שגיאה בהתחברות');
    }
  };

  return (
    <div>
      <h2>התחברות</h2>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="אימייל" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="סיסמה" value={formData.password} onChange={handleChange} required />
        <button type="submit">התחבר</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
