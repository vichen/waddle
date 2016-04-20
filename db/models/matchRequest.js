var mongoose = require('mongoose');

var matchRequestSchema = mongoose.Schema({
  username: String,
  latitude: Number,
  longitude: Number,
  timeStamp: { type: Date, default: Date.now }, // When did this user start looking for a match
  isActive: { type: Boolean, default: true }
});

exports.MatchRequest = mongoose.model('MatchRequest', matchRequestSchema);
