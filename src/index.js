import './styles.css';

    // OpenWeather API
// Your API key is e94982487f044be7ccc7b3ba2a88955d;
//
    // Example of API call for weather from city name :
// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=e94982487f044be7ccc7b3ba2a88955d
//

    // Example of API call for city coords :
//http://api.openweathermap.org/geo/1.0/direct?q=Oshawa&limit=5&appid=e94982487f044be7ccc7b3ba2a88955d
//

    // Example of API call for weather from coords (lat/lon) :
//https://api.openweathermap.org/data/2.5/weather?lat={43.89}&lon={-78.86}&appid=e94982487f044be7ccc7b3ba2a88955d
//



















async function getCities(city) {
    try {
        let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=e94982487f044be7ccc7b3ba2a88955d`, 
        {mode: 'cors'});
        let data = await response.json();
        return data
    } catch (e) {
        console.log(e)
    }  
}


async function test() {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.89&lon=-78.86&units=metric&appid=e94982487f044be7ccc7b3ba2a88955d`, 
        {mode: 'cors'})
    let data = await response.json();

    if (response.status == 200) {
        // console.log(data);
        //document.querySelector('.a').textContent = `${data.name} Feels like : ${data.main.feels_like} degrees`;
        return {
            city: data.name,
            temp: data.main.temp,
            feelsLike: data.main.feels_like,
            description: data.weather[0].description,
            windSpeed: data.wind.speed,
        } 
    } else {
        throw new Error('No such data');
    }
}


export {getCities, test}