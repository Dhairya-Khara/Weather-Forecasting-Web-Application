const express = require('express')
const forecast = require('./utils/forecast')

const geocode = require('./utils/geocode')

const app = express()
const port = process.env.PORT || 8080

app.get('/weather', async (req,res)=>{
    console.log(req.query.address)
    if(!req.query.address){
        res.send("Error. Please provide location")
    }
    else{
        const geocodeData = await geocode(req.query.address)
        const forecastData = await forecast(geocodeData.latitude, geocodeData.longitude)
        console.log(forecastData)
        res.send("yo")
        
    }
    
})

app.listen(port, ()=>{
    console.log("Started on port " + port)
})