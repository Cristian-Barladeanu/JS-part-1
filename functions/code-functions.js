function describeCountry(country, population, capitalCity) {
    return country + ' has ' + population + ' people and its capital city is '
        + capitalCity; }

const moldova = describeCountry ('Moldova', '3 million', 'Chisinau');
const france = describeCountry ('France', '50 million', 'Paris');
const germany = describeCountry ('Germany', '40 million', 'Berlin');

console.log(moldova);
console.log(france);
console.log(germany);