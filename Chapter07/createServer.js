 const express = require('express');

 const path = require('path');

 const app = express();

 app.use(express.static('./Chapter07/navbar-app'));


 app.get('/',(req,res) => {
    res.send('Home Page');
 })

 app.get('/about',(req,res)=>{
    res.send('About Page');
 })

 app.get('/file',(req,res) => {
    res.sendFile(path.join(__dirname,'./navbar-app/index.html'));
 })

 app.all('*',(req,res)=>{
    res.status(404).send("<h1> Sorry there will be no data </h1>")
 })

app.listen(5000);


// what is static file in java scripit?
// -> basically it is the type of file in which server don't have to change it