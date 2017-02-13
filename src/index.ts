import { oceanDark } from './themes/oceanDark';
import { ColorsOptions, theme } from './interfaces';

export const colors = (options:ColorsOptions = { theme: 'Ocean Dark' as theme }) => {
  this.theme = options.theme;
  switch (this.theme) {
    case 'Ocean Dark' as theme:
      return oceanDark;
    default:
      throw new Error ('An unrecognized theme was selected.');
  }
};

export default colors;
