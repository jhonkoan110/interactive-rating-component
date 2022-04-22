import React, { FC } from 'react';
import { Description } from '../Description/Description';
import { Tag } from '../Tag';
import { Title } from '../TItle';
import { FcMultipleSmartphones } from 'react-icons/fc';
import styles from './styles.module.scss';

interface ThankYouProps {
  total: number;
  selectedAmount: number;
}

export const ThankYou: FC<ThankYouProps> = ({ total, selectedAmount }) => {
  const DESCRIPTION =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

  return (
    <div className={styles.thankYou}>
      <FcMultipleSmartphones size={160} />
      <Tag text={`You selected ${selectedAmount} out of ${total}`} />
      <Title textAlign="center" text={selectedAmount < 3 ? 'So sad :(' : 'Thank you!'} />
      <Description textAlign="center" text={DESCRIPTION} />
    </div>
  );
};
