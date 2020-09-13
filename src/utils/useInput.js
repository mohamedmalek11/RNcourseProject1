import React from 'react';
import {validate} from './validate';

export function useInput(initialValue, rules) {
  const [input, changeInput] = React.useState({
    value: initialValue | '',
    isValid: false,
    touched: false,
  });
  const updateInput = (inputValue) => {
    changeInput({
      value: inputValue,
      isValid: validate(inputValue, rules),
      touched: true,
    });
  };
  return [input, updateInput];
}
