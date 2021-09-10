const weatherForm = document.querySelector('form')
const search = document.querySelector('input')


//currently start
const locationWeb = document.querySelector('#location')
const summaryWeb = document.querySelector('#summary')
const temperatureWeb = document.querySelector('#temperature')
const precipProbabilityWeb = document.querySelector('#precipProbability')
const imageForTemp = document.querySelector('#imageForTemp')
const maxMinFeel = document.querySelector('#maxMinFeel')
//currently end

//daily start
const day2 = document.querySelector('#day2')
const imageForTemp2 = document.querySelector('#imageForTemp2')
const temperatureWeb2 = document.querySelector('#temperature2')
const maxMinFeel2 = document.querySelector('#maxMinFeel2')
const precipProbability2 = document.querySelector('#precipProbability2')

const day3 = document.querySelector('#day3')
const imageForTemp3 = document.querySelector('#imageForTemp3')
const temperatureWeb3 = document.querySelector('#temperature3')
const maxMinFeel3 = document.querySelector('#maxMinFeel3')
const precipProbability3 = document.querySelector('#precipProbability3')

const day4 = document.querySelector('#day4')
const imageForTemp4 = document.querySelector('#imageForTemp4')
const temperatureWeb4 = document.querySelector('#temperature4')
const maxMinFeel4 = document.querySelector('#maxMinFeel4')
const precipProbability4 = document.querySelector('#precipProbability4')


const day5 = document.querySelector('#day5')
const imageForTemp5 = document.querySelector('#imageForTemp5')
const temperatureWeb5 = document.querySelector('#temperature5')
const maxMinFeel5 = document.querySelector('#maxMinFeel5')
const precipProbability5 = document.querySelector('#precipProbability5')

const day6 = document.querySelector('#day6')
const imageForTemp6 = document.querySelector('#imageForTemp6')
const temperatureWeb6 = document.querySelector('#temperature6')
const maxMinFeel6 = document.querySelector('#maxMinFeel6')
const precipProbability6 = document.querySelector('#precipProbability6')

const day7 = document.querySelector('#day7')
const imageForTemp7 = document.querySelector('#imageForTemp7')
const temperatureWeb7 = document.querySelector('#temperature7')
const maxMinFeel7 = document.querySelector('#maxMinFeel7')
const precipProbability7 = document.querySelector('#precipProbability7')


//function to determine icon
const determineIcon = (imageForTemp, imageCode) => {
    imageForTemp.innerHTML = "<img src=http://openweathermap.org/img/wn/" + imageCode + "@2x.png width=100 height=100></img>"
}

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = search.value


    locationWeb.textContent = "Loading..."


    fetch('/weather?address=' + encodeURIComponent(location)).then((response) => {
        response.json().then((data) => {

            if (data.error) {
                //currently
                locationWeb.textContent = data.errorText
                summaryWeb.textContent = ''
                temperatureWeb.textContent = ''
                precipProbabilityWeb.textContent = ''
                maxMinFeel.textContent = ''
                imageForTemp.innerHTML = ''

                //daily
                day2.textContent = ''
                imageForTemp2.innerHTML = ''
                temperatureWeb2.textContent = ''
                maxMinFeel2.textContent = ''
                precipProbability2.textContent = ''

                day3.textContent = ''
                imageForTemp3.innerHTML = ''
                temperatureWeb3.textContent = ''
                maxMinFeel3.textContent = ''
                precipProbability3.textContent = ''

                day4.textContent = ''
                imageForTemp4.innerHTML = ''
                temperatureWeb4.textContent = ''
                maxMinFeel4.textContent = ''
                precipProbability4.textContent = ''

                day5.textContent = ''
                imageForTemp5.innerHTML = ''
                temperatureWeb5.textContent = ''
                maxMinFeel5.textContent = ''
                precipProbability5.textContent = ''

                day6.textContent = ''
                imageForTemp6.innerHTML = ''
                temperatureWeb6.textContent = ''
                maxMinFeel6.textContent = ''
                precipProbability6.textContent = ''

                day7.textContent = ''
                imageForTemp7.innerHTML = ''
                temperatureWeb7.textContent = ''
                maxMinFeel7.textContent = ''
                precipProbability7.textContent = ''

            }
            else {
                //Currently Start
                locationWeb.textContent = data.location

                determineIcon(imageForTemp, data.currentIcon)

                const roundedTemp = Math.round(data.currentTemp) + "°"

                temperatureWeb.textContent = roundedTemp


                const roundedHi = Math.round(data.currentMax)
                const roundedLow = Math.round(data.currentMin)

                const apparentTemperature = data.currentFeels_like
                const roundedApparentTemperature = Math.round(apparentTemperature)



                maxMinFeel.textContent = roundedHi + '°/' + roundedLow + '°. Feels like ' + roundedApparentTemperature + '°'

                summaryWeb.textContent = data.currentDescription

                precipProbabilityWeb.textContent = 'Precipitation: ' + (Math.round(data.currentPrecipProbability * 100)) + '%'
                //Currently End

                //Daily Start
                day2.textContent = data.day2Day + ": " + data.day2Description
                determineIcon(imageForTemp2, data.day2Icon)
                temperatureWeb2.textContent = Math.round(data.day2Max) + "°/" + Math.round(data.day2Min) + '°'
                maxMinFeel2.textContent = 'Feels Like: ' + Math.round(data.day2FeelsLikeMax) + '°/' + Math.round(data.day2FeelsLikeMin) + '°'
                precipProbability2.textContent = 'Precipitation: ' + Math.round(data.day2PrecipProbability * 100) + '%'

                day3.textContent = data.day3Day + ": " + data.day3Description
                determineIcon(imageForTemp3, data.day3Icon)
                temperatureWeb3.textContent = Math.round(data.day3Max) + "°/" + Math.round(data.day3Min) + '°'
                maxMinFeel3.textContent = 'Feels Like: ' + Math.round(data.day3FeelsLikeMax) + '°/' + Math.round(data.day3FeelsLikeMin) + '°'
                precipProbability3.textContent = 'Precipitation: ' + Math.round(data.day3PrecipProbability * 100) + '%'

                day4.textContent = data.day4Day + ": " + data.day4Description
                determineIcon(imageForTemp4, data.day4Icon)
                temperatureWeb4.textContent = Math.round(data.day4Max) + "°/" + Math.round(data.day4Min) + '°'
                maxMinFeel4.textContent = 'Feels Like: ' + Math.round(data.day4FeelsLikeMax) + '°/' + Math.round(data.day4FeelsLikeMin) + '°'
                precipProbability4.textContent = 'Precipitation: ' + Math.round(data.day4PrecipProbability * 100) + '%'

                day5.textContent = data.day5Day + ": " + data.day5Description
                determineIcon(imageForTemp5, data.day5Icon)
                temperatureWeb5.textContent = Math.round(data.day5Max) + "°/" + Math.round(data.day5Min) + '°'
                maxMinFeel5.textContent = 'Feels Like: ' + Math.round(data.day5FeelsLikeMax) + '°/' + Math.round(data.day5FeelsLikeMin) + '°'
                precipProbability5.textContent = 'Precipitation: ' + Math.round(data.day5PrecipProbability * 100) + '%'

                day6.textContent = data.day6Day + ": " + data.day6Description
                determineIcon(imageForTemp6, data.day6Icon)
                temperatureWeb6.textContent = Math.round(data.day6Max) + "°/" + Math.round(data.day6Min) + '°'
                maxMinFeel6.textContent = 'Feels Like: ' + Math.round(data.day6FeelsLikeMax) + '°/' + Math.round(data.day6FeelsLikeMin) + '°'
                precipProbability6.textContent = 'Precipitation: ' + Math.round(data.day6PrecipProbability * 100) + '%'

                day7.textContent = data.day7Day + ": " + data.day7Description
                determineIcon(imageForTemp7, data.day7Icon)
                temperatureWeb7.textContent = Math.round(data.day7Max) + "°/" + Math.round(data.day7Min) + '°'
                maxMinFeel7.textContent = 'Feels Like: ' + Math.round(data.day7FeelsLikeMax) + '°/' + Math.round(data.day7FeelsLikeMin) + '°'
                precipProbability7.textContent = 'Precipitation: ' + Math.round(data.day7PrecipProbability * 100) + '%'
            }

        })
    }).catch(() => {
        locationWeb.textContent = "Can't Find Location!"

    })

})

