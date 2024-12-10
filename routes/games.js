const express = require('express');
const axios = require('axios');
const formattedResponse = require('../helpers/response');

const router = express.Router();

const url = process.env.RAWG_URI
const apiKey = process.env.RAWG_API_KEY

// Get games
router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${url}/games?key=${apiKey}`);
        const games = response.data.results;
        res.status(200).json(
            formattedResponse(
                200,
                {
                    total: response.data.count,
                    count: games.length,
                    games: games
                },
                "Games fetched successfully!"
            )
        );
    } catch (error) {
        res.status(500).send('Error fetching games: ' + error.message);
    }
});

module.exports = router;
