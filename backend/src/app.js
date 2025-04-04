const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config;
const taskRoutes = require("./routes/taskRoutes")

const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));


// Routes
app.use("/api/tasks", taskRoutes)

// Default Route


app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
