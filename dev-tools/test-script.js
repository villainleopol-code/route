const minimist = require("minimist")

const args = minimist(process.argv.slice(2))

console.log("Running test script", args)
