// importing express
const express=require('express');
// calling the Web framework
 
const app=express()
// setting the port number
const port=8001
// importing ejs layout
 const expresslayout=require('express-ejs-layouts');

app.use(expresslayout)
// imorting mongoose database
const db=require('./config/mongoose');
// to parse the body of the request
 app.use(express.urlencoded());

 app.set('layout extractStyles',true)
 app.use(express.static('./assets'));
//  to set view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));
// server start responsing 
app.listen(port,function(err){
    if(err){
        console.log("error in the running server",err)
    }
    console.log("server is running on the port",port)
})