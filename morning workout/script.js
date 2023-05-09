let number = prompt('enter a number');

if (!isNaN(number)) {
  const row = Math.floor(number / 10);
  const rowLetter = String.fromCharCode(65 + row);
  const column = number % 10;
  alert(`Your seat number is: ${rowLetter}${column} `);
  location.reload();
}
