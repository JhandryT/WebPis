import React, { useState } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [uvIndex, setUvIndex] = useState(2);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
  };

  const handleRegister = (userData) => {
    setIsAuthenticated(true);
  };

  const handleTestButtonClick = () => {
    // Simula cambios en el índice UV para probar
    const randomIndex = Math.floor(Math.random() * 11); // Genera un índice UV aleatorio entre 0 y 10
    setUvIndex(randomIndex);
  };

  let content = null;

  switch (currentPage) {
    case 'home':
      content = (
        <Home
          isAuthenticated={isAuthenticated}
          onLogin={handleLogin}
          onRegister={handleRegister}
          historicalData={'/* datos históricos aquí */'}
          uvIndex={uvIndex} // Pasa el valor de uvIndex al componente Home
        />
      );
      break;
    case 'dashboard':
      content = <Dashboard />;
      break;
    case 'admin':
      content = <AdminDashboard />;
      break;
    default:
      content = (
        <Home
          isAuthenticated={isAuthenticated}
          onLogin={handleLogin}
          onRegister={handleRegister}
          historicalData={'/* datos históricos aquí */'}
          uvIndex={uvIndex} // Pasa el valor de uvIndex al componente Home
        />
      );
  }

  return (
    <div>
      <nav>
        <button onClick={() => navigateTo('home')}>Inicio</button>
        <button onClick={() => navigateTo('dashboard')}>Registros</button>
        <button onClick={() => navigateTo('admin')}>Administrador</button>
      </nav>
      <div>
        {content}
        <button onClick={handleTestButtonClick}>Probar Cambio de Índice UV</button>
      </div>
    </div>
  );
}

export default App;
