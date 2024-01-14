import React from 'react';

const UVAdvice = ({ uvIndex }) => {
  const getAdvice = (uvIndex) => {
    if (uvIndex < 3) {
      return "El riesgo de daño por exposición al sol es bajo. Disfrute del aire libre sin preocupaciones.";
    } else if (uvIndex < 6) {
      return "El riesgo de daño por exposición al sol es moderado. Use protector solar y busque sombra.";
    } else if (uvIndex < 8) {
      return "El riesgo de daño por exposición al sol es alto. Tome precauciones, como usar ropa protectora y gafas de sol.";
    } else if (uvIndex < 11) {
      return "El riesgo de daño por exposición al sol es muy alto. Limite la exposición al sol entre las 10 a.m. y las 4 p.m.";
    } else {
      return "El riesgo de daño por exposición al sol es extremadamente alto. Permanezca en interiores y evite el sol directo.";
    }
  };

  const advice = getAdvice(uvIndex);

  const getAdviceBackgroundColor = (uvIndex) => {
    // Lógica para determinar el color de fondo de los consejos según el índice UV
    // Puedes ajustar esta lógica según tus necesidades específicas
    if (uvIndex < 3) {
      return 'green';
    } else if (uvIndex < 6) {
      return 'yellow';
    } else if (uvIndex < 8) {
      return 'orange';
    } else if (uvIndex < 11) {
      return 'red';
    } else {
      return 'purple';
    }
  };

  const adviceBackgroundColor = getAdviceBackgroundColor(uvIndex);

  return (
    <div className="uv-advice-container2" style={{ backgroundColor: adviceBackgroundColor, borderRadius: '0.25rem', margin: '6%'}}>
      <h2>Consejo del día</h2>
      <p>{advice}</p>
    </div>
  );
  
};

export default UVAdvice;


