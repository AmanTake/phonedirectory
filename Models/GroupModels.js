const mongoose = require('mongoose');
const {ObjectId} = require('mongodb')

const groupSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userId:{
        type:ObjectId,
        required:true,
    }

},
{
    timestamps:true
});


const groups = mongoose.model('groups',groupSchema);

 module.exports = groups;