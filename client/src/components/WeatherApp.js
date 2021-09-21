import React from 'react'
import LocationSummary from './LocationSummary'
import Searchbox from './Searchbox'

export default class WeatherApp extends React.Component{
    render(){
        return(
            <div>
                <Searchbox/>
                {/* <LocationSummary/> */}
            </div>
        )
    }
}