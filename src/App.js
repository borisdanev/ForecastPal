import { useEffect, useState } from "react";
import useGetCoords from "./hooks/useGetCoords";
import useFetchData from "./hooks/useFetchData";
import useGetScreenWidth from "./hooks/useGetScreenWidth";
import WeatherInfo from "./comps/WeatherInfo";
import WeatherDetails from "./comps/WeatherDetails";
import BackgroundImg from "./comps/BacgroundImg";
import ForeCast from "./comps/ForeCast";
import Map from "./comps/Map";
import SearchBar from "./comps/SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const App = () => {
  const coordsData = useGetCoords();
  const [coords, setCoords] = useState(coordsData);
  const { data, loading, fetchData } = useFetchData(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${
      coords ? coords.latitude : ""
    }%2C${coords ? coords.longitude : ""}&days=3`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f053ecf726msh9a02edc79a31796p18ef39jsnf7d624b40736",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    },
    coords
  );
  useEffect(() => {
    setCoords(coordsData);
    console.log(coords);
  }, [coordsData]);
  useEffect(() => {
    if (coords) fetchData();
  }, [fetchData, coords]);
  const screenWidth = useGetScreenWidth();
  return (
    <Container className="p-0 pt-3 pb-2 pb-lg-0 overflow-hidden w-100">
      <Row>
        <Col xs={12}>
          <SearchBar
            coords={coords}
            setCoords={setCoords}
            isDay={data?.current?.is_day}
          />
        </Col>
        {screenWidth < 1200 && (
          <Col xs={12}>
            <WeatherInfo data={data} loading={loading} />
          </Col>
        )}
        {screenWidth < 1200 && (
          <Col xs={12}>
            <WeatherDetails
              humidity={data?.current.humidity}
              wind={data?.current.wind_kph}
              sunrise={data?.forecast.forecastday[0].astro.sunrise}
              sunset={data?.forecast.forecastday[0].astro.sunset}
              isDay={data?.current?.is_day}
              loading={loading}
            />
          </Col>
        )}
        {screenWidth > 1200 && (
          <Col xs={6}>
            <div
              className={`${
                data?.current?.is_day ? "primary-color" : "secondary-color"
              } h-100 rounded-3`}
            >
              <WeatherInfo data={data} loading={loading} />
              <WeatherDetails
                humidity={data?.current.humidity}
                wind={data?.current.wind_kph}
                sunrise={data?.forecast.forecastday[0].astro.sunrise}
                sunset={data?.forecast.forecastday[0].astro.sunset}
                isDay={data?.current?.is_day}
                loading={loading}
              />
            </div>
          </Col>
        )}
        <BackgroundImg isDay={data?.current?.is_day} loading={loading} />
        {screenWidth < 1200 && (
          <Col xs={12}>
            <ForeCast
              forecast={data?.forecast}
              coords={coords}
              loading={loading}
              isDay={data?.current?.is_day}
            />
          </Col>
        )}
        {screenWidth < 1200 && (
          <Col xs={12}>
            <Map coords={coords} />
          </Col>
        )}
        {screenWidth > 1200 && (
          <Col xs={6}>
            <Row>
              <Col xs={12}>
                <ForeCast
                  forecast={data?.forecast}
                  coords={coords}
                  loading={loading}
                  isDay={data?.current?.is_day}
                />
              </Col>
              <Col xs={12}>
                <Map coords={coords} />
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </Container>
  );
};
export default App;
