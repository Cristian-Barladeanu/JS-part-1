const myCountry = {
    name : 'Moldova',
    language: 'Romanian',
    population: 3000000,
    island: false
};


const sarahCountry = {
    langauge: 'English',
    population: 50000000,
    island: true
};

if (myCountry.language === sarahCountry.langauge
    && myCountry.population < sarahCountry.population
    && myCountry.island === sarahCountry.island) {
    console.log('You should live in ' + myCountry.name);
} else {
    console.log(myCountry.name
        + ' does not meet your criteria :(');
}