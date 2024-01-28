// connecting to database
// importing mongoose
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/development');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to'));
db.once('open',function(){
    console.log('successfully connected to db')
});
module.exports=db;