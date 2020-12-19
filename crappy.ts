type Combinable = number | string;
type porkLoin = 'as-booger' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: porkLoin
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-booger') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(1, 1, 'as-booger');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-booger');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
