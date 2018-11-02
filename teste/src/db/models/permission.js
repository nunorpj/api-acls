const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PermissionSchema = new Schema({

    permissions: {
        type: String,
        required: true,
        default: "rwd", //read, write, delete
        length: 3,
    }



});

module.exports = mongoose.model('permissions', PermissionSchema);