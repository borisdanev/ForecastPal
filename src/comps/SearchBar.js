import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import useFetchData from "../hooks/useFetchData";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import Button from "react-bootstrap/Button";
import { BiSearch } from "react-icons/bi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { HiMenuAlt1 } from "react-icons/hi";
const SearchBar = ({ coords, setCoords, isDay }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, fetchData, error } = useFetchData(
    `https://forward-reverse-geocoding.p.rapidapi.com/v1/forward?city=${
      searchTerm ? searchTerm : ""
    }&accept-language=en&polygon_threshold=0.0`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f053ecf726msh9a02edc79a31796p18ef39jsnf7d624b40736",
        "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
      },
    },
    searchTerm
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setSearchTerm("");
  };
  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      const [{ lat, lon }] = data;
      setCoords({ latitude: parseFloat(lat), longitude: parseFloat(lon) });
    }
  }, [data]);
  return (
    <Container className="mb-3 ps-2 d-flex align-items-center">
      <Form className="w-50" onSubmit={handleSubmit}>
        <FormGroup>
          <div className="position-relative">
            <FormControl
              value={searchTerm}
              className={`px-4 py-2 position-relative text-white ${
                isDay
                  ? "primary-color day-input"
                  : "secondary-color night-input"
              }`}
              placeholder="Search for location"
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                outline: "none",
                border: "none",
                boxShadow: "none",
              }}
            />
            <BiSearch
              className="position-absolute"
              style={{ top: "35%", left: "1%", color: "white" }}
            />
          </div>
          {error && (
            <FormLabel className="bg-danger p-1 text-white">
              <p className="m-0">
                <IoIosInformationCircleOutline className="text-white me-1" />
                {error.message}
              </p>
            </FormLabel>
          )}
        </FormGroup>
      </Form>
    </Container>
  );
};
export default SearchBar;
