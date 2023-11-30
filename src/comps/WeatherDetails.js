import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { WiHumidity } from "react-icons/wi";
import { BsWind } from "react-icons/bs";
import { BsSunrise } from "react-icons/bs";
import { BsSunset } from "react-icons/bs";
const WeatherDetails = ({
  humidity,
  wind,
  sunrise,
  sunset,
  loading,
  isDay,
}) => {
  const values = [
    {
      icon: <WiHumidity className="h2" />,
      content: `${humidity}%`,
    },
    {
      icon: <BsWind className="h2" />,
      content: `${wind} km/h`,
    },
    {
      icon: <BsSunrise className="h2" />,
      content: sunrise,
    },
    {
      icon: <BsSunset className="h2" />,
      content: sunset,
    },
  ];
  return (
    <Container
      className={`rounded-3 mt-5 p-3 text-white ${
        isDay ? "primary-color" : "secondary-color"
      }`}
    >
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row>
          {values.map((item, i) => (
            <Col key={i} className="d-flex align-items-center flex-column">
              {item.icon}
              <p>{item.content}</p>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};
export default WeatherDetails;
