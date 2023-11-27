import { keys } from "../../keys.js";

const getCoordinates = async (searchText) => {
	searchText = encodeURIComponent(searchText);
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await fetch(url, options);
	const data = await response.json();
	return data.features[0].center;
};

const getAddress = async (lng, lat) => {
	if (Array.isArray(lng)) {
		lat = lng[1];
		lng = lng[0];
	}
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${keys.mapbox}`;
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await fetch(url, options);
	const data = await response.json();
	return data.features[0].place_name;
};

const handleDragEnd = async (e, map) => {
	console.log(e);
	const lng = e.target._lngLat.lng;
	const lat = e.target._lngLat.lat;
	map.flyTo({
		center: [lng, lat],
		zoom: 12,
		speed: 2,
	});
	const address = await getAddress(lng, lat);
	console.log(address);
};

//MAIN
(async () => {
	const coordinates = await getCoordinates("8700 Tesoro Dr, San Antonio");
	console.log(coordinates);
	mapboxgl.accessToken = keys.mapbox;
	const map = new mapboxgl.Map({
		container: "map", // container ID
		// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
		style: "mapbox://styles/mapbox/navigation-night-v1", // style URL
		center: coordinates, // starting position [lng, lat]
		zoom: 9, // starting zoom
		keyboard: false,
	});
	map.flyTo({
		center: coordinates,
		zoom: 16,
		speed: 2,
	});
	const popup = new mapboxgl.Popup().setHTML("<p>We live here now.</p>");
	const marker = new mapboxgl.Marker({
		draggable: true,
	})
		.setLngLat(coordinates)
		.addTo(map)
		.setPopup(popup);
	marker.on("dragend", (e) => {
		handleDragEnd(e, map);
	});
})();