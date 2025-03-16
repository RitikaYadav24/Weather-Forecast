const info = document.querySelector("#center")
let describe
var search = document.querySelector(".search")
var srch_btn = document.querySelector(".srch_btn")
var bgcImg = document.querySelector("#main")
let date = new Date
let timing = date.toLocaleTimeString()

let today = new Date
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
let dayindex = today.getDay()



function weather_info(loc) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=05d2d5d64f3f3b72c4c6cc8de52652c4`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            data.weather.forEach((item) => {
                describe = item.main
                bgc_change()
            })
            
            info.innerHTML = `<div class="center">
            <div class="left">
                <div class="up">
                    <div class="temp">
                        <span>${Math.round(data.main.temp-273.15)}&degC</span>
                        <p>${describe}</p>
                    </div>
                    <div class="hi-low">
                        <p class="high">Max-temp: ${Math.round(data.main.temp_max-273.15)}&degC</p>
                        <p class="low">Min-temp:  ${Math.round(data.main.temp_min-273.15)}&degC</p>
                    </div>
                </div>
                <div class="down">
                    <div class="location">
                        <h2 class="city"><i class="ri-map-pin-line"></i> ${search.value}</h2>
                        <h4 class="day">${days[dayindex]}</h4>
                        <h5 class="time">${timing}</h5>
                        <div id="longitude">
                            <div class="long">
                                <h6>Longitute: ${data.coord.lon}</h6>
                            </div>
                            <div class="lat">
                                <h6>Latitude: ${data.coord.lat}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="details">
                    <h4>Pressure: ${data.main.pressure}hPa</h4>
                    <h4>Humidity: ${data.main.humidity}%<h4>
                    <h4>Visibilty: ${data.visibility}m</h4>
                    <h4>Wind Speed: ${data.wind.speed}m/s</h4>
                    <h4>Wind Deg: ${data.wind.deg}&deg</h4>
                </div>
            </div>
        </div>`
        })
        .catch((error) => console.log("ERORRRR: ", error))
        
}

srch_btn.addEventListener("click", ()=> {    
    weather_info(search.value)
})

document.addEventListener("DOMContentLoaded",()=>{
    weather_info("Dhanbad")
})


function bgc_change(){
    if(describe == "Snow"){
        bgcImg.style.backgroundImage = "url('./snowy.jpg')";
    }
    else if(describe == "Clouds"){
        bgcImg.style.backgroundImage = "url('./cloudy.jpg')";
    }
    else if(describe == "Rain"){
        bgcImg.style.backgroundImage = "url('./rainy.jpg')";
    }
    else if(describe == "Mist"){
        bgcImg.style.backgroundImage = "url('./mist.jpg')";
    }
    else if(describe == "Clear"){
        bgcImg.style.backgroundImage = "url('./sunshine.jpg')";
    }
}