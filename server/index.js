const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()
app.use(cors())

const PORT = process.env.PORT || 8080

//Schema creation
const SchemaDB = mongoose.Schema({
    name : String,
    email: String,
    mobile : Number,

},{
    timestamps : true
})

const userModel = mongoose.model("user",SchemaDB)

//read db data
app.get("/",async(req,res)=>{
    const data = await userModel.find({})
//    res.json({message : "Server is running"})

    res.json({success : true, data : data})
})

//create data //save data in mongodb
app.post("/create",(req,res)=>{
    console.log(req.body)
})

mongoose.connect("mongodb://localhost:27017/crudoperation")
.then(()=>{
    console.log("Connected to MongoDB Server")
    app.listen(PORT, ()=>console.log("Server is running"))
})

.catch((err)=>console.log(err))
