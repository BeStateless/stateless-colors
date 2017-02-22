export const convertPercentageToDecimal = (percentage:string) => {
  return parseInt(percentage.replace(/\%/g, '')) / 100;
};

export function clamp(num:number, min:number, max:number):number {
  return num <= min ? min : num >= max ? max : num;
}
