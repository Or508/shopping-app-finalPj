import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - הדף לא נמצא</h1>
      <p style={styles.text}>אופס! הדף שחיפשת לא קיים.</p>
      <Link to="/" style={styles.link}>חזור לדף הבית</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '100px 20px',
    fontFamily: 'sans-serif',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.5rem',
    marginBottom: '30px',
  },
  link: {
    fontSize: '1.2rem',
    textDecoration: 'none',
    color: '#007bff',
  }
};

export default NotFound;
