import React from 'react';

function Login({ setIsLogin }) {
  return (
    <div style={styles.appContainer}>
      <div style={styles.formContainer}>
        <h1>Login</h1>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" placeholder="Enter your email" required style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input type="password" placeholder="Enter your password" required style={styles.input} />
          </div>
          <button type="submit" style={styles.button}>Login</button>
          <p style={styles.toggleText}>
            Don't have an account?{' '}
            <span style={styles.toggleLink} onClick={() => setIsLogin(false)}>
              Register here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1d2b64', // Light Navy Blue
  },
  formContainer: {
    background: '#2c3e50', // Darker shade for form container
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '400px',
    color: '#fff',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '1.2rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    marginBottom: '0.8rem',
    color: '#333',
  },
  button: {
    width: '100%',
    padding: '0.8rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#3498db', // Blue button
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  toggleText: {
    marginTop: '1rem',
  },
  toggleLink: {
    color: '#3498db', // Blue color for link
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default Login;
