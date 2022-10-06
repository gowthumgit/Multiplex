var mongoose = require('mongoose');

var schema = new mongoose.Schema({

    movieId: {
        type: String,
        required: true,
        unique: true
    }, 
    name: {
        type: String,
        required: true,
        unique: true
    },
    genre: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: ''
    },
    duration: {
        type: Number
    },
    rating: {
        type : Number
    },
    actors : {
        type: [String]
    },
    audi_ids : {
        type: [String]
    }
    
});

var movie = new mongoose.model('Movie', schema);

module.exports = movie