const numberOfCountries = document.getElementById("numberOfCountries");

numberOfCountries.innerText = `Total number of countries ${countries_data.length}`;

const countriesName = [];

countries_data.map((countriesArray) => {
    countriesName.push(countriesArray.name.toLowerCase());
})

function startingSearchFunction() {
    const countryCardContainer = document.getElementById("countryCardContainer");
    countryCardContainer.innerHTML = "";

    const inputValue2 = document.getElementById("countryName");
    inputValue2.setAttribute("oninput", "startingSearchFunction()");

    const inputValue = document.getElementById("countryName").value;

    const numberOfSearchResults = document.getElementById("numberOfSearchResults");

    if (inputValue == "") {
        numberOfSearchResults.innerHTML = " ";
        return;
    } else {
        const matchedCountries = [];

        countriesName.map((e) => {
            const hello = e.startsWith(inputValue.toLowerCase());

            if (hello) {
                matchedCountries.push(e);
                countryCardContainer.innerHTML += `
                <div class="card">
                   <p>${e}</p>
                </div>`;
            }
           
            numberOfSearchResults.innerText = `Number of countries starting with ${inputValue} are ${matchedCountries.length}`;
        })
    }
}

function searchAnyWordFunction() {
    const countryCardContainer = document.getElementById("countryCardContainer");
    countryCardContainer.innerHTML = "";


    const inputValue2 = document.getElementById("countryName");
    inputValue2.setAttribute("oninput", "searchAnyWordFunction()");

    const inputValue = document.getElementById("countryName").value;
    const numberOfSearchResults = document.getElementById("numberOfSearchResults");

    if (inputValue == "") {
        numberOfSearchResults.innerHTML = " "; 
         return;
    } else {
        const matchedCountries = [];

        countriesName.map((e) => {
            const hello = e.includes(inputValue.toLowerCase());

            if (hello) {
                matchedCountries.push(e);
                countryCardContainer.innerHTML += `
            <div class="card">
               <p>${e}</p>
            </div>`;
            }
            numberOfSearchResults.innerText = `Number of countries includes with ${inputValue} are ${matchedCountries.length}`;
        })
    }
}