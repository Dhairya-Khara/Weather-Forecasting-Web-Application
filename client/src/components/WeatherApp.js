import React from 'react'
import LocationSummary from './LocationSummary'
import Searchbox from './Searchbox'
import CurrentForecast from './CurrentForecast'
import FutureForecast from './FutureForecast'

export default class WeatherApp extends React.Component{
    render(){
        return(
            <div>
                <Searchbox/>
                <LocationSummary/>
                <CurrentForecast/>
                <br></br>
                <FutureForecast/>
            </div>
        )
    }
}   