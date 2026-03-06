const jwt = require("jsonwebtoken")

const SECRET = "SUPER_SECRET_JWT_KEY_123"

function generateToken(user){
 return jwt.sign(user, SECRET)
}

module.exports = generateToken
