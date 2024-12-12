import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getCountries = () => {
  return axios.get(`${BASE_URL}/test`);
};
