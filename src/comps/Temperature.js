import Loader from "react-loaders";
const Temperature = ({ temp, loading }) => {
  return (
    <>
      {loading ? (
        <Loader
          type="ball-grid-pulse"
          active
          className="d-flex justify-content-center"
          style={{
            transform: "scale(0.5)",
          }}
        />
      ) : (
        <div>
          <h1 className="display-2 fw-5">{Math.round(temp)}°C</h1>
        </div>
      )}
    </>
  );
};
export default Temperature;
