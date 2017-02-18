export interface ColorsOptions {
  theme: theme;
}

export type theme = 'Ocean Dark' | 'Light Blues';

export type color = string;

export type brightness = 'dark' | 'light';

export interface Metadata {
  info?: string;
  brightness?: brightness;
}

export interface Theme {
  headerBackground?: color;
  headerText?: color;
}

export interface RGBColorObject {
  r: number;
  g: number;
  b: number;
  a?: number;
}

export interface HSLColorObject {
  h: number;
  s: number;
  l: number;
  a?: number;
}

export type colorFormat = 'hex' | 'rgb' | 'rgba' | 'hsl' | 'hsla';
