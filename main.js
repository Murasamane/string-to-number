const numbers = `599113599`;

// internalization method
const internationalize = new Intl.NumberFormat('ka-GE').format(numbers);
console.log(internationalize);

// custom algorithm
const modernizeNum = (number) =>
  number.length !== 9 || !/^-?\d+$/.test(number)
    ? `Please enter exactly nine digits ${number.length}`
    : `${number.slice(0, 3)}-${number.slice(3, 5)}-${number.slice(
        5,
        7
      )}-${number.slice(7, 9)}`;

console.log(modernizeNum(numbers));
