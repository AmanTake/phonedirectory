const mongoose = require('mongoose');

const db = async (URL)=>{
    console.log('dbConected');
    return await mongoose.connect(URL)
    
}



module.exports = db;