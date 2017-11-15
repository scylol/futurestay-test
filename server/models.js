const mongoose = require('mongoose');

const athleteSchema = mongoose.Schema({
  name:{type: String, required: true},
  sport: {type: String, required: true},
  nationality: {type: String, required: true},
  gender: {type: String, required: true},
  dateOfBirth: {type: String, required: true}
});