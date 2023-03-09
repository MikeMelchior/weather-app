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
    formDiv.appendChild(element);
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
    element.addEventListener('click', (e) => {
        let coords = hiddenInfo.split(', ');
        let lat = coords[0]
        let lon = coords[1]
        populatePage(lat, lon)
    })
    return element
}

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



