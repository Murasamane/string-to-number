const numbers = `599113599`;

// const internationalize = new Intl.NumberFormat('ka-GE').format(numbers);

// console.log(internationalize);

const modernizeNum = (number) => {
  if(number.length !== 9 || !/^-?\d+$/.test(number)){
    return `Please enter exactly nine digits ${number.length}`;
  }
  const firstThree=number.slice(0,3);
  const secondHalf = number.slice(3,5);
  const third = number.slice(5,7)
  const fourth = number.slice(7,9);
  return `${firstThree}-${secondHalf}-${third}-${fourth}`;
};

console.log(modernizeNum(numbers));
