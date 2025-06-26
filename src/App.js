const express = require("express");
const app = express();


app.get("/admin/getAllData",(req,res)=>{
    const token = "abc";
    const isAdminAuthorized = token ==="abc"
  if(isAdminAuthorized){
    res.send("Admin is authorised")
  } 
  else{
    res.status(401).send("please check the admin authority");
  }
  })
  
app.listen(5000,()=>{
    console.log("server is running successfuly in the port for node js")
})




    
