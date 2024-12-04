const mongoose = require('mongoose');
const env = require('dotenv').config();


const databaseName = "abhi"
const url= process.env.MONGO_URI;

mongoose.connect(url)
.then((result) => {
    console.log('connected to database');
} ).catch((err) =>{
    console.log(err);
}
);

module.exports = mongoose;