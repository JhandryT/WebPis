import React from 'react';


const RadiationInfo = ({ radiationLevel }) => {
   
  const getBarColor = () => {
    if (radiationLevel <= 2) {
      return 'green'; // Bajo
    } else if (radiationLevel <= 5) {
      return 'yellow'; // Moderado
    } else if (radiationLevel <= 7) {
      return 'orange'; // Alto
    } else {
      return 'red'; // Muy alto
    }
  };

  return (
    <div className="radiation-info-container">
      <h2>Radiación UV</h2>
      <div className="radiation-bar" style={{ backgroundColor: getBarColor(), width: `${radiationLevel * 9}%` }}></div>
      <p>Nivel de Radiación: {radiationLevel}</p>
    </div>
  );
};

export default RadiationInfo;