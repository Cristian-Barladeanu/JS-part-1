const populations =[1441, 40, 50, 10];
const worldPopulation = 7900;

const percentageOfWorld1 = (population)=>  {
    let percentageResult = (population / worldPopulation) * 100;
    return percentageResult.toFixed(2) + '%';
}

const percentages2 = [];

for (let i=0; i<populations.length; i++) { 
percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);