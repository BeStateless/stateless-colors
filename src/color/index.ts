import { darken } from './manipulation';

interface IColor {
  color: string;
}

const Color = (color) => {
  this.color = color;

  return this;
};

Color.prototype.darken = (percentage: number) => {
  this.color = darken(color, percentage);
  return this;
};
