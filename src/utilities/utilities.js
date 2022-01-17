export const formatCurrency = a => {
  const myArray = a.split('.');
  const number = parseFloat(a);
  if (number > 1000 && number <= 1000000) {
    const leftSide = myArray[0].substring(0, 3);
    // console.log(leftSide);
    return `$${leftSide}.${myArray[1]}k`;
  }
  if (number > 1000000) {
    // console.log(number);
    const leftSide = myArray[0].substring(0, 1);
    // console.log(leftSide);
    return `$${leftSide} ${myArray[1] ? `.${myArray[1]}MM` : 'MM'}`;
  }
};

// a.	< 1000 : $x.yy
// b.	1000 and < 1000000: $xxx.yy K
// c.	1000000: $x.yy MM
// format percentages in the following way: x.yyy %

export const formatPercent = a => {
  const percentArray = a.split('.');
  const leftSide = percentArray[0].substring(0, 1);
  const rightSide = percentArray[1].substring(0, 2);
  console.log(percentArray);
  return `${leftSide}.${rightSide}%`;
};
