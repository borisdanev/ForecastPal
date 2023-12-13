import { useEffect, useState } from "react";
const useGetCoords = () => {
  const [coords, setCoords] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({
          latitude,
          longitude,
        });
      },
      () => {
        alert("Location set to default");
        setCoords({ latitude: 41.9961816, longitude: 21.4319213 });
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);
  return coords;
};
export default useGetCoords;
