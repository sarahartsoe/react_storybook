export const formatCurrency = a => {
  const myArray = a.split('.');
  const number = parseFloat(a);
  if (number > 1000 && number <= 1000000) {
    const leftSide = myArray[0].substring(0, 3);
    return `$${leftSide}.${myArray[1]}k`;
  }
  if (number > 1000000) {
    const leftSide = myArray[0].substring(0, 1);
    return `$${leftSide} ${myArray[1] ? `.${myArray[1]}MM` : 'MM'}`;
  }
};

export const formatPercent = a => {
  if (a === '' || a === undefined) {
    return '';
  }
  const percentArray = a.split('.');
  const rightSide = percentArray[1].substring(0, 3);
  return `${percentArray[0]}.${rightSide}%`;
};

export const twoDecimals = a => {
  const number = parseFloat(a);
  return number.toFixed(2);
};

export const threeDecimals = a => {
  const number = parseFloat(a);
  return number.toFixed(3);
};

export const chartFormatter = a => {
  const numberValue = parseFloat(a);
  if (numberValue > 1000 && numberValue < 1000000) {
    const dividedValue = numberValue / 1000;
    return twoDecimals(dividedValue);
  } else if (numberValue < 1000) {
    return twoDecimals(a);
  } else if (numberValue > 1000000) {
    const dividedValue = numberValue / 100000;
    return twoDecimals(dividedValue);
  }
};
export const dataLabelFormatter = a => {
  if (a > 1000) {
    return `$` + this.a + `K`;
  } else if (a > 1000000) {
    return `$` + this.a + `MM`;
  } else if (a < 1000) {
    return `$` + this.a;
  }
};
