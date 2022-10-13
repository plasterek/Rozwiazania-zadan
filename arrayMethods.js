const arrayValidation = (array) => {
  if (Array.isArray(array) || array.length < 1) {
    return array;
  }
  return console.error(
    new TypeError("Array must be Array type and not be empty")
  );
};

const forEachFn = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
  }
  return array;
};

const mapFn = (array, callback) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
};

const entriesFn = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push([i, array[i]]);
  }
  return newArray;
};

const filterFn = (array, callback) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const reduceFn = (array, callback, initial) => {
  let currentValue;
  initial === undefined ? (currentValue = array[0]) : (currentValue = initial);
  if (!Array.isArray(array) || array.length < 1) {
    return console.error(TypeError("Wrong array"));
  }

  for (let i = 0; i < array.length; i++) {
    currentValue += callback(array[i]);
  }
  return currentValue;
};

const everyFn = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
    return true;
  }
};

const someFn = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
    return false;
  }
};

// SPRAWDZENIE
const array1 = [0, 1, 2, 3, 4, 5];
const array2 = [3, 4, 5];
const array3 = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
];
const array4 = [];
const callFn = (element) => element * 2;
const callFilterFn = (element) => element < 2;
const callFilterFn2 = (element) => element < 3;
