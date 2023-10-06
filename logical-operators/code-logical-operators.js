const myCountry = {
    name : 'Moldova',
    language: 'Romanian',
    population: 3000000,
    island: false
};


const myCountry2 = {
    name : 'Portugal',
    language: 'English',
    population: 3000000,
    island: false
};



const sarahCountry = {
    language: 'English',
    population: 50000000,
    island: false
};

function checkCountry (country) { 
    if (country.language === sarahCountry.language
        && country.population < sarahCountry.population
        && country.island === sarahCountry.island) {
        console.log('You should live in ' + country.name);
    } else {
        console.log(country.name
            + ' does not meet your criteria :(');
    }
}

console.log(sarahCountry.name);

/*checkCountry(myCountry);
checkCountry(myCountry2);
*/
