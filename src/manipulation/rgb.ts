import { hexToR, hexToG, hexToB } from './hex';

export const rgb = (hex) => `rgb(${hexToR(hex)}, ${hexToG(hex)}, ${hexToB(hex)})`;
