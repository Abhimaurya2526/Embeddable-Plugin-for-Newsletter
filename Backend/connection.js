const mongoose = require('mongoose');

const databaseName = "abhi"
const url= `mongodb+srv://abhi:abhi2@cluster0.hrmj2ca.mongodb.net/`;

mongoose.connect(url)
.then((result) => {
    console.log('connected to database');
} ).catch((err) =>{
    console.log(err);
}
);

module.exports = mongoose;