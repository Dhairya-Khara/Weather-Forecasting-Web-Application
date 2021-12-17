import React from "react";
import FutureCard from "./FutureCard";

class FutureForecast extends React.Component{
    render(){
        return(
            <div className="future_container">
                <FutureCard key = "2" props = "2"/>
                <FutureCard key = "3" props = "3"/>
                <FutureCard key = "4" props = "4"/>
                <FutureCard key = "5" props = "5"/>
                <FutureCard key = "6" props = "6"/>
                <FutureCard key = "7" props = "7"/>
            </div>
        )
    }
}

export default FutureForecast