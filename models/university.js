const mongoose = require('mongoose');

/**
 * Province Schema
 */
const ProvinceSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

/**
 * City Schema
 */
const CitySchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  pid: {
    type: String,
    required: true
  }
});

/**
 * Univercity Schema
 */
const UniversitySchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  cid: {
    type: String,
    required: true
  },
  level: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  }
});

module.exports = {
  Province: mongoose.model('province', ProvinceSchema),
  City: mongoose.model('city', CitySchema),
  University: mongoose.model('university', UniversitySchema)
}
