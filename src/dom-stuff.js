import * as index from './index'

    // function to create element and add classes in  one line
const createClassedElement = (type, classes) => {
    let element = document.createElement(type);
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
        // fill page with data if clicked and empty dropdown
    element.addEventListener('click', (e) => {
        //
        //
        // check if item is only item in dropdown, if only item them search weather based by 
        // name so that api doesn't confuse coordinates with a different city?
        //
        //
        let coords = hiddenInfo.split(', ');
        let lat = coords[0]
        let lon = coords[1]
        populatePage(lat, lon)
        emptyDropdownMenu();
    })
    return element
}

const createWeatherCard = () => {
    let element = createClassedElement('div', 'weather-card')

    let mainInfo = createClassedElement('div', 'main-info');
        let dateTime = createClassedElement('p', 'date-time');
        let cityName = createClassedElement('p', 'city-name');
        let mainTemp = createClassedElement('p', 'main-temp');
        let feelsLike = createClassedElement('p', 'feels-like');

    mainInfo.append(dateTime, cityName, mainTemp, feelsLike);

    let additionalInfo = createClassedElement('div', 'additional-info');
        let sunriseContainer = createClassedElement('div', 'sunrise-container');
            let sunrise = createClassedElement('p');
                sunrise.textContent = 'Sunrise'
            let riseTime = createClassedElement('p');
            sunriseContainer.append(sunrise, riseTime);

        let sunsetContainer = createClassedElement('div', 'sunset-container');
            let sunset = createClassedElement('p');
                sunset.textContent = 'Sunset'
            let sunsetTime = createClassedElement('p');
            sunsetContainer.append(sunset, sunsetTime);

        let descriptionContainer = createClassedElement('div', 'description-container');
            let description = createClassedElement('p');
            let descriptionImg = createClassedElement('div');
            descriptionContainer.append(description, descriptionImg);

        let humidityContainer = createClassedElement('div', 'humidity-container');
            let humidity = createClassedElement('p');
                humidity.textContent = 'Humidity'
            let humidityValue = createClassedElement('p');
            humidityContainer.append(humidity, humidityValue);

        let windContainer = createClassedElement('div', 'wind-container');
            let wind = createClassedElement('p');
                wind.textContent = 'Wind'
            let windValue = createClassedElement('p');
            windContainer.append(wind, windValue);

    additionalInfo.append(sunriseContainer, sunsetContainer, descriptionContainer, humidityContainer, windContainer)

    element.append(mainInfo, additionalInfo);
    main.appendChild(element);
}

createWeatherCard();


async function populateSearchDropdown() {
    let dropdown = document.querySelector('.search-dropdown');
    let results = await index.getCities(searchBar.value)
        .then(results => {
            results.forEach(city => {
                let name = city.name;
                let state = city.state;
                let lat = city.lat;
                let lon = city.lon;
                let item = createListItem(name, state, `${lat}, ${lon}`)
                document.querySelector('.search-dropdown').appendChild(item)
            })
        })
}

async function populatePage (lat, lon) {
    let weather = await index.getWeatherByCoords(lat, lon)
    console.log(weather);
}

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    emptyDropdownMenu();
    populateSearchDropdown();
    searchBar.value = '';
})

main.addEventListener('click', (e) => {
    if (e.target == main) {
        emptyDropdownMenu();
    }
})







