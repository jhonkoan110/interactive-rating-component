import { useState } from 'react';
import { Num } from './../Rating';

export const useNumbers = (initialState: Num[]) => {
  const [numbers, setNumbers] = useState(initialState);

  const selectRating = (value: number) => {
    setNumbers((prev) =>
      prev.map((num) => (num.value <= value ? { ...num, selected: true } : { ...num, selected: false })),
    );
  };

  const reset = () => setNumbers(initialState);

  const getSelectedAmount = () => numbers.filter((num) => num.selected).length;

  return {
    numbers,
    selectRating,
    reset,
    getSelectedAmount,
  };
};
