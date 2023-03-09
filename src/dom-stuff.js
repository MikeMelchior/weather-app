import * as index from './index'

const createClassedElement = (type, classes) => {
    let element = document.createElement(type);
    element.className = classes;
    return element;
}


let main = createClassedElement('div', 'main');
document.body.append(main);

let formDiv = createClassedElement('div', 'form-div');

let form = document.createElement('form');
let searchBar = document.createElement('input');
    searchBar.placeholder = 'enter city';
    searchBar.maxLength = 20;
let searchButton = document.createElement('button');
    searchButton.textContent = 'Search'

formDiv.appendChild(form)
form.append(searchBar, searchButton);
main.append(formDiv);


let searchDropdown = createClassedElement('ul', 'search-dropdown');
// let testOption = createClassedElement('li', 'option option-one');
//     testOption.textContent = 'one'
// let testOptionTwo = createClassedElement('li', 'option option-two');
//     testOptionTwo.textContent = 'two'
// searchDropdown.append(testOption, testOptionTwo)
main.appendChild(searchDropdown);


    // example dom insert
let div = document.createElement('div');
formDiv.after(div)


const createNewSearchDropdown = () => {
    document.querySelector('.search-dropdown').remove();
    let element = createClassedElement('ul', 'search-dropdown');
    formDiv.after(element);
}

const createListItem = (name, state, hiddenInfo) => {
    let element = createClassedElement('li', 'search-item')
    let cityName = createClassedElement('p', 'city-name');
        cityName.textContent = name;
    let stateName = createClassedElement('p', 'state');
        stateName.textContent = state;
    //
    // add lat/long info for API weather call and hide it w css;
    //
    let hidden = createClassedElement('span', 'hidden');
    hidden.textContent = hiddenInfo;
    //
    //
    //
    element.append(cityName, stateName)
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



searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    createNewSearchDropdown();
    populateSearchDropdown();
    searchBar.value = '';
})

