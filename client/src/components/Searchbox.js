import React from 'react'

export default class Searchbox extends React.Component{
    
    searchForLocation = (event)=>{
        event.preventDefault()
        const inputValue = event.target.elements.location.value
        console.log(inputValue)
    }

    render(){
        return(
            <div>
               <form className = "locationForm" onSubmit = {this.searchForLocation}>
                   <input className = "textBox" type = "text" name = "location"></input>
                   <button className = "button">Search</button>
               </form>
            </div>
        )
    }
}