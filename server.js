const express = require("express");

// Initialize app with Express
const app = express();

// Get request and send data to the browser
app.get("/", (request, response) => response.send("API running"));

// Define the port for deploy on Heroku || local.host
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
