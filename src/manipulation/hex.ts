export const hexToR = (hex) => hexFunction(hex, 0, 2);
export const hexToG = (hex) => hexFunction(hex, 2, 4);
export const hexToB = (hex) => hexFunction(hex, 4, 6);

export function hexFunction(hex:string, start:number, stop:number):number {
  return parseInt((removeHash(hex)).substring(start, stop), 16);
}

export function removeHash (hex:string):string {
  return (hex.charAt(0) === '#') ? hex.substring(1, 7) : hex;
}
