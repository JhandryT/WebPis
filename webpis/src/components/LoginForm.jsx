import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica para realizar la autenticación
    // Puedes llamar a la función onLogin con los datos del usuario
    onLogin({ username, password });
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <label>Nombre de Usuario:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleLogin}>Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;

