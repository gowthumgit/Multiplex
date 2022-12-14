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
        type: Array
    },
    audi_ids : {
        type: Array
    }
    
});

var movie = new mongoose.model('Movie', schema);

module.exports = movie