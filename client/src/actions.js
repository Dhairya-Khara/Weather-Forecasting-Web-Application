export const changeWeahterData = (data) => {
    return {
        type: "CHANGE_WEATHER_DATA",

        location: data.location,
        currentTemp: data.currentTemp,
        currentFeels_like: data.currentFeels_like,
        currentDescription: data.currentDescription,
        currentIcon: data.currentIcon,
        currentMax: data.currentMax,
        currentMin: data.currentMin,
        currentPrecipProbability: data.currentPrecipProbability,
    }
}