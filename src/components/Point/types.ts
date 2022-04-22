import { Num } from './../Rating/Rating';
import { ReactNode } from 'react';

export interface PointProps {
  num?: Num;
  onClick?: (value: number) => void;
}
