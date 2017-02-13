export interface ColorsOptions {
  theme: theme;
}

export type theme = 'Ocean Dark' | 'Light Blues';

export type color = string;

export type brightness = 'dark' | 'light';

export interface Metadata {
  info: string;
  brightness: brightness;
}

export interface Theme {
  headerBackground?: color;
  headerText?: color;
}
