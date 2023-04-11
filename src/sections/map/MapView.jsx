import React, { useEffect } from "react";
import datas from "../../assets/data.json";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import LocationIcon from "../../assets/locationIcon.png";
const MapView = ({ height }) => {
  const data = datas.details[0];

  useEffect(() => {
    if (!mapid._leaflet_id) {
      const map = L.map("mapid").setView(
        [data.location.lat, data.location.lng],
        18
      );
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> Local Search',
        maxZoom: 19,
      }).addTo(map);

      // Add a marker at the specified coordinates
      const icon = L.icon({
        iconUrl: LocationIcon,
        iconSize: [32, 32], // size of the icon
        iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
      });
      
      const title = `<div><b>${data.name}</b></div><br><i>${data.catg[0]}</i><br> <small>${data.address}</small>`;
      const marker = L.marker([data.location.lat, data.location.lng], {
        icon: icon,
      })
        .addTo(map)
        .bindPopup(title, { offset: L.point(0, -15) });

      marker.openPopup();
    }
  }, []);
  return <div id="mapid" className={height}></div>;
};

export default MapView;
