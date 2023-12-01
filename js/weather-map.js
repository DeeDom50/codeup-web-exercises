import { keys } from "../js/keys.js";
const kelvinToCelsius = (kelvin) => kelvin - 273.15;
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const kelvinToFahrenheit = (kelvin) => celsiusToFahrenheit(kelvinToCelsius(kelvin));

const getFiveDayForecast = async (lat, lng, city) => {
	let url;
	let onecall = false;

	if (parseFloat(lat)) {
		onecall = true;
		url = `http://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=${keys.openweather}`;
	} else {
		url = `http://api.openweathermap.org/data/2.5/forecast?q=${lat}&appid=${keys.openweather}`;
	}

	const response = await fetch(url);
	const data = await response.json();

	if (onecall) {
		return data.daily.slice(0, 5);
	}

	return data.list.slice(0, 5);
};

const updateWeatherInfo = async (city) => {
	mapboxgl.accessToken = keys.mapbox;

	const map = new mapboxgl.Map({
		container: 'map-container',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [-98.491142, 29.424349], // Default center (San Antonio)
		zoom: 9,
	});

	const marker = new mapboxgl.Marker({
		draggable: true,
	})
		.setLngLat([-98.491142, 29.424349]) // Default marker position (San Antonio)
		.addTo(map);

	map.setZoom(9); // Set the zoom level on the map

	const updateInfo = async (lat, lon, city) => {
		try {
			// Update the map location
			map.flyTo({
				center: [lon, lat],
				essential: true,
			});

			const forecastData = await getFiveDayForecast(lat, lon);
			const locationInfo = await reverseGeocode(lat, lon);

			// Update the forecast display
			updateForecastCards(forecastData);

			// Update the navbar
			updateNavbar(locationInfo);
		} catch (error) {
			console.error('Error updating information:', error);
		}
	};

	marker.on('dragend', async () => {
		const { lng, lat } = marker.getLngLat();

		try {
			const forecastData = await getFiveDayForecast(lat, lng);
			const locationInfo = await reverseGeocode(lat, lng);

			// Update the forecast display
			updateForecastCards(forecastData);

			// Update the navbar
			updateNavbar(locationInfo);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	});
	// Find button event listener
	const findButton = document.querySelector('#find-button');
	const locationInput = document.querySelector('#location-input');

	findButton.addEventListener('click', async () => {
		const newCity = locationInput.value;

		if (newCity) {
			try {
				// Get the coordinates for the new city
				const newLocationData = await geocode(newCity);

				// Update the current city in the navbar
				document.querySelector('#current-city').textContent = newCity;

				// Update the info with new coordinates
				updateInfo(newLocationData.lat, newLocationData.lon);

				// Relocate the map and marker to the new coordinates
				map.setCenter([newLocationData.lon, newLocationData.lat]);
				marker.setLngLat([newLocationData.lon, newLocationData.lat]);
			} catch (error) {
				console.error('Error getting coordinates:', error);
			}
		}
	});

	// Listen for the Enter key in the input field
	locationInput.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			// Prevent the default behavior (form submission)
			event.preventDefault();

			// Trigger the same logic as the button click
			findButton.click();
		}
	});
};

// Function to update navbar with location information
const updateNavbar = (locationInfo) => {
	const { city, state, country, lat, lon } = locationInfo;
	console.log("triggered from updateNavbar => ", locationInfo);

	document.querySelector('#current-city').textContent = city;
	document.querySelector('#current-state').textContent = state;
	document.querySelector('#current-country').textContent = country;

	// Check if lat and lon are valid numbers before using .toFixed(4)
	const formattedLat = typeof lat === 'number' ? lat.toFixed(4) : 'Unknown';
	const formattedLon = typeof lon === 'number' ? lon.toFixed(4) : 'Unknown';

	document.querySelector('#current-lat').textContent = formattedLat;
	document.querySelector('#current-lon').textContent = formattedLon;
};

// Function to reverse geocode using Mapbox API
const reverseGeocode = async (lat, lon) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=${keys.mapbox}`;
	const response = await fetch(url);
	const data = await response.json();
	const place = data.features[0];
	const city = place.text || 'Unknown City';
	const state = place.context.find(ctx => ctx.id.startsWith('region:'))?.text || 'Unknown State';
	const country = place.context.find(ctx => ctx.id.startsWith('country:'))?.text || 'Unknown Country';

	return {
		city,
		state,
		country,
		lat,
		lon,
	};
};

// Function to update the forecast cards
const updateForecastCards = (forecastData) => {
	const forecastContainer = document.querySelector('#forecast-container');
	forecastContainer.innerHTML = ''; // Clear previous content

	forecastData.forEach(day => {
		const card = document.createElement('div');
		card.classList.add('forecast-card');

		const date = document.createElement('div');
		date.textContent = new Date(day.dt * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' });


		const temperature = document.createElement('div');
		const tempKelvin = day.temp?.day || day.main?.temp;
		const tempFahrenheit = kelvinToFahrenheit(tempKelvin);
		temperature.textContent = `Temperature: ${tempFahrenheit.toFixed()}°F`;

		const description = document.createElement('div');
		description.textContent = `Description: ${day.weather[0].description}`;

		const humidity = document.createElement('div');
		humidity.textContent = `Humidity: ${day.humidity || 'N/A'}`;

		const wind = document.createElement('div');
		wind.textContent = `Wind: ${day.wind_speed || 'N/A'} m/s`;

		const pressure = document.createElement('div');
		pressure.textContent = `Pressure: ${day.pressure || 'N/A'} hPa`;

		card.appendChild(date);
		card.appendChild(temperature);
		card.appendChild(description);
		card.appendChild(humidity);
		card.appendChild(wind);
		card.appendChild(pressure);

		forecastContainer.appendChild(card);
	});
	};

const updateInfo = async (lat, lon, city) => {
	try {
		if (city) {
			// If city is provided, use geocoding to get coordinates
			const locationData = await geocode(city);
			lat = locationData.lat;
			lon = locationData.lon;
		}
		map.flyTo({
			center: [lon, lat],
			essential: true,
		});

		const forecastData = await getFiveDayForecast(lat, lon);
		const locationInfo = await reverseGeocode(lat, lon);

		// Update the forecast display
		updateForecastCards(forecastData);

		// Update the navbar
		updateNavbar(locationInfo);
	} catch (error) {
		console.error('Error updating information:', error);
	}
};

//function for geocoding
const geocode = async (city) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${keys.mapbox}`;
	const response = await fetch(url);
	const data = await response.json();
	const coordinates = data.features[0].geometry.coordinates;
	return { lat: coordinates[1], lon: coordinates[0] };
};

updateWeatherInfo('San Antonio');
