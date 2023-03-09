import './styles.css';

    // OpenWeather API
// Your API key is e94982487f044be7ccc7b3ba2a88955d;
//
    // Example of API call for weather from city name :
// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=e94982487f044be7ccc7b3ba2a88955d
//

    // Example of API call to get city coords :
//http://api.openweathermap.org/geo/1.0/direct?q=Oshawa&limit=5&appid=e94982487f044be7ccc7b3ba2a88955d
//

    // Example of API call for weather from coords (lat/lon) :
//https://api.openweathermap.org/data/2.5/weather?lat=43.89&lon=-78.86&appid=e94982487f044be7ccc7b3ba2a88955d
//



async function getCities(city) {
    if (!city) {
        city = 'toronto'
    }
    try {
        let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=e94982487f044be7ccc7b3ba2a88955d`, 
        {mode: 'cors'});
        let data = await response.json();
        return data;
    } catch (e) {
        console.log(e)
    }  
}


async function getWeatherByCoords(lat, lon) {

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}1&units=metric&appid=e94982487f044be7ccc7b3ba2a88955d`, 
        {mode: 'cors'})
    let data = await response.json();

    if (response.status == 200) {
        return data;
    } else {
        throw new Error('No such data');
    }
}


export {getCities, getWeatherByCoords}