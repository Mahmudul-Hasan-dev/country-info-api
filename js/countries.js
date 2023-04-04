const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {
    // console.log(countries)
    const countryContainer = document.getElementById('all-countries');
    countries.forEach(country => {
        // console.log(country.cca2)
        const countryDiv = document.createElement('div')
        countryDiv.classList = "country"
        countryDiv.innerHTML = `<h3>Name :${country.name.common}</h3>
        <h5>Capital: ${country.capital ? country.capital[0] : "no capital"}</h5>
        <h5>Continents :${country.continents}</h5>
        <h1>Flags :${country.flag}</h1>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `

        countryContainer.appendChild(countryDiv)

    });
}

const loadCountryDetails = (code) => {
    // console.log(code)
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => showcountryDetails(data[0]))
}

const showcountryDetails = (country) => {
    // console.log(country)
    const countryDetailContainer = document.getElementById('country-detail');
    countryDetailContainer.innerHTML = `
    <h3>name-${country.name.common}</h3>
    <img src="${country.flags.png}" alt="">
    `
    // console.log(countryDetailContainer)
}
