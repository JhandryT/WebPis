import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import icon1 from './icon1.png';

// ... Agrega importaciones para otros iconos según sea necesario

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const { current: mapContainer } = mapContainerRef;

    if (mapContainer && !mapContainer._leaflet_id) {
      const latitude = -4.03575;
      const longitude = -79.20166;

      const map = L.map(mapContainer).setView([latitude, longitude], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Coordenadas de los marcadores
      const markersData = [
        { lat: -4.03575, lon: -79.20166, icon: icon1 },
        // Agrega más coordenadas y archivos de iconos según sea necesario
      ];

      markersData.forEach(({ lat, lon, icon }) => {
        const customIcon = L.icon({
          iconUrl: icon,
          iconSize: [40, 40], // Tamaño del icono en píxeles
          iconAnchor: [16, 32], // Punto de anclaje del icono
          popupAnchor: [0, -32] // Punto donde aparecerá el popup en relación con el icono
        });

        L.marker([lat, lon], { icon: customIcon }).addTo(map);
      });
    }
  }, []);

  return <div ref={mapContainerRef} style={{ height: '500px', width: '550px' }} />;
};

export default Map;

