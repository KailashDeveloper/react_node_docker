const express = require('express');
const cors = require('cors');
const countryRoutes = require('./routes/countryRoutes');

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for frontend requests
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads

// Use the country routes
app.use(countryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
