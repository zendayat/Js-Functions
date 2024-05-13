// THIS IS A PRACTICE ON HOW THE map() function works

const Numbers = [1,2,3,4,5];
const squares = Numbers.map(square);

console.log(squares);


function square(element) {
    return Math.pow(element, 2);
}

// EXAMPLE 2
const cubes = Numbers.map(cube);

console.log(cubes);


function cube(element) {
    return Math.pow(element, 3);
}