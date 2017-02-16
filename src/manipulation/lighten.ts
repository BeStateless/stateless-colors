
const convertPercentageToDecimal = (percentage:string) => {
  return parseInt(percentage.replace(/\%/g, '')) / 100;
};

export const lighten = (color, percentage) => {
  const amount = typeof percentage === 'string' ? convertPercentageToDecimal(percentage) : percentage;
  
};
