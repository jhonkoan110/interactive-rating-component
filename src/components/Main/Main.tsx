import React, { FC } from 'react';
import { Description } from '../Description/Description';
import { Point } from '../Point';
import { Num } from '../Rating/Rating';
import { Submit } from '../Submit';
import { Title } from '../TItle';
import styles from './styles.module.scss';

interface MainProps {
  numbers: Num[];
  selectedAmount: number;
  selectRating: (value: number) => void;
  onSubmit: (amount: number) => void;
}

export const Main: FC<MainProps> = ({ numbers, selectedAmount, onSubmit, selectRating }) => {
  const handleSubmit = () => {
    onSubmit(selectedAmount);
  };

  return (
    <>
      <Point />
      <Title text="How did we do?" />
      <Description
        text="Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering!"
      />
      <div className={styles.ratingContainer}>
        {numbers.map((num) => (
          <Point key={num.id} num={num} onClick={selectRating} />
        ))}
      </div>
      <Submit onClick={handleSubmit} />
    </>
  );
};
