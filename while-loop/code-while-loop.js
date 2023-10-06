const populations =[1441, 40, 50, 10];
const worldPopulation = 7900;

const percentageOfWorld1 = (population)=>  {
    let percentageResult = (population / worldPopulation) * 100;
    return percentageResult.toFixed(2) + '%';
}

const percentages3=[];

let i=0;

while (i < populations.length) { 
let percentage = percentageOfWorld1(populations[i]);
percentages3.push(percentage);
i++
}

console.log(percentages3);

/*
const percentages2 = [];
for (let i=0; i<populations.length; i++) { 
percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);
*/