import { useCallback, useState } from "react";
const useFetchData = (url, options, coords) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = useCallback(async () => {
    setError(null);
    try {
      const response = options ? await fetch(url, options) : await fetch(url);
      const result = await response.json();
      if (Object.keys(result).length === 0) throw new Error("City not found");
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [coords, options, url]);
  return { data, loading, error, fetchData };
};
export default useFetchData;
