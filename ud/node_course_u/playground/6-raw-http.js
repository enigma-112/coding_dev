const http = require("http")
const url = "http://api.weatherstack.com/current?access_key=54483748500d8209f64c80c0ca0b5f4d&query=45,-75&units=f"

const request = http.request(url, (response) => {
    let data = ""
    response.on("data",(chunk) => {
        data = data + chunk.toString()
    })

    response.on("end", () => {
        const body = JSON.parse(data)
        console.log(body)
    
    })
})

request.on("error",(error) => {
    console.log("An Error", error)
})

request.end()