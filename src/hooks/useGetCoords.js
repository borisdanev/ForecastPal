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
      () =>
        alert(
          " Location access denied. The application will not work without location access."
        ),
      { enableHighAccuracy: true }
    );
  }, []);
  console.log(coords);
  return coords;
};
export default useGetCoords;
