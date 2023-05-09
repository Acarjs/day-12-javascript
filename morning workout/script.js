const number = +prompt('Seat number?');

const row = Math.floor(number / 10);
const rowLetter = String.fromCharCode(65 + row);

const column = number % 10;

console.log(rowLetter + column);
