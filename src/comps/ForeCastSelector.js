import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ForeCastSelector = ({ selected, setSelected }) => {
  const handleClick = (e) => {
    setSelected(e.target.innerText);
  };
  return (
    <Row className=" position-relative" style={{ borderColor: "black" }}>
      <Col className={`d-flex justify-content-center `}>
        <Button
          className="bg-transparent border-0 text-dark"
          onClick={handleClick}
        >
          <h5 className="h5 text-white">Hourly</h5>
        </Button>
      </Col>
      <Col className={`d-flex justify-content-center`}>
        <Button
          className="bg-transparent border-0 text-dark"
          onClick={handleClick}
        >
          <p className="h5 text-white">Next 3 days</p>
        </Button>
      </Col>
      <div
        className="bg-white position-absolute"
        style={{
          height: "0.1rem",
          width: "50%",
          bottom: "0",
          transform:
            selected === "Hourly" ? "translateX(0)" : "translateX(100%)",
          transition: "all 0.4s ease",
        }}
      ></div>
    </Row>
  );
};
export default ForeCastSelector;
