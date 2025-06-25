import React, { useState } from 'react';
import axios from 'axios';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, formData);
      setSuccess('נרשמת בהצלחה! תוכל להתחבר כעת');
    } catch (err) {
      setError(err.response?.data?.message || 'שגיאה בהרשמה');
    }
  };

  return (
    <div>
      <h2>הרשמה</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="שם משתמש" value={formData.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="אימייל" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="סיסמה" value={formData.password} onChange={handleChange} required />
        <button type="submit">הרשמה</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default SignupPage;
