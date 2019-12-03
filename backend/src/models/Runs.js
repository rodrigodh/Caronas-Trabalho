const mongoose = require('mongoose');

const RunsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    go: String,
    back: String,
    paid: {
        type: Boolean,
        default: false,
    },
    coment: String,
},{
    timestamps: true
});

module.exports = mongoose.model('Runs', RunsSchema); 
