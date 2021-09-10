const getDay = (unix_timestamp) => {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    const day = date.getDay()
    if (day === 0) {
        return "Sunday"
    }
    else if (day ===  1) {
        return "Monday"
    }
    else if (day === 2) {
        return "Tuesday"
    }
    else if (day === 3) {
        return "Wednesday"
    }
    else if (day === 4) {
        return "Thursday"
    }
    else if (day === 5) {
        return "Friday"
    }
    else if (day === 6) {

        return "Saturday"
    }
}


module.exports = getDay








