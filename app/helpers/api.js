import axios from "axios";
import config from "../config/config";

const API_KEY = config.API_KEY;
const URL = "https://api.themoviedb.org/3";

export function getShows(show) {
  return axios(`${URL}/search/tv?api_key=${API_KEY}&query=${show}`).then(
    showData => showData
  );
}

export function getShowDetails(showID) {
  return axios(`${URL}/tv/${showID}?api_key=${API_KEY}`).then(
    showDetails => showDetails
  );
}
