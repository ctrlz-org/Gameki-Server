require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

// Connect to MongoDB
mongoose.set('strictQuery', false)
const url = process.env.MONGODB_URI
console.log('Connecting to', url)
mongoose.connect(url)
    .then(result => {
        console.log('Connected to MongoDB')
    })
    .catch(error => {
        console.log('Error connecting to MongoDB:', error.message)
    })

// Middleware
app.use(express.json());

// Routes
const gamesRoute = require('./routes/games');
app.use('/api/games', gamesRoute);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});