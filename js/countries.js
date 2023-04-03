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
        // console.log(country.languages)
        const countryDiv = document.createElement('div')
        countryDiv.classlist = 'country'
        countryDiv.innerHTML = `<h3>Name :${country.name.common}</h3>
        <h5>Capital: ${country.capital ? country.capital[0] : "no capital"}</h5>
        <h5>Continents :${country.continents}</h5>
        <h5>Flags :${country.flag}</h5>`

        countryContainer.appendChild(countryDiv)

    });
}
