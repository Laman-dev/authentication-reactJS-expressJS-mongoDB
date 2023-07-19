const express = require("express");
const collection = require("./mongodb");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())



app.get("/",cors(), async(req, res)=>{

});



// ========Get Data Login Form=========
app.post("/", async(req, res)=>{
    const {email, password} = req.body
    
    try {
        
        const  verify = await collection.findOne({email:email, password: password});
        if(verify){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    } catch (e) {
        res.json("notexist");
    }
});
// ========Get Data Login Form=========


// ========Get Data Register Form=========
app.post("/register", async(req, res)=>{
    const {username, email, password} = req.body
    
    // ===Insert Data=========
    const data = {
        username: username,
        email: email,
        password: password    
    }

    try {
        
        const  verify = await collection.findOne({email:email});
        if(verify){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])   
        }
    } catch (e) {
        res.json("notexist");
    }
    // ===Insert Data=========

});
// ========Get Data Register Form=========



// =====Express Server Listen================

app.listen(8000, ()=>{
    console.log("Express Server Run Successfully");
})