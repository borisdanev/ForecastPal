import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import Container from "react-bootstrap/Container";
import ForeCastSelector from "./ForeCastSelector";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WeatherPill from "./WeatherPill";
import Loader from "react-loaders";
const ForeCast = ({ forecast, coords, isDay }) => {
  const [selected, setSelected] = useState("Hourly");
  const [forecastArr, setForecastArr] = useState([]);
  const { data, loading, fetchData } = useFetchData(
    `https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?lat=${
      coords ? coords.latitude : ""
    }&lon=${coords ? coords.longitude : ""}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f053ecf726msh9a02edc79a31796p18ef39jsnf7d624b40736",
        "X-RapidAPI-Host": "world-time-by-api-ninjas.p.rapidapi.com",
      },
    },
    coords
  );
  useEffect(() => {
    if (coords) fetchData();
  }, [fetchData, coords]);
  useEffect(() => {
    let arr = [];
    if (selected === "Hourly") {
      const hour = data?.hour;
      const hoursToShow = 6;
      arr = forecast?.forecastday[0].hour.slice(hour).slice(0, hoursToShow);
      if (arr?.length < hoursToShow) {
        const addNum = hoursToShow - arr.length;
        const secondArr = forecast?.forecastday[1].hour.slice(0, addNum);
        arr = arr.concat(secondArr);
      }
      arr = arr?.map((item) => ({
        time: item.time.split(" ")[1],
        temp: item.temp_c,
        icon: item.condition.icon,
      }));
    } else
      arr = forecast?.forecastday.map((item) => ({
        time: new Date(item.date).toLocaleDateString("en-US", {
          weekday: "long",
        }),
        temp: item.day.avgtemp_c,
        icon: item.day.condition.icon,
      }));
    setForecastArr(arr);
  }, [selected, forecast, data]);
  return (
    <div className="mt-5 mt-xl-0">
      <Container
        className={`rounded-3 py-3 text-white ${
          isDay ? "primary-color" : "secondary-color"
        }`}
      >
        <ForeCastSelector selected={selected} setSelected={setSelected} />
        <Row className="mt-3 justify-content-center">
          {loading ? (
            <Loader
              type="ball-grid-pulse"
              active
              style={{ transform: "scale(0.5)" }}
              className="d-flex justify-content-center"
            />
          ) : (
            forecastArr?.map((item, i) => (
              <Col
                md={2}
                xs={3}
                key={i}
                className="d-flex justify-content-center"
              >
                <WeatherPill>
                  <p>{item.time}</p>
                  <img src={item.icon} alt="weather-icon" />
                  <p>{Math.round(item.temp)}°C</p>
                </WeatherPill>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};
export default ForeCast;
