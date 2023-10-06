const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Poland', 'Sweden', 'Ukraine']];

const logCountries = (arrayOfNeighbours) => { 

    for (let i=0; i<arrayOfNeighbours.length; i++) { 
        for (let j=0; j<arrayOfNeighbours[i].length; j++) {
            console.log('Neighbour :' + arrayOfNeighbours[i][j]);
        }
    }
}

logCountries(listOfNeighbours);