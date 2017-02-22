export const convertPercentageToDecimal = (percentage:string) => {
  return parseInt(percentage.replace(/\%/g, '')) / 100;
};
