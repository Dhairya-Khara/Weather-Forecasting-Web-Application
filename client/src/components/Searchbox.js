import React from 'react'

import { connect } from 'react-redux'
import { changeWeahterData } from '../actions'

class Searchbox extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            error: ""
        }

        fetch('http://localhost:8080/weather?address=Toronto').then((response) => {
            // console.log(JSON.parse(response))
            return response.json()
        }).then((response) => {
            this.props.dispatch(changeWeahterData(response))

            if (response.error) {
                this.setState(() => {
                    return (
                        { error: true }
                    )
                })

            }
            else {
                this.props.dispatch(changeWeahterData(response))
                this.setState(() => {
                    return (
                        { error: false }
                    )
                })
            }
        })
    }

    searchForLocation = (event) => {
        event.preventDefault()
        const inputValue = event.target.elements.location.value
        //make call to api
        fetch('http://localhost:8080/weather?address=' + encodeURIComponent(inputValue)).then((response) => {
            // console.log(JSON.parse(response))
            return response.json()
        }).then((response) => {
            this.props.dispatch(changeWeahterData(response))

            if (response.error) {
                this.setState(() => {
                    return (
                        { error: true }
                    )
                })

            }
            else {
                this.props.dispatch(changeWeahterData(response))
                this.setState(() => {
                    return (
                        { error: false }
                    )
                })
            }
        })
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="searchBar">
                        <form onSubmit={this.searchForLocation}>
                            <input id="searchQueryInput" type="text" name="location" placeholder="Enter Location" autoComplete="off" />
                            <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit" />
                        </form>
                    </div>
                </div>
                {this.state.error ? <h1 className='error_text'>Can't Find Location</h1> : ""}
            </div>
        )
    }
}

// const mapStateToProps = ()=>{
//     re
// }

export default connect()(Searchbox)