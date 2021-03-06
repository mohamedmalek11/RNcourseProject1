import axios from 'axios';

// setting Timer

export const formatTimer = (totalSeconds) => {
  // mm:ss

  const seconds = totalSeconds % 60;
  const minutes = (totalSeconds - seconds) / 60;

  return appendZero(minutes) + ':' + appendZero(seconds);
};

// adding zero befor number

const appendZero = (val) => {
  if (val >= 0 && val <= 9) {
    return '0' + val;
  }
  return val;
};

export const getActualPrice = (price, discount) => {
  if (discount) {
    price = price - discount * price;
    return price;
  }
  return price;
};

export const configurAxios = () => {
  axios.defaults.baseURL = 'http://www.rncourseproject.com/app';
};
