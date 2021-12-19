import React from 'react'
import { connect } from 'react-redux'



class FutureCard extends React.Component {
    get_card = () => {
        if(this.props.day2Day === ""){
            return(
                <div></div>
            )
        }
        if (this.props.props === "2") {
            return (
                <div>
                    <div className='future_card_desktop'>
                        <p>{this.props.day2Day}</p>
                        <p>{Math.round(parseFloat(this.props.day2Max))}°/{Math.round(parseFloat(this.props.day2Min))}°</p>
                        <p>Precipitation: {+(this.props.day2PrecipProbability * 100).toFixed(2)}%</p>
                        <img alt = "" src={"http://openweathermap.org/img/wn/" + this.props.day2Icon + "@2x.png"}></img>
                        <p>{this.props.day2Description}</p>
                    </div>

                    <div className='future_card_mobile'>
                        <p>{this.props.day2Day.substring(0, 3)}</p>
                        <p>{Math.round(parseFloat(this.props.day2Max))}°/{Math.round(parseFloat(this.props.day2Min))}°</p>
                        <img alt = "" src={"http://openweathermap.org/img/wn/" + this.props.day2Icon + ".png"}></img>
                        <p>{this.props.day2Description}</p>
                    </div>
                </div>
            )
        }
        else if (this.props.props === "3") {
            return (
                <div>
                    <div className='future_card_desktop'>
                        <p>{this.props.day3Day}</p>
                        <p>{Math.round(parseFloat(this.props.day3Max))}°/{Math.round(parseFloat(this.props.day3Min))}°</p>
                        <p>Precipitation: {+(this.props.day3PrecipProbability * 100).toFixed(2)}%</p>
                        <img alt = "" src={"http://openweathermap.org/img/wn/" + this.props.day3Icon + "@2x.png"}></img>
                        <p>{this.props.day3Description}</p>
                    </div>

                    <div className='future_card_mobile'>
                        <p>{this.props.day3Day.substring(0, 3)}</p>
                        <p>{Math.round(parseFloat(this.props.day3Max))}°/{Math.round(parseFloat(this.props.day3Min))}°</p>
                        <img alt = "" src={"http://openweathermap.org/img/wn/" + this.props.day3Icon + ".png"}></img>
                        <p>{this.props.day3Description}</p>
                    </div>
                </div>
            )
        }
        else if (this.props.props === "4") {
            return (
                <div>
                    <div className='future_card_desktop'>
                        <p>{this.props.day4Day}</p>
                        <p>{Math.round(parseFloat(this.props.day4Max))}°/{Math.round(parseFloat(this.props.day4Min))}°</p>
                        <p>Precipitation: {+(this.props.day4PrecipProbability * 100).toFixed(2)}%</p>
                        <img alt = "" src={"http://openweathermap.org/img/wn/" + this.props.day4Icon + "@2x.png"}></img>
                        <p>{this.props.day4Description}</p>
                    </div>

                    <div className='future_card_mobile'>
                        <p>{this.props.day4Day.substring(0, 3)}</p>
                        <p>{Math.round(parseFloat(this.props.day4Max))}°/{Math.round(parseFloat(this.props.day4Min))}°</p>
                        <img alt = "" src={"http://openweathermap.org/img/wn/" + this.props.day4Icon + ".png"}></img>
                        <p>{this.props.day4Description}</p>
                    </div>
                </div>
            )
        }

        else if (this.props.props === "5") {
            return (
                <div>
                    <div className='future_card_desktop'>
                        <p>{this.props.day5Day}</p>
                        <p>{Math.round(parseFloat(this.props.day5Max))}°/{Math.round(parseFloat(this.props.day5Min))}°</p>
                        <p>Precipitation: {+(this.props.day5PrecipProbability * 100).toFixed(2)}%</p>
                        <img alt = "" src={"http://openweathermap.org/img/wn/" + this.props.day5Icon + "@2x.png"}></img>
                        <p>{this.props.day5Description}</p>
                    </div>

                    <div className='future_card_mobile'>
                        <p>{this.props.day5Day.substring(0, 3)}</p>
                        <p>{Math.round(parseFloat(this.props.day5Max))}°/{Math.round(parseFloat(this.props.day5Min))}°</p>
                        <img alt = "" src={"http://openweathermap.org/img/wn/" + this.props.day5Icon + ".png"}></img>
                        <p>{this.props.day5Description}</p>
                    </div>
                </div>
            )
        }

        else if (this.props.props === "6") {
            return (
                <div>
                    <div className='future_card_desktop'>
                        <p>{this.props.day6Day}</p>
                        <p>{Math.round(parseFloat(this.props.day6Max))}°/{Math.round(parseFloat(this.props.day6Min))}°</p>
                        <p>Precipitation: {+(this.props.day6PrecipProbability * 100).toFixed(2)}%</p>
                        <img alt = "" src={"http://openweathermap.org/img/wn/" + this.props.day6Icon + "@2x.png"}></img>
                        <p>{this.props.day6Description}</p>
                    </div>

                    <div className='future_card_mobile'>
                        <p>{this.props.day6Day.substring(0, 3)}</p>
                        <p>{Math.round(parseFloat(this.props.day6Max))}°/{Math.round(parseFloat(this.props.day6Min))}°</p>
                        <img alt = "" src={"http://openweathermap.org/img/wn/" + this.props.day6Icon + ".png"}></img>
                        <p>{this.props.day6Description}</p>
                    </div>
                </div>
            )
        }

        else if (this.props.props === "7") {
            return (
                <div>
                    <div className='future_card_desktop'>
                        <p>{this.props.day7Day}</p>
                        <p>{Math.round(parseFloat(this.props.day7Max))}°/{Math.round(parseFloat(this.props.day7Min))}°</p>
                        <p>Precipitation: {+(this.props.day7PrecipProbability * 100).toFixed(2)}%</p>
                        <img alt = "" src={"http://openweathermap.org/img/wn/" + this.props.day7Icon + "@2x.png"}></img>
                        <p>{this.props.day7Description}</p>
                    </div>

                    <div className='future_card_mobile'>
                        <p>{this.props.day7Day.substring(0, 3)}</p>
                        <p>{Math.round(parseFloat(this.props.day7Max))}°/{Math.round(parseFloat(this.props.day7Min))}°</p>
                        <img alt = "" src={"http://openweathermap.org/img/wn/" + this.props.day7Icon + ".png"}></img>
                        <p>{this.props.day7Description}</p>
                    </div>
                </div>
            )
        }

    }

    render() {
        return (
            this.get_card()
        )
    }
}

const mapStateToProps = (state) => {
    return {
        day2Max: state.day2Max,
        day2Min: state.day2Min,
        day2FeelsLikeMax: state.day2FeelsLikeMax,
        day2FeelsLikeMin: state.day2FeelsLikeMin,
        day2Description: state.day2Description,
        day2PrecipProbability: state.day2PrecipProbability,
        day2Icon: state.day2Icon,
        day2Day: state.day2Day,

        day3Max: state.day3Max,
        day3Min: state.day3Min,
        day3FeelsLikeMax: state.day3FeelsLikeMax,
        day3FeelsLikeMin: state.day3FeelsLikeMin,
        day3Description: state.day3Description,
        day3PrecipProbability: state.day3PrecipProbability,
        day3Icon: state.day3Icon,
        day3Day: state.day3Day,

        day4Max: state.day4Max,
        day4Min: state.day4Min,
        day4FeelsLikeMax: state.day4FeelsLikeMax,
        day4FeelsLikeMin: state.day4FeelsLikeMin,
        day4Description: state.day4Description,
        day4PrecipProbability: state.day4PrecipProbability,
        day4Icon: state.day4Icon,
        day4Day: state.day4Day,

        day5Max: state.day4Max,
        day5Min: state.day5Min,
        day5FeelsLikeMax: state.day5FeelsLikeMax,
        day5FeelsLikeMin: state.day5FeelsLikeMin,
        day5Description: state.day5Description,
        day5PrecipProbability: state.day5PrecipProbability,
        day5Icon: state.day5Icon,
        day5Day: state.day5Day,

        day6Max: state.day6Max,
        day6Min: state.day6Min,
        day6FeelsLikeMax: state.day6FeelsLikeMax,
        day6FeelsLikeMin: state.day6FeelsLikeMin,
        day6Description: state.day6Description,
        day6PrecipProbability: state.day6PrecipProbability,
        day6Icon: state.day6Icon,
        day6Day: state.day6Day,

        day7Max: state.day7Max,
        day7Min: state.day7Min,
        day7FeelsLikeMax: state.day7FeelsLikeMax,
        day7FeelsLikeMin: state.day7FeelsLikeMin,
        day7Description: state.day7Description,
        day7PrecipProbability: state.day7PrecipProbability,
        day7Icon: state.day7Icon,
        day7Day: state.day7Day,
    }
}

export default connect(mapStateToProps)(FutureCard)