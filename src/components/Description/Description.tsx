import React, { CSSProperties, FC } from 'react';
import styles from './styles.module.scss';

interface DescriptionProps {
  text: string;
  textAlign?: CSSProperties['textAlign'];
}

export const Description: FC<DescriptionProps> = ({ text, textAlign }) => {
  return (
    <p style={{ textAlign }} className={styles.text}>
      {text}
    </p>
  );
};
