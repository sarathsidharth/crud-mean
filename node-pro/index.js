const express = require("express");
const bodyParser = require("body-parser");
const { mongoose } = require("./db");
const cors=require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors());

const personController = require('../node-pro/controllers/personController')


app.use('/persons',personController);

app.use('/',(req,res)=>{
    res.send("helooooo");
})
const PORT = 3000;
app.listen(PORT,()=>console.log(`server started at port : ${PORT}`));