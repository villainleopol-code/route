const express = require("express")
const router = express.Router()
const { exec } = require("child_process")

router.get("/ping", (req,res)=>{

 const host = req.query.host

 exec("ping -c 1 " + host, (err,stdout,stderr)=>{
   if(err){
     return res.send(err)
   }

   res.send(stdout)
 })

})

module.exports = router
