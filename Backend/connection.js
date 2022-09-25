const mongoose = require('mongoose');

const databaseName = "abhi"
const url= `mongodb+srv://abhi:abhi2@cluster0.2agagpc.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

mongoose.connect(url)
.then((result) => {
    console.log('connected to database');
} ).catch((err) =>{
    console.log(err);
}
);

module.exports = mongoose;