import React, { FC } from 'react';
import cn from 'classnames';
import { PointProps } from './types';
import { AiFillStar } from 'react-icons/ai';
import styles from './styles.module.scss';

export const Point: FC<PointProps> = ({ num, onClick = () => {} }) => {
  const handleClick = () => {
    if (num) {
      onClick(num.value);
    }
  };

  return (
    <button onClick={handleClick} className={cn(styles.container, num?.selected && styles.active)}>
      {num ? num.value : <AiFillStar size={25} color="#f97717" />}
    </button>
  );
};
