import React, { useState } from 'react';

const RegistrationForm = ({ onRegister }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Lógica para enviar datos de registro al servidor
    // Puedes llamar a la función onRegister con los datos del usuario
    onRegister({ firstName, lastName, username, email, password });
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form>
        <label>Nombre:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label>Apellido:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label>Nombre de Usuario:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Correo Electrónico:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleRegister}>Registrarse</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
