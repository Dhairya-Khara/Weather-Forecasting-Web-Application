const defaultState = {
    location: "",

    currentTemp: "",
    currentFeels_like: "",
    currentDescription: "",
    currentIcon: "",
    currentMax: "",
    currentMin: "",
    currentPrecipProbability: "",

    day2Max: "",
    day2Min: "",
    day2FeelsLikeMax: "",
    day2FeelsLikeMin:"",
    day2Description: "",
    day2PrecipProbability: "",
    day2Icon: "",
    day2Day: "",

    day3Max: "",
    day3Min: "",
    day3FeelsLikeMax: "",
    day3FeelsLikeMin: "",
    day3Description: "",
    day3PrecipProbability: "",
    day3Icon: "",
    day3Day: "",

    day4Max: "",
    day4Min: "",
    day4FeelsLikeMax: "",
    day4FeelsLikeMin: "",
    day4Description: "",
    day4PrecipProbability: "",
    day4Icon: "",
    day4Day: "",

    day5Max: "",
    day5Min: "",
    day5FeelsLikeMax: "",
    day5FeelsLikeMin: "",
    day5Description: "",
    day5PrecipProbability: "",
    day5Icon: "",
    day5Day: "",

    day6Max: "",
    day6Min: "",
    day6FeelsLikeMax: "",
    day6FeelsLikeMin: "",
    day6Description: "",
    day6PrecipProbability: "",
    day6Icon: "",
    day6Day: "",

    day7Max: "",
    day7Min: "",
    day7FeelsLikeMax: "",
    day7FeelsLikeMin: "",
    day7Description: "",
    day7PrecipProbability: "",
    day7Icon: "",
    day7Day: "",
}

const reducer = (state = defaultState, action) =>{
    switch(action.type) {
        case "CHANGE_WEATHER_DATA":
            return {
                ...state,
                location: action.location,

                currentTemp: action.currentTemp,
                currentFeels_like: action.currentFeels_like,
                currentDescription: action.currentDescription,
                currentIcon: action.currentIcon,
                currentMax: action.currentMax,
                currentMin: action.currentMin,
                currentPrecipProbability: action.currentPrecipProbability,
            
                day2Max: action.day2Max,
                day2Min: action.day2Min,
                day2FeelsLikeMax: action.day2FeelsLikeMax,
                day2FeelsLikeMin: action.day2FeelsLikeMin,
                day2Description: action.day2Description,
                day2PrecipProbability: action.day2PrecipProbability,
                day2Icon: action.day2Icon,
                day2Day: action.day2Day,
            
                day3Max: action.day3Max,
                day3Min: action.day3Min,
                day3FeelsLikeMax: action.day3FeelsLikeMax,
                day3FeelsLikeMin: action.day3FeelsLikeMin,
                day3Description: action.day3Description,
                day3PrecipProbability: action.day3PrecipProbability,
                day3Icon: action.day3Icon,
                day3Day: action.day3Day,
            
                day4Max: action.day4Max,
                day4Min: action.day4Min,
                day4FeelsLikeMax: action.day4FeelsLikeMax,
                day4FeelsLikeMin: action.day4FeelsLikeMin,
                day4Description: action.day4Description,
                day4PrecipProbability: action.day4PrecipProbability,
                day4Icon: action.day4Icon,
                day4Day: action.day4Day,
            
                day5Max: action.day4Max,
                day5Min: action.day5Min,
                day5FeelsLikeMax: action.day5FeelsLikeMax,
                day5FeelsLikeMin: action.day5FeelsLikeMin,
                day5Description: action.day5Description,
                day5PrecipProbability: action.day5PrecipProbability,
                day5Icon: action.day5Icon,
                day5Day: action.day5Day,
            
                day6Max: action.day6Max,
                day6Min: action.day6Min,
                day6FeelsLikeMax: action.day6FeelsLikeMax,
                day6FeelsLikeMin: action.day6FeelsLikeMin,
                day6Description: action.day6Description,
                day6PrecipProbability: action.day6PrecipProbability,
                day6Icon: action.day6Icon,
                day6Day: action.day6day,
            
                day7Max: action.day7Max,
                day7Min: action.day7Min,
                day7FeelsLikeMax: action.day7FeelsLikeMax,
                day7FeelsLikeMin: action.day7FeelsLikeMin,
                day7Description: action.day7Description,
                day7PrecipProbability: action.day7PrecipProbability,
                day7Icon: action.day7Icon,
                day7Day: action.day7Day,
            } 
        default:
            return state
    }
}

export default reducer