const mongoose = require('mongoose');

const scoreWSchema = new mongoose.Schema({
    scoreW: {
        type: Number,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const ScoreW = mongoose.model('ScoreW', scoreWSchema);

module.exports = ScoreW;
