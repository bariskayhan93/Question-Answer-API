
const express=require("express");
const dotenv=require("dotenv");
const connectDatabase=require('./helpers/database/connectDatabase');
const customErrorHandler=require("./middlewares/errors/customErrorHandler")
const path = require('path');

const routers=require("./routers")

//environmental variables
dotenv.config({
    path: "./config/env/config.env"
});
//localhost:5000/api/questions   -sorularla ilgili islemler
//localhost:5000/api/auth ---kullanici islemleri


//MongoDb Connection
connectDatabase();

const app=express();

//Express-Body Middleware
app.use(express.json())

const PORT=process.env.PORT;

//Routers Middleware
app.use("/api",routers);

//Error handler

app.use(customErrorHandler);

//Static Files

app.use(express.static(path.join(__dirname,"public")))


app.listen(PORT,()=>{
    console.log(`Port started on ${PORT}:${process.env.NODE_ENV}`)
})