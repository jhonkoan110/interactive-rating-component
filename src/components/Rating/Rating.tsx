import React, { FC } from 'react';
import { Main } from '../Main';
import { ThankYou } from '../ThankYou';
import { useNumbers } from './hooks/useNumbers';
import { useSubmit } from './hooks/useSubmit';
import styles from './styles.module.scss';

export interface Num {
  id: number;
  value: number;
  selected: boolean;
}

const data: Num[] = [
  { id: 1, value: 1, selected: false },
  { id: 2, value: 2, selected: false },
  { id: 3, value: 3, selected: false },
  { id: 4, value: 4, selected: false },
  { id: 5, value: 5, selected: false },
];

export const Rating: FC = () => {
  const { numbers, selectRating, getSelectedAmount } = useNumbers(data);
  const { sumbitted, handleSubmit } = useSubmit();

  return (
    <div className={styles.component}>
      {sumbitted ? (
        <ThankYou total={numbers.length} selectedAmount={getSelectedAmount()} />
      ) : (
        <Main
          selectedAmount={getSelectedAmount()}
          numbers={numbers}
          onSubmit={handleSubmit}
          selectRating={selectRating}
        />
      )}
    </div>
  );
};
