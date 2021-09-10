const express = require('express')
const path = require('path')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const getMaxAndMin = require('./utils/getMaxAndMin')
const getDay = require('./utils/unixTimeConverter')

const app = express()
const port = process.env.PORT || 8080

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath));



app.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath + "/index.html"))
})


app.get('/weather', async (req, res) => {
    if (!req.query.address) {
        res.send("Error. Please provide location")
    }
    else {
        const geocodeData = await geocode(req.query.address)
        const forecastData = await forecast(geocodeData.latitude, geocodeData.longitude)
        const data = {
            location: geocodeData.location,

            currentTemp: forecastData.current.temp,
            currentFeels_like: forecastData.current.feels_like,
            currentDescription: forecastData.current.weather[0].description,
            currentIcon: forecastData.current.weather[0].icon,
            currentMax: forecastData.daily[0].temp.max,
            currentMin: forecastData.daily[0].temp.min,
            currentPrecipProbability: forecastData.daily[0].pop,

            day2Max: forecastData.daily[1].temp.max,
            day2Min: forecastData.daily[1].temp.min,
            day2FeelsLikeMax: getMaxAndMin(forecastData.daily[1].feels_like.day, forecastData.daily[1].feels_like.night, forecastData.daily[1].feels_like.eve, forecastData.daily[1].feels_like.morn).max,
            day2FeelsLikeMin: getMaxAndMin(forecastData.daily[1].feels_like.day, forecastData.daily[1].feels_like.night, forecastData.daily[1].feels_like.eve, forecastData.daily[1].feels_like.morn).min,
            day2Description: forecastData.daily[1].weather[0].description,
            day2PrecipProbability: forecastData.daily[1].pop,
            day2Icon: forecastData.daily[1].weather[0].icon,
            day2Day: getDay(forecastData.daily[1].dt),

            day3Max: forecastData.daily[2].temp.max,
            day3Min: forecastData.daily[2].temp.min,
            day3FeelsLikeMax: getMaxAndMin(forecastData.daily[2].feels_like.day, forecastData.daily[2].feels_like.night, forecastData.daily[2].feels_like.eve, forecastData.daily[2].feels_like.morn).max,
            day3FeelsLikeMin: getMaxAndMin(forecastData.daily[2].feels_like.day, forecastData.daily[2].feels_like.night, forecastData.daily[2].feels_like.eve, forecastData.daily[2].feels_like.morn).min,
            day3Description: forecastData.daily[2].weather[0].description,
            day3PrecipProbability: forecastData.daily[2].pop,
            day3Icon: forecastData.daily[2].weather[0].icon,
            day3Day: getDay(forecastData.daily[2].dt),

            day4Max: forecastData.daily[3].temp.max,
            day4Min: forecastData.daily[3].temp.min,
            day4FeelsLikeMax: getMaxAndMin(forecastData.daily[3].feels_like.day, forecastData.daily[3].feels_like.night, forecastData.daily[3].feels_like.eve, forecastData.daily[3].feels_like.morn).max,
            day4FeelsLikeMin: getMaxAndMin(forecastData.daily[3].feels_like.day, forecastData.daily[3].feels_like.night, forecastData.daily[3].feels_like.eve, forecastData.daily[3].feels_like.morn).min,
            day4Description: forecastData.daily[3].weather[0].description,
            day4PrecipProbability: forecastData.daily[3].pop,
            day4Icon: forecastData.daily[3].weather[0].icon,
            day4Day: getDay(forecastData.daily[3].dt),

            day5Max: forecastData.daily[4].temp.max,
            day5Min: forecastData.daily[4].temp.min,
            day5FeelsLikeMax: getMaxAndMin(forecastData.daily[4].feels_like.day, forecastData.daily[4].feels_like.night, forecastData.daily[4].feels_like.eve, forecastData.daily[4].feels_like.morn).max,
            day5FeelsLikeMin: getMaxAndMin(forecastData.daily[4].feels_like.day, forecastData.daily[4].feels_like.night, forecastData.daily[4].feels_like.eve, forecastData.daily[4].feels_like.morn).min,
            day5Description: forecastData.daily[4].weather[0].description,
            day5PrecipProbability: forecastData.daily[4].pop,
            day5Icon: forecastData.daily[4].weather[0].icon,
            day5Day: getDay(forecastData.daily[4].dt),

            day6Max: forecastData.daily[5].temp.max,
            day6Min: forecastData.daily[5].temp.min,
            day6FeelsLikeMax: getMaxAndMin(forecastData.daily[5].feels_like.day, forecastData.daily[5].feels_like.night, forecastData.daily[5].feels_like.eve, forecastData.daily[5].feels_like.morn).max,
            day6FeelsLikeMin: getMaxAndMin(forecastData.daily[5].feels_like.day, forecastData.daily[5].feels_like.night, forecastData.daily[5].feels_like.eve, forecastData.daily[5].feels_like.morn).min,
            day6Description: forecastData.daily[5].weather[0].description,
            day6PrecipProbability: forecastData.daily[5].pop,
            day6Icon: forecastData.daily[5].weather[0].icon,
            day6Day: getDay(forecastData.daily[5].dt),

            day7Max: forecastData.daily[6].temp.max,
            day7Min: forecastData.daily[6].temp.min,
            day7FeelsLikeMax: getMaxAndMin(forecastData.daily[6].feels_like.day, forecastData.daily[6].feels_like.night, forecastData.daily[6].feels_like.eve, forecastData.daily[6].feels_like.morn).max,
            day7FeelsLikeMin: getMaxAndMin(forecastData.daily[6].feels_like.day, forecastData.daily[6].feels_like.night, forecastData.daily[6].feels_like.eve, forecastData.daily[6].feels_like.morn).min,
            day7Description: forecastData.daily[6].weather[0].description,
            day7PrecipProbability: forecastData.daily[6].pop,
            day7Icon: forecastData.daily[6].weather[0].icon,
            day7Day: getDay(forecastData.daily[6].dt),

        }
        res.send(data)
    }

})

app.get('/about', (req,res)=>{
    res.sendFile(path.join(publicDirectoryPath + "/about.html"))
})

app.get('*', (req,res)=>{
    res.redirect("/");
})

app.listen(port, () => {
    console.log("Started on port " + port)
})