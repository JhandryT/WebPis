// api.js

const API_BASE_URL = 'https://tu-api.com';  // Reemplaza con la URL de tu API

const api = {
  fetchUVIndex: () => {
    // Lógica para obtener el índice UV en tiempo real desde la API
    return fetch(`${API_BASE_URL}/uvindex`)
      .then(response => response.json())
      .catch(error => console.error('Error fetching UV index:', error));
  },

  fetchHistoricalData: (userId) => {
    // Lógica para obtener datos históricos desde la API para un usuario específico
    return fetch(`${API_BASE_URL}/historical/${userId}`)
      .then(response => response.json())
      .catch(error => console.error('Error fetching historical data:', error));
  },

  // Agrega otras funciones según las necesidades de tu aplicación
};

export default api;
