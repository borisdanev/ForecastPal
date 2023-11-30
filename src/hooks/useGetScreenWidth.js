import { useEffect, useState } from "react";
const useGetScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handler = window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);
  return screenWidth;
};
export default useGetScreenWidth;
