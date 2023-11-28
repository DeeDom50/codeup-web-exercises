import { getForecast } from "../api/openweather.js";
//MAIN
(async () =>{
	const sanAntonioForecast = await getForecast(29.458472, -98.6791838);
	console.log(sanAntonioForecast);
})();