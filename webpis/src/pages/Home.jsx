import React, { useState } from 'react';
import UVIndexMap from '../components/UVIndexMap';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import UVAdvice from '../components/UVAdvice';
import RadiationInfo from '../components/RadiationInfo';

const Home = ({ isAuthenticated, historicalData, onLogin, onRegister, uvIndex }) => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="home-container">
      <div className="auth-container">
        <h2>{showLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>

        {showLogin ? (
          <LoginForm onLogin={onLogin} />
        ) : (
          <RegistrationForm onRegister={onRegister} />
        )}

        <p>
          {showLogin
            ? "¿No tienes una cuenta? Regístrate ahora."
            : "¿Ya tienes una cuenta? Inicia sesión."}
          <button onClick={toggleForm}>
            {showLogin ? 'Registrarse' : 'Iniciar Sesión'}
          </button>
        </p>
      </div>
      <div className="uv-map-container">
        <h1>Página de Inicio</h1>
        <UVIndexMap isAuthenticated={isAuthenticated} historicalData={historicalData} />
      </div>
      {/* Sección dedicada a los consejos de radiación UV y la información de radiación */}
      <div className="advice-container">
        <div className="uv-advice-container">
          <UVAdvice uvIndex={uvIndex} />
        </div>
        <div className="radiation-container">
          <RadiationInfo radiationLevel={uvIndex} />
        </div>
      </div>
    </div>
  );
};

export default Home;




