// AdminDashboard.jsx

import React from 'react';
import AdminPanel from '../components/AdminPanel';
import './AdminDashboard.css';

const AdminDashboard = ({ userDataToValidate }) => {
  return (
    <div>
      <h1 className="admincontainer">Panel de Administración</h1>
      {userDataToValidate && userDataToValidate.length > 0 ? ( // Verifica si userDataToValidate existe y tiene longitud
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {userDataToValidate.map((userData) => (
              <tr key={userData.id}>
                <td>{userData.name}</td>
                <td>{userData.email}</td>
                <td>
                  <button>Aceptar</button>
                  <button>Rechazar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay registros para validar.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
