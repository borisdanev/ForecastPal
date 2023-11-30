const WeatherPill = ({ children }) => {
  return (
    <div className="d-flex flex-column align-items-center shadow-lg rounded-pill py-4 px-2">
      {children}
    </div>
  );
};
export default WeatherPill;
