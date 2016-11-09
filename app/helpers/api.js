import axios from 'axios';
import config from '../config/config';

const _API_KEY = config.API_KEY;
const _URL = `https://api.themoviedb.org/3`;

export function getShows(show) {
	return axios(`${_URL}/search/tv?api_key=${_API_KEY}&query=${show}`)
		.then(function(showData) {
			return showData;
		});
}

export function getShowDetails(showID) {
	return axios(`${_URL}/tv/${showID}?api_key=${_API_KEY}`)
		.then(function(showDetails) {
			console.log(showDetails);
		})
}

