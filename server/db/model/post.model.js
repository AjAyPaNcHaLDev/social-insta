const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    id: { type: String }, // User ID of the post creator
  },
  media: [
    {
      type: { type: String }, // 'image' or 'video'
      url: { type: String }, // URL to the media
    },
    // ... other media items
  ],
  caption: { type: String }, // Caption of the post
  location: {
    name: { type: String }, // Name of the location
    latitude: { type: Number }, // Latitude of the location
    longitude: { type: Number }, // Longitude of the location
  },
  likes: { type: Number }, // Number of likes
  comments: [
    {
      user: {
        id: { type: String }, // User ID of the commenter
      },
      text: { type: String }, // Comment text
    },
    // ... other comments
  ],
  timestamp: { type: String }, // ISO 8601 timestamp
  // ... other fields like hashtags, mentions, etc.
});
const post = mongoose.model("post", postSchema);
module.exports = post;
