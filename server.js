const express = require("express")
const users = require("./routes/users")
const products = require("./routes/products")
const reviews = require("./routes/reviews")

const app = express()
app.use(express.json())

app.use("/users", users)
app.use("/products", products)
app.use("/reviews", reviews)

app.listen(3000, () => {
  console.log("API running on port 3000")
})
