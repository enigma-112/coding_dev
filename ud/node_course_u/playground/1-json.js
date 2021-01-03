const fs = require("fs")


const dataBuffer = fs.readFileSync("1-json.json")
const dataJSON = dataBuffer.toString()
const data_javascript = JSON.parse(dataJSON)
data_javascript.name = "Kundan"
data_javascript.age = 24

const dataJSON_1 = JSON.stringify(data_javascript);
fs.writeFileSync("1-json.json",dataJSON_1)

