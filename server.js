const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const eventRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', eventRoutes);
app.use('/api', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
