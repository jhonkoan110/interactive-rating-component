import React, { FC } from 'react';
import styles from './styles.module.scss';

interface SubmitProps {
  onClick: () => void;
}

export const Submit: FC<SubmitProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.submit}>
      Submit
    </button>
  );
};
