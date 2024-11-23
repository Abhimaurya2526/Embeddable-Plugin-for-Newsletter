const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    name : String,
    email : String,
    owner : {type : Types.ObjectId, ref : 'usersCollection'},
    createdAt : Date
    
    
})

module.exports = model( 'subscribers', mySchema );