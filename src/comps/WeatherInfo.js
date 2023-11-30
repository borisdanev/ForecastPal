import City from "./City";
import Temperature from "./Temperature";
import Date from "./Date";
import Container from "react-bootstrap/Container";
const WeatherInfo = ({ data, loading }) => {
  return (
    <Container className="text-white text-center">
      <City city={data?.location.name} loading={loading} />
      <Temperature temp={data?.current.temp_c} loading={loading} />
      <Date />
    </Container>
  );
};
export default WeatherInfo;
