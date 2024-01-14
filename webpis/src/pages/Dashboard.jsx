import React from 'react';
import HistoricalData from '../components/HistoricalData';
import './Dashboard.css'; // Agrega un archivo de estilo para el Dashboard

const Dashboard = ({ isAuthenticated, historicalData }) => {
  return (
    <div className="dashboard-container">
      <h1>Tablero del Usuario</h1>
      <HistoricalData historicalData={historicalData} />
    </div>
  );
};

export default Dashboard;
