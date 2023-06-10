const mongoose = require('mongoose');
const uri = process.env.DB;

module.exports = async function connect(){
    const conn = mongoose.connect(uri, { useNewUrlParser: true });
    const db = mongoose.connection;


    db.on('error',console.error.bind(console,"Error connectiong to mongodb"));
    db.once('open',function(){

        console.log('Connected to mongodb');

    })
}