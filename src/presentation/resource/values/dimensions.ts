import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const DESIGN_WIDTH = 1079;
const DESIGN_HEIGHT = 1922;

export const WITDH = width;

export const HEIGHT = height;

export const scaleWidth = (size: number): number => (width / DESIGN_WIDTH) * size;

export const scaleHeight = (size: number): number => (height / DESIGN_HEIGHT) * size;

export const scale = (size: number): number => {
  const scaleRatio = Math.min(width / DESIGN_WIDTH, height / DESIGN_HEIGHT);
  return size * scaleRatio;
};
