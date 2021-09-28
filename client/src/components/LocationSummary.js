import React from 'react'
import { connect } from 'react-redux'

class LocationSummary extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <h1>Location</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentTemp: state.currentTemp,
        currentFeels_like: state.currentFeels_like,
        currentDescription: state.currentDescription,
        currentIcon: state.currentIcon,
        currentMax: state.currentMax,
        currentMin: state.currentMin,
        currentPrecipProbability: state.currentPrecipProbability,
    }
}

export default connect(mapStateToProps)(LocationSummary)