const neighbourCountries = ['Romania', 'Ucraine', 'Bulgaria', 'Greece'];

const neighbours = neighbourCountries.filter(country => country !== 'Ucraine');

neighbours.push('Utopia');

neighbours.pop();


const europeanCountryIncluded = (country) => {
    let checkCountry = neighbours.find(allCountries => allCountries === country);
    if (checkCountry === undefined) {
        console.log('Probably not a central European country :D');
    }
};

europeanCountryIncluded('Germany');

const changeCountryName = (country) => {
    for (let i = 0; i < neighbours.length; i++) {
        if (neighbours[i] === country) { 
            neighbours[i] = 'Republic of ' + neighbours[i];
        }
    }
console.log(neighbours);
}

changeCountryName('Romania');









//console.log(neighbours);

