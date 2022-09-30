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
  let newArray1 = [];
  let newArray2 = [];
  let keys = Object.keys(array);
  let values = Object.values(array);
  for (let i = 0; i < array.length; i++) {
    newArray1 = [keys[i], values[i]];
    newArray2.push(newArray1);
  }
  return newArray2;
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
  let currentValue = initial;
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
  let check = false;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return (check = true);
    }
  }
  if (check) {
    return true;
  }
  return false;
};

// SPRAWDZENIE
const array1 = [0, 1, 2, 3, 4, 5];
const array2 = [3, 4, 5];
const array3 = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
];
const callFn = (element) => element * 2;
const callFilterFn = (element) => element > 2;

// console.log(forEachFn(array1, callback));
// console.log(mapFn(array1, callback));
// console.log(Object.entries(array2));
// console.log(entriesFn(array2));
