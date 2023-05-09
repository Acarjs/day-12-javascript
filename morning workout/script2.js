let number = NaN;
while (isNaN(number) || number < 1 || number > 59) {
  const input = prompt('Please enter your seat number (1-59)');
  number = +input;
  if (input === null) {
    alert('Please enter a valid seat number (1-59)');
  }
  if (number < 1 || number > 59) {
    alert('Please enter a valid seat number (1-59)');
  }
}

if (!isNaN(number)) {
  const row = Math.floor(number / 10);
  const rowLetter = String.fromCharCode(65 + row);
  const column = number % 10;
  alert(`Your seat number is: ${rowLetter}${column} `);
}
