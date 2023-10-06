const worldPopulation = 7900;

function percentageOfWorld1(population) {
    let percentageResult = (population / worldPopulation) * 100;
    return percentageResult.toFixed(2) + '%';
}

const china = percentageOfWorld1(1441);
const germany = percentageOfWorld1(40);
const france = percentageOfWorld1(50);

console.log(china);
console.log(germany);
console.log(france);

const percentageOfWorld2 = function (population) {
    let percentageResult = (population / worldPopulation) * 100;
    return percentageResult.toFixed(2) + '%';
}

const romania = percentageOfWorld2(10);
const mexico = percentageOfWorld2(80);
const uk = percentageOfWorld2(45);

console.log(romania);
console.log(mexico);
console.log(uk);








