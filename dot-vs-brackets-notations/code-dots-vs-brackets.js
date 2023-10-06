const myCountry = { 
    country: 'Finland',  
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: 3
} ;

console.log(myCountry.country + ' has ' + myCountry.population + ' million ' + myCountry.language
+ ' speaking people, ' + myCountry.neighbours + ' countries and a capital called ' + 
myCountry.capital + '.');

myCountry.population +=2;

myCountry['population'] -=2;
console.log(myCountry.population);

