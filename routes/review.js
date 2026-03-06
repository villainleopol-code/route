const express = require("express")
const router = express.Router()

router.post("/", (req,res)=>{

 const review = req.body.review

 const html = `
 <html>
  <body>
   <h2>Customer review</h2>
   <p>${review}</p>
  </body>
 </html>
 `

 res.send(html)

})

module.exports = router
