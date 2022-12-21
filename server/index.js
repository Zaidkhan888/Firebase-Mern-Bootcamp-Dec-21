const express = require("express");
const taskRouter = require("./routes/TaskRoutes")
const app = express();

const cors = require("cors")
app.use(cors())
app.use(express.urlencoded()); //for payladd
app.use(express.json()) //payload is in the json 


app.get("/",async(req,res)=>{

res.send({"Name":"Tejas"})
})


app.use("/task",taskRouter)
app.listen(3000,()=>{
    console.log("connected");
})
