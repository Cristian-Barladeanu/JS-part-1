const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: 3,
    describe: function () {
        console.log(this.country + ' has ' + this.population + ' million '
            + this.language + ' speaking people, ' + this.neighbours +
            ' countries and a capital called ' + this.capital + '.')
    },
    checkIsland: function () {
        if (this.neighbours === 0) {
            this.isIsland = true;
        } else {
            this.isIsland = false;
        }
    }
};


myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);