const mongoose = require('mongoose');
const mongouri = 'mongodb+srv://Ajay:ajay123@cluster0.bgdbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectToMongodb = async () => {
    try {
        await mongoose.connect(mongouri);
        console.log("Connected To Mongodb");
    }
    
    catch (err) {
        console.log(err)
    }

}
module.exports = connectToMongodb;

