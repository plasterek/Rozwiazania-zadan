const now = new Date();

const checkTypeOfInput = (input) => {
  return typeof input;
};

const checkIfNumberIsValidDate = (input) => {
  const date = input;
  if (date > 0 && date <= now.getFullYear()) {
    return date;
  }
  return false;
};

const checkIfObjectIsDateObject = (input) => {
  return input instanceof Date && isFinite(input);
};

const changeDateObjectToNumber = (object) => {
  if (checkIfObjectIsDateObject(object)) {
    return object.getFullYear();
  }
  return false;
};

const changeStringDateToNumber = (string) => {
  const number = Number(string);
  if (isNaN(number)) {
    return false;
  }
  return number;
};

const returnDateDependingOnType = function (input) {
  if (checkTypeOfInput(input) === "number") {
    return checkIfNumberIsValidDate(input);
  }
  if (checkTypeOfInput(input) === "string") {
    return changeStringDateToNumber(input);
  }
  if (checkTypeOfInput(input) === "object") {
    return changeDateObjectToNumber(input);
  }
  return false;
};

const countAge = (input) => {
  return now.getFullYear() - returnDateDependingOnType(input);
};

function getMyAge(input) {
  if (returnDateDependingOnType(input) === false) {
    return console.error("Wrong DATE format!");
  }
  return countAge(input);
}

//sprawdzenie

const result1 = getMyAge(new Date(1990, 1, 1));
const result2 = getMyAge("1990");
const result3 = getMyAge(1990);
// const result4 = getMyAge(19903);
// const result5 = getMyAge("adam");
// const result6 = getMyAge(true);

console.log(result1);
console.log(result2);
console.log(result3);
// console.log(result4);
// console.log(result5);
// console.log(result6);
