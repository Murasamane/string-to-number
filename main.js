const tel_num = `599113599`;

// internalization method
const internationalize = new Intl.NumberFormat("ka-GE").format(tel_num);
console.log(internationalize);

// custom algorithm
const modernizeNum = (number) =>
  number.length !== 9 || !/^-?\d+$/.test(number)
    ? `Please enter exactly nine digits ${number.length}`
    : `${number.slice(0, 3)}-${number.slice(3, 5)}-${number.slice(
        5,
        7
      )}-${number.slice(7, 9)}`;

console.log(modernizeNum(tel_num));

/**
 * my solution in that case
 * @param {string} num
 * @param {string} cCode
 * @returns
 */
const modifyTelephoneNumber = (num, cCode) => {
  if (num.length !== 9 || !/^-?\d+$/.test(num) || !cCode) {
    return "Number does not matchs";
  }

  // creating mobile number pattern here
  let pattern = `(+${cCode}) xxx-xx-xx-xx`;

  // replace function will replace x -> curr num in every iteration
  for (let i of num) {
    pattern = pattern.replace("x", i);
  }

  // function returns num
  return pattern;
};

const res = modifyTelephoneNumber(tel_num, "995");

console.log("my solution =>", res);
