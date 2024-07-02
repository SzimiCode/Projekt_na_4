import React, { useState } from 'react';

function Form({ route }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Token:', data.token);
      // Możesz przechować token w localStorage lub w stanie aplikacji
    } else {
      console.error('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-outline mb-4">
        <input
          type="email"
          id="form2Example11"
          className="form-control"
          placeholder="Phone number or email address"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="form-label" htmlFor="form2Example11">Username</label>
      </div>
      <div className="form-outline mb-4">
        <input
          type="password"
          id="form2Example22"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="form-label" htmlFor="form2Example22">Password</label>
      </div>
      <div className="text-center pt-1 mb-5 pb-1">
        <button
          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
          type="submit"
        >
          Log in
        </button>
      </div>
    </form>
  );
}

export default Form;
