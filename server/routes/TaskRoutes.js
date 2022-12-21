const express = require("express")
const router = express.Router()
const db = require("../friebase")



router.get("/getTask",async(req,res)=>{
   try {
    const tasksRef = db.collection("tasks")
    const snapshot = await tasksRef.get();
    let arr = []
    
    snapshot.forEach(doc =>{
        arr= [...arr,doc.data()]
        console.log(doc.id , "+>" , doc.data());
    });
    res.status(200).send(arr)
    
   } catch (error) {
    console.log(("Error: " , error));
    
   }
})

router.post("/addTask",async(req,res)=>{
    try {
        console.log(req.body);
        // const newTask = db.collection("tasks").doc("task1").set({
        const newTask = db.collection("tasks").add({
            name:req.body.name ,
            desc:req.body.desc ,
    
        })
        console.log("data sended to the server");
        console.log(res.id);
        res.status(200).send(newTask.id)
    } catch (error) {
        console.log("Error" +  error);
        
    }
 

    //craeting an api 




})

router.delete("/",async(req,res)=>{

})

module.exports = router;


/*
1. How to add value to the databse
*/