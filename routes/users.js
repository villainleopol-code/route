const express = require("express")
const router = express.Router()
const db = require("../db")

router.get("/search", (req,res)=>{

 const username = req.query.username

 const query = "SELECT * FROM users WHERE username = '" + username + "'"

 db.query(query,(err,result)=>{
   if(err){
     return res.status(500).send(err)
   }

   res.json(result)
 })

})

module.exports = router
