// Initialize the map
var map = L.map('map').setView([0, 0], 2); // Centered at [latitude, longitude], zoom level

// Add a tile layer (replace the URL with an appropriate tile source)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetch data from NASA's CME Analysis API using your API key
var apiKey = 'Nrc5v3BYtE2tPQKNaESSVS6P8d0tQyVZk4qMqQWe'; // Replace with your actual API key

// Set query parameters for the API
var startDate = '2023-08-01'; // Replace with your desired start date
var endDate = '2023-08-30';   // Replace with your desired end date
var mostAccurateOnly = true;
var speedLowerLimit = 500;
var halfAngleLowerLimit = 30;
var catalog = 'ALL';

var apiUrl = `https://api.nasa.gov/DONKI/CMEAnalysis?startDate=${startDate}&endDate=${endDate}&mostAccurateOnly=${mostAccurateOnly}&speed=${speedLowerLimit}&halfAngle=${halfAngleLowerLimit}&catalog=${catalog}&api_key=${apiKey}`;

// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process and use the retrieved data
    console.log(data); // Log the data to the console for demonstration
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
