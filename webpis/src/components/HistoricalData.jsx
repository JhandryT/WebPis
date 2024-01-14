/*import React from 'react';

const HistoricalData = ({ historicalData }) => {
  const renderTableHeader = () => {
    if (!historicalData || historicalData.length === 0) {
      return null;
    }

    const headers = Object.keys(historicalData[0]);

    return (
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    );
  };

  const renderTableData = () => {
    if (!historicalData || historicalData.length === 0) {
      return (
        <tr>
          <td colSpan="4">No hay datos históricos disponibles.</td>
        </tr>
      );
    }

    return historicalData.map((data, index) => (
      <tr key={index}>
        {Object.values(data).map((value, index) => (
          <td key={index}>{value}</td>
        ))}
      </tr>
    ));
  };

  return (
    <div>
      <h2>Registros Históricos</h2>
      <table>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
};

export default HistoricalData;
*/
import React from 'react';
import './HistoricalData.css'; // Agrega un archivo de estilo para la tabla

const HistoricalData = () => {
  const historicalData = [
    { fecha: '2022-01-01', uvIndex: 3, consejo: 'Usar protector solar' },
    { fecha: '2022-01-02', uvIndex: 5, consejo: 'Buscar sombra' },
    { fecha: '2022-01-03', uvIndex: 7, consejo: 'Usar ropa protectora' },
  ];

  const renderTableHeader = () => {
    if (!historicalData || historicalData.length === 0) {
      return null;
    }

    const headers = Object.keys(historicalData[0]);

    return (
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    );
  };

  const renderTableData = () => {
    if (!historicalData || historicalData.length === 0) {
      return (
        <tr>
          <td colSpan="3">No hay datos históricos disponibles.</td>
        </tr>
      );
    }

    return historicalData.map((data, index) => (
      <tr key={index}>
        {Object.values(data).map((value, index) => (
          <td key={index}>{value}</td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="historical-data">
      <h2>Registros Históricos</h2>
      <table>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
};

export default HistoricalData;
