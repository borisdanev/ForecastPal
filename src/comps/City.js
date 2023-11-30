import Loader from "react-loaders";
const City = ({ city, loading }) => {
  return (
    <>
      {loading ? (
        <Loader
          type="ball-grid-pulse"
          active
          style={{ transform: "scale(0.5)" }}
          className="d-flex justify-content-center"
        />
      ) : (
        <div>
          <h1 className="display-4 fw-5">{city}</h1>
        </div>
      )}
    </>
  );
};
export default City;
