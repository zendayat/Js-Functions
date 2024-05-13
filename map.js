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

//EXAMPLE 3

const Students = ["spongebob", "patrick", "squidward", "sandy"];
const CapitalStudents = Students.map(uppercase);

console.log(CapitalStudents);
function uppercase(element){
    return element.toUpperCase();
}

//example 4

const Dates = ['2024-1-10', '2025-2-20', '2026-3-30'];
const FormattedDates = Dates.map(formatDates);
console.log(FormattedDates)
function formatDates(element){
    const part = element.split('-');
    return `${part[2]}/${part[0]}/${part[1]}`
}