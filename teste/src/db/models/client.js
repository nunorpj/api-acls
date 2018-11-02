const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },


});

module.exports = mongoose.model('clients', ClientSchema);