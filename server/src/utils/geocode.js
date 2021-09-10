const request = require('request')

const geocode = async (address) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token='+encodeURIComponent(process.env.mapBoxKey)
    return new Promise((resolve, reject)=>{
        request({url, json:true}, (error, response)=>{
            if(!response.body.features[0]){
                reject("Can't find location")
                return
            }
            const {center} = response.body.features[0]
            let data = {
                latitude: center[1],
                longitude: center[0],
                location: response.body.features[0].place_name
            }
            resolve(data)
        })
    })  

}

module.exports = geocode