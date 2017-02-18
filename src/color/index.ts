import { darken, lighten } from '../manipulation';
import { RGBColorObject } from '../interfaces';


interface IColor {
  color: string;
}

type colorType = string | RGBColorObject;


export const Color = (color:string) => {
  this.color = color;

  return this.color;
};

Color.prototype.darken = (percentage: number) => {
  this.color = darken(this.color, percentage);
  return this.color;
};

Color.prototype.lighten = (percentage: number) => {
  this.color = lighten(this.color, percentage);
  return this.color;
};


export default Color;
