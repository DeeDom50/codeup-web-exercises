import { keys } from "../js/keys.js";

/**
 * Gets a forecast from the Openweather API
 * @param {number} lat - Latitude of the coord.
 * @param {number} lng - Longitude of the coord.
 * @returns {Promise<void>}
 */
export const getForecast = async (lat, lng) =>{
	if(Array.isArray(lat)) {
		lng = lat[1];
		lat = lat[0];
	}
	const url=`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=${keys.openweather}`;
	const options = {
		method: "GET"
	};
	const response = await fetch(url, options);
	const data = response.json();
	return data;
}