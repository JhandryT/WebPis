import React from 'react';
import Map from './Map';

const UVIndexMap = ({ isAuthenticated, historicalData }) => {
  return (
    <div>
      <h2>Mapa de ubicacion de instrumentos de medicion</h2>
      {/* Otros elementos relacionados con el índice UV si es necesario */}
      <Map />
    </div>
  );
};

export default UVIndexMap;

