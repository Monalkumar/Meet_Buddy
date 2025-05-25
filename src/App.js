const express = require("express");
const app = express();


app.use((req,res)=>{
    console.log("hello response succesfully")
    res.send("hello response 1")
})

app.listen(5000,()=>{
    console.log("server is running successfuly in the port for node js")
})
