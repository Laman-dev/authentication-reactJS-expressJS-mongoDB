const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/app-data")
.then(()=>{console.log("mongoDB connected successfully");})
.catch((e)=>{console.log(e);}) 


// ======Create Schema=======

const newSchema = new mongoose.Schema({
    username: {type: String, required: true},  
    email: {type: String, required: true, unique: true},  
    password: {type: String, required: true} 
});


// ======Create Model=======

const collection = new mongoose.model("collection", newSchema);
module.exports = collection;

