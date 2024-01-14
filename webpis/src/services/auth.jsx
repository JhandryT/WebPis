// auth.js

const API_BASE_URL = 'https://tu-api.com';  // Reemplaza con la URL de tu API

const auth = {
  login: (credentials) => {
    // Lógica para realizar la autenticación (inicio de sesión) con la API
    return fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(response => response.json())
      .catch(error => console.error('Error during login:', error));
  },

  register: (userData) => {
    // Lógica para registrar un nuevo usuario en la API
    return fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .catch(error => console.error('Error during registration:', error));
  },

  // Agrega otras funciones según las necesidades de tu aplicación
};

export default auth;
