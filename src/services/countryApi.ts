import { MyAPI } from "../helpers/api";

import { ICountry } from "../entities/country";
import handleError from "../helpers/handleApiError";

const api = new MyAPI({
  baseURL: "https://restcountries.eu/rest/v2"
});
const getAllCountriesApi = async (): Promise<ICountry[]> => {
  const response = await api.get(`/all`);
  return response.data as ICountry[];
};

export { getAllCountriesApi };
