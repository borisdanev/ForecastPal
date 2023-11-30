import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import Container from "react-bootstrap/Container";
import { Marker } from "react-leaflet/Marker";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
const UpdateMap = ({ coords }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([coords.latitude, coords.longitude]);
  }, [coords]);
  return null;
};
const Map = ({ coords }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (
      coords &&
      coords.latitude !== undefined &&
      coords.longitude !== undefined
    ) {
      setLoading(false);
    }
  }, [coords]);
  if (loading) return <div>Loading...</div>;
  return (
    <Container className="mt-3 mb-3 p-0 rounded-3 overflow-hidden">
      <MapContainer
        center={[coords?.latitude, coords?.longitude]}
        zoom={13}
        style={{ height: "300px", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[coords?.latitude, coords?.longitude]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        ></Marker>
        <UpdateMap coords={coords} />
      </MapContainer>
    </Container>
  );
};
export default Map;
