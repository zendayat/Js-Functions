// THIS IS A PRACTICE ON HOW THE map() function works

const Numbers = [1,2,3,4,5];
const squares = Numbers.map(square);

console.log(squares);


function square(element) {
    return Math.pow(element, 2);
}