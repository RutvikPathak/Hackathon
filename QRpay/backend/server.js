const express = require('express');
const cors = require('cors');
const userIDtypeRoute = require('./routes/userIDtypeRoute');
const userRoute = require('./routes/userRoute');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', userIDtypeRoute);
app.use('/api/register', userRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
