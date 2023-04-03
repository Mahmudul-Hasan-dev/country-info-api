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
        console.log(country)
        const countryDiv = document.createElement('div')
        countryDiv.innerHTML = `<h3>Name :${country.name.common}</h3>
        <h4>Capital: ${country.capital ? country.capital[0] : "no capital"}</h4>`

        countryContainer.appendChild(countryDiv)

    });
}
