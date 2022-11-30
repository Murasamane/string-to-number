const numbers = `599113599`;

// internalization method
const internationalize = new Intl.NumberFormat('ka-GE').format(numbers);
console.log(internationalize);

// custom algorithm
const modernizeNum = (number) =>
  number.length !== 9 || !/^-?\d+$/.test(number)
    ? `Please enter exactly nine digits ${number.length}`
    : `${number.substring(0, 3)}-${number.substring(3, 5)}-${number.substring(
        5,
        7
      )}-${number.substring(7, 9)}`;

console.log(modernizeNum(numbers));
