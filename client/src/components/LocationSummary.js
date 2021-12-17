import React from 'react'
import { connect } from 'react-redux'

class LocationSummary extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className = "location_summary">
                <h1 className = "location_name">{this.props.location}</h1>
                <h3 className = "current_date">{this.props.day}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        location: state.location,
        day: state.day
    }
}

export default connect(mapStateToProps)(LocationSummary)