// importing mongoose 
 const mongoose=require('mongoose');
// creating Schema 
const habitSchema= new mongoose.Schema({
    name:{
        type:String,
        reqired:true
    },
    all_renews:[
        {
            status:String,
            date:String,
            day:String
        }
    ]
   
});

// model name
const Habitnode= mongoose.model('Habitnode',habitSchema);
module.exports=Habitnode;