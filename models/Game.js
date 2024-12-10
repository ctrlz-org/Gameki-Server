const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  id: Number,
  slug: String,
  name: String,
  released: String,
  tba: Boolean,
  background_image: String,
  rating: Number,
  rating_top: Number,
  ratings: Object,
  ratings_count: Number,
  reviews_text_count: String,
  added: Number,
  added_by_status: Object,
  metacritic: Number,
  playtime: Number,
  suggestions_count: Number,
  updated: String,
  esrb_rating: {
    id: Number,
    slug: String,
    name: String,
  },
  platforms: [
    {
      platform: {
        id: Number,
        slug: String,
        name: String,
      },
      released_at: String,
      requirements: {
        minimum: String,
        recommended: String,
      },
    },
  ],
});

module.exports = mongoose.model('Game', gameSchema);
