const number = document.getElementById('number');

const sameAreaCode = false;
let areaCode = '';

if (!sameAreaCode) {
  areaCode = '(123) ';
}

const sameCountry = false;
let countryCode = '';

if (!sameCountry) {
  countryCode = '(1)';
}

number.innerHTML = `${countryCode}${areaCode}456-7890`;
