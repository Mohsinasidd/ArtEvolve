const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    category : String,
    price : Number,
    file : String,
    artist : String,
    describtion : String,
    createdAt : Date

});

module.exports = model('users', myschema );