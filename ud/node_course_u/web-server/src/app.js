const path = require("path")
const express = require("express")

const app = express()
const publicDirectoryPath = path.join(__dirname,"../public")

app.use(express.static(publicDirectoryPath))

// app.get("/help",(req,res) => {
//     res.send([
//         {name:"Andrew", age:27},
//         {name:"Sam", age:50}
//     ])
// })

app.get("/weather",(req,res) => {
    res.send({
        forecast:"It is snowing",
        location:"Philadelphia"
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000.")
})