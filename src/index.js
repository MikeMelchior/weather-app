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
        let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=6&appid=e94982487f044be7ccc7b3ba2a88955d`, 
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


const getIcon = (code) => {
    let element = new Image();
    element.src = `https://openweathermap.org/img/wn/${code}@2x.png`;
    return element;
}

const twelveHour = (time) => {
    let timeArr;
    if (!time) {
        let newTime = new Date().toString().split(' ').slice(4, 5).join('');
        timeArr = newTime.split(':').slice(0, 2);
    } else {
        let newTime = new Date(time*1000).toString().split(' ').slice(4, 5).join('');
        timeArr = newTime.split(':').slice(0, 2)
    }
    
    let hour = timeArr[0];
    let ampm = 'AM';

    hour = parseFloat(hour);
    if ( hour > 12) {
        ampm = 'PM'
        hour -= 12;
        timeArr[0] = hour;
        return timeArr.join(':').concat(` ${ampm}`);
    }
    timeArr[0] = hour;
    return timeArr.join(':').concat(` ${ampm}`);
}

const capitalizeWords = (words) => {
    let wordArr = words.split(' ')
    let result = [];
    wordArr.forEach(word => {
        let letters = word.split('');
        letters[0] = letters[0].toUpperCase();
        result.push(letters.join(''));
    })
    return result.join(' ')
}

export {getCities, getWeatherByCoords, twelveHour, getIcon, capitalizeWords}