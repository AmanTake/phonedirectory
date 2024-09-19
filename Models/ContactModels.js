const mongoose = require('mongoose');
const {ObjectId} = require('mongodb')

const contactSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    number:{
        type:String,
        required:true,  
    },
    address:{
        type:String,
        required:true,
    },
    userId:{
        type:ObjectId,
        required:true,
    },
    group:{
        type:String,
        required:true,
    }

},
{
    timestamps:true
});


const contact = mongoose.model('contact',contactSchema);

 module.exports = contact;