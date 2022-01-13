import React from "react";
import { connect } from 'react-redux'

class CurrentForecast extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="current_container" >
                        <div className="current_image">
                            {this.props.currentIcon !== "" ? <img alt = "" src={"http://openweathermap.org/img/wn/" + this.props.currentIcon + "@2x.png"}></img> : ""}
                        </div>
                        <div className="current_temp">
                            {this.props.currentTemp !== "" ? <h1>{this.props.currentTemp}°</h1> : ""}
                            <p>{this.props.currentDescription}</p>
                        </div>
                    </div>
                    <div className="current_summary_container">
                        <div className={this.props.currentIcon !== "" ? "current_summary_with_bg" : "current_summary_no_bg"}>
                            <div className="max_min_summary">
                                {this.props.currentMax !== "" ? <h2>{this.props.currentMax}°</h2> : ""}
                                {this.props.currentMax !== "" ? <p>High</p> : ""}
                                <br></br>
                                {this.props.currentMin !== "" ? <h2>{this.props.currentMin}°</h2> : ""}
                                {this.props.currentMin !== "" ? <p>Low</p> : ""}
                            </div>


                            <div className="wind-rain_summary">
                                {this.props.currentWindSpeed !== "" ? <h2>{this.props.currentWindSpeed} m/s</h2> : ""}
                                {this.props.currentWindSpeed !== "" ? <p>Wind</p> : ""}
                                <br></br>
                                {this.props.currentPrecipProbability !== "" ? <h2>{(Math.round(this.props.currentPrecipProbability*100))}%</h2> : ""}
                                {this.props.currentPrecipProbability !== "" ? <p>Precipitation</p> : ""}
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentTemp: state.currentTemp,
        currentIcon: state.currentIcon,
        currentDescription: state.currentDescription,
        currentPrecipProbability: state.currentPrecipProbability,
        currentMax: state.currentMax,
        currentMin: state.currentMin,
        currentWindSpeed: state.currentWindSpeed,

    }
}


export default connect(mapStateToProps)(CurrentForecast)