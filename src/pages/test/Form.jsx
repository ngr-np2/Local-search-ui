import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const [location, setLocation] = useState(null);
  const [center, setCenter] = useState({
    lat: 37.7749,
    lng: -122.4194,
  });
  const [zoom, setZoom] = useState(11);

  const handleMapChange = ({ center, zoom }) => {
    setCenter(center);
    setZoom(zoom);
  };

  const handleMapClick = ({ lat, lng }) => {
    setLocation({ lat, lng });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(location);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCfzI3D7U3lhMiGvspIQpD_G5Qu6J35JTo" }}
          defaultCenter={center}
          defaultZoom={zoom}
          onChange={handleMapChange}
          onClick={handleMapClick}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Map;
