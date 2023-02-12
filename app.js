const express = require("express")
const app = express()
const https = require("https")


app.get("/", function(req,res)
{

    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=6ce56cdf9e1708947494bd1d2c6fcce6" ;

    https.get(url, function(response)
        console.log(response);
    })


    res.send("server is up and running")
})



app.listen(3000,function(){
    console.log("server is running on port 3000.");
})