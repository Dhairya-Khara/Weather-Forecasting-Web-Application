import React from 'react'

import LocationSummary  from './LocationSummary'

export default class Searchbox extends React.Component {

    searchForLocation = (event) => {
        event.preventDefault()
        const inputValue = event.target.elements.location.value
        //make call to api
        fetch('http://localhost:8080/weather?address='+ encodeURIComponent(inputValue)).then((response)=>{
            // console.log(JSON.parse(response))
            return response.json()
        }).then((response)=>{
            console.log(response)
            return(
                <LocationSummary/>
            )
        })
    }

    render() {
        return (
            <div>
                {/* <form className = "locationForm" onSubmit = {this.searchForLocation}>
                   <input className = "textBox" type = "text" name = "location"></input>
                   <button className = "button">Search</button>
               </form> */}
                <div className="wrapper">
                    <div className="searchBar">
                        <form onSubmit = {this.searchForLocation}>
                            <input id="searchQueryInput" type="text" name="location" placeholder="Search" />
                            <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}