const mongoose = require('mongoose');
const RouteSchema = new mongoose.Schema({
  routeid: {
    type: Number,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  // pois: {
  //   type: [Number],
  //   required: true,
  // },
  pois: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'poi',
    },
  ],
  evaluation_grade: {
    type: Number,
    required: true,
  },
  experience_level: {
    type: Number,
    required: true,
  },
  theme: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'theme',
  },
});

module.exports = Route = mongoose.model('route', RouteSchema);
