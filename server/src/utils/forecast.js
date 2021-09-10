const request = require('request')

const forecast = (lat, lon)=>{
    const url = "https://api.openweathermap.org/data/2.5/onecall?lat="+encodeURIComponent(lat)+"&lon="+encodeURIComponent(lon)+"&exclude=hourly,minutely&units=metric&appid="+encodeURIComponent(process.env.openWeatherKey)
    return new Promise((resolve, reject)=>{
        request({url, json:true}, (error, response)=>{
            if(error){
                reject("Error")
                return
            }
            const data = response.body
            resolve(data)
        })
    })
}

module.exports = forecast