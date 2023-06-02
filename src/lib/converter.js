export default function convertTo(scaleName, temperature) {
  const value = parseFloat(temperature);
  let returnStr = '';
  if (Number.isNaN(value)) {
    return '';
  }
  if (scaleName === 'f') {
    const farhenheit = (value * 9) / 5 + 32;
    const rounded = Math.round(farhenheit * 1000) / 1000;
    returnStr = rounded.toString();
  } else if (scaleName === 'c') {
    const celcius = ((value - 32) * 5) / 9;
    const rounded = Math.round(celcius * 1000) / 1000;
    returnStr = rounded.toString();
  }
  console.log(returnStr);
  return returnStr;
}
