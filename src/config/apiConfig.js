const weatherApiConfig = {
  url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?",
  options: {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6262113d64msh24679dc84695e10p179da1jsn22caf3f8f106",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  },
};
const cityApiConfig = {
  url: "https://geocoding-by-api-ninjas.p.rapidapi.com/v1/reversegeocoding?",
  options: {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6262113d64msh24679dc84695e10p179da1jsn22caf3f8f106",
      "X-RapidAPI-Host": "geocoding-by-api-ninjas.p.rapidapi.com",
    },
  },
};
export { weatherApiConfig, cityApiConfig };
