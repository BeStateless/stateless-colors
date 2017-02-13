import { darken, lighten } from '../manipulation';

interface IColor {
  color: string;
}

const Color = (color) => {
  this.color = color;

  return this;
};

Color.prototype.darken = (percentage: number) => {
  this.color = darken(this.color, percentage);
  return this;
};

Color.prototype.lighten = (percentage: number) => {
  this.color = lighten(this.color, percentage);
  return this;
};
