const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const collaboratorsSchema = new Schema({

    userID: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        require: true,
    },

    clientID: {
        type: Schema.Types.ObjectId,
        ref: 'clients',
        require: true,
    },
    permissions:[{
        type:String,
        enum: ["GET","POST","PUT","DELETE"],

    }]

});



module.exports = mongoose.model('collaborators',collaboratorsSchema);