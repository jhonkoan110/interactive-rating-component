import React, { FC } from 'react';
import styles from './styles.module.scss';

interface TagProps {
  text: string;
}

export const Tag: FC<TagProps> = ({ text }) => {
  return <p className={styles.tag}>{text}</p>;
};
