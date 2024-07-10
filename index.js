const express = require("express");
const path = require("path");
require('dotenv').config();
const connectMongodb = require('./connection');
const routerHandler = require('./routes/url');


const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views",path.resolve('./views'));

connectMongodb();

app.get('/',(req,res)=>res.render('home',{name:"Shivaraj Shetty"}));

app.use(express.urlencoded({extended:false}));

app.use('/url',routerHandler);

app.listen(port, ()=> console.log("Listening to server",port));
