const mongoose = require('mongoose');



// MongoDB Connection
const mongoDBConnect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_STRING);
        console.log(`MongoDB Server connection Successfull`.bgBlue.black);
    }catch(err){
        console.log(`${err}`.bgRed.black);
    }
}


module.exports = mongoDBConnect;