const number = document.getElementById('number');

const sameAreaCode = false;
let areaCode = '';

if (!sameAreaCode) {
  areaCode = '(123) ';
}

number.innerHTML = `${areaCode}456-7890`;
