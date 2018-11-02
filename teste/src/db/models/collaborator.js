const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollaboratorSchema = new Schema({

    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        require: true
    },

    clientID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clients',
        require: true
    },

    permissionsID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'permissions',
        require: true
    }



});

module.exports = mongoose.model('collaborators', CollaboratorSchema);