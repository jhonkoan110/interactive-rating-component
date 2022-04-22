import React, { CSSProperties, FC } from 'react';
import styles from './styles.module.scss';

interface TitleProps {
  text: string;
  textAlign?: CSSProperties['textAlign'];
}

export const Title: FC<TitleProps> = ({ text, textAlign }) => {
  return (
    <h1 style={{ textAlign }} className={styles.title}>
      {text}
    </h1>
  );
};
