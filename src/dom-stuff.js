import * as index from './index'

    // function to create element and add classes in  one line
const createClassedElement = (type, classes) => {
    let element = document.createElement(type);
    if (!classes) return element;
    element.className = classes;
    return element;
}

    // main div to wrap all content
let main = createClassedElement('div', 'main');
document.body.append(main);

    //div to wrap form and eventual dropdown menu
let formDiv = createClassedElement('div', 'form-div');

    // create form to search for city
let form = document.createElement('form');
let searchBar = document.createElement('input');
    searchBar.placeholder = 'Enter city';
    searchBar.maxLength = 20;
let searchButton = document.createElement('button');
    searchButton.textContent = 'Search'

    // append form to wrapper and append wrapper to main
formDiv.appendChild(form)
form.append(searchBar, searchButton);
main.append(formDiv);




    // if search dropdown exists empty it
const emptyDropdownMenu = () => {
    if (document.querySelector('.search-dropdown')) {
        document.querySelector('.search-dropdown').remove();
    };
    let element = createClassedElement('ul', 'search-dropdown');
    // formDiv.appendChild(element);
    document.querySelector('form').after(element);
}

    // function to create each list item for search dropdown
const createListItem = (name, state, hiddenInfo) => {
    let element = createClassedElement('li', 'search-item')

    let cityName = createClassedElement('p', 'city-name');
        cityName.textContent = name;
    let stateName = createClassedElement('p', 'state');
        stateName.textContent = state;

    // add lat/long info for API weather call and hide it w css;
    let hidden = createClassedElement('span', 'hidden');
        hidden.textContent = hiddenInfo;
    
    element.append(cityName, stateName, hidden)

        // before returning element, add event listener to 
        // fill page with data if clicked
    element.addEventListener('click', () => {
        let coords = hiddenInfo.split(', ');
        let lat = coords[0]
        let lon = coords[1]
        populateWeatherCard(index.getWeatherByCoords(lat, lon));
    })
    return element
}

const createWeatherCard = () => {
    let element = createClassedElement('div', 'weather-card')
    element.style.opacity = 0;

    let mainInfo = createClassedElement('div', 'main-info');
        let dateTime = createClassedElement('p', 'date-time');
            dateTime.textContent = 'DATETIME'
        let cityName = createClassedElement('p', 'city-name');
            cityName.textContent = 'CITYNAME'
        let mainTemp = createClassedElement('p', 'main-temp');
            mainTemp.textContent = '20°C'
        let feelsLike = createClassedElement('p', 'feels-like');
            feelsLike.textContent = 'FEELS LIKE 22°C'

    mainInfo.append(dateTime, cityName, mainTemp, feelsLike);

    let additionalInfo = createClassedElement('div', 'additional-info');

        let sunriseContainer = createClassedElement('div', 'sunrise-container');
            let sunrise = createClassedElement('p');
                sunrise.textContent = 'Sunrise'
            let riseTime = createClassedElement('p', 'sunrise-time');
            sunriseContainer.append(sunrise, riseTime);

        let sunsetContainer = createClassedElement('div', 'sunset-container');
            let sunset = createClassedElement('p');
                sunset.textContent = 'Sunset'
            let sunsetTime = createClassedElement('p', 'sunset-time');
            sunsetContainer.append(sunset, sunsetTime);

        let descriptionContainer = createClassedElement('div', 'description-container');
            let description = createClassedElement('p', 'description');
            let descriptionImg = createClassedElement('div', 'description-img');
            descriptionContainer.append(description, descriptionImg);

        let humidityContainer = createClassedElement('div', 'humidity-container');
            let humidity = createClassedElement('p');
                humidity.textContent = 'Humidity'
            let humidityValue = createClassedElement('p', 'humidity-value');
            humidityContainer.append(humidity, humidityValue);

        let windContainer = createClassedElement('div', 'wind-container');
            let wind = createClassedElement('p');
                wind.textContent = 'Wind'
            let windValue = createClassedElement('p', 'wind-value');
            windContainer.append(wind, windValue);

    additionalInfo.append(sunriseContainer, sunsetContainer, descriptionContainer, humidityContainer, windContainer)

    element.append(mainInfo, additionalInfo);
    main.appendChild(element);
}

createWeatherCard();


async function populateSearchDropdown() {
    let results = await index.getCities(searchBar.value);
        results.forEach(city => {
            let name = city.name;
            let state = city.state;
            let lat = city.lat;
            let lon = city.lon;
            let item = createListItem(name, state, `${lat}, ${lon}`)
            document.querySelector('.search-dropdown').appendChild(item);
        })

}

async function populateWeatherCard (weather) {
    let weatherData = await weather;

    let weatherCard = document.querySelector('.weather-card');

        // transition card out of view if one already in view
    weatherCard.style.opacity = 0;

        // set timeout so info displays after card transitions out of view
    setTimeout(() => {

            // get date and time to display at top of card
        let day = new Date().toString().split(' ').slice(0, 4).join(' ');
        let dateTime = document.querySelector('.date-time');

            // display date and time
        dateTime.innerHTML = `${day} </br>${index.twelveHour()}`

            // display city name;
        document.querySelector('div p.city-name').textContent = weatherData.name;

            // display temp;
        let temp = Math.round(weatherData.main.temp)
        document.querySelector('.main-temp').textContent = `${temp}°C`;

            // display feels like;
        let feelsLike = Math.round(weatherData.main.feels_like)
        document.querySelector('.feels-like').textContent = `Feels like ${feelsLike}°C`;

            // display sunrise time
        let sunriseTime = index.twelveHour(weatherData.sys.sunrise);
        document.querySelector('.sunrise-time').textContent = `${sunriseTime}`;

            // display sunset time
        let sunsetTime = index.twelveHour(weatherData.sys.sunset);
        document.querySelector('.sunset-time').textContent = `${sunsetTime}`

            // display description
        let description = weatherData.weather[0].description;
        document.querySelector('.description').textContent = index.capitalizeWords(description);

            // if existing img, remove img
        try {
            document.querySelector('.description-img img').remove();
        } catch (e) {
            console.log(e)
        }
            // display corresponding description image;
        let icon = index.getIcon(weatherData.weather[0].icon);
        document.querySelector('.description-img').appendChild(icon);

            // display humidity value
        let humidity = weatherData.main.humidity;
        document.querySelector('.humidity-value').textContent = `${humidity}%`;

            // display wind speed value
        let windSpeed = Math.round(weatherData.wind.speed * 3.6);
        document.querySelector('.wind-value').textContent = `${windSpeed} km/h`

    weatherCard.style.opacity = 1;
    }, 1000);
    
}


// EVENT LISTENERS ------------------------------------------------------------

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
        // create dropdown if doesnt exist, empty if does
    emptyDropdownMenu();
    populateSearchDropdown();
        // empty search bar
    searchBar.value = '';
})

    // allow click off of search menu to hide menu
main.addEventListener('click', (e) => {
    emptyDropdownMenu();
})







