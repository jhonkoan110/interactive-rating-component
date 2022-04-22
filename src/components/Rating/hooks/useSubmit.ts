import { useState } from 'react';
export const useSubmit = () => {
  const [sumbitted, setSumbitted] = useState(false);

  const handleSubmit = (amount: number) => {
    if (amount < 1) {
      return;
    }

    setSumbitted(true);
  };

  return { sumbitted, handleSubmit };
};
