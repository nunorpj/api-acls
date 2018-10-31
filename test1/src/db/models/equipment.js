const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EquipmentSchema = new Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },

    owner:{
        type: Schema.Types.ObjectId, ref: 'clients' ,
        require:true,
    }
});

module.exports = mongoose.model('equipments',EquipmentSchema);