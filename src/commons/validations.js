const MONTHDAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const MONTHDAYSBI = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const onlyNumbersPattern = new RegExp("^[0-9]+$");

const stringNotEmpty = (value) => {
  return !value || value === "" ? "Required" : undefined;
};

const onlyNumbers = (value) =>
  onlyNumbersPattern.test(value) ? undefined : "Only Numbers";

const validDate = (value) => {
  const day = value.slice(0, 2);
  const month = value.slice(2, 4);
  const year = value.slice(4, 8);
  const today = new Date();
  let checkdays = MONTHDAYS;
  if (year % 4 === 0) {
    checkdays = MONTHDAYSBI;
  }

  if (month > 12 || !month) {
    return "Invalid Month";
  }

  if (day > checkdays[month - 1]) {
    return "Invalid Day";
  }

  if (!year || year < today.getFullYear()) {
    return "Invalid Year";
  }

  return undefined;
};

const validateEmail = (value) => {
  const partEmail = value.split("@");
  if (partEmail.length !== 2) {
    return "Invalid Email";
  }

  if (!partEmail[1]) {
    return "Invalid Email";
  }

  const finalEmail = partEmail[1].split(".");
  if (!finalEmail[1]) {
    return "Invalid Email";
  }

  return undefined;
};

const higherThanEight = (value) =>
  value.length < 8 ? "Password to Short" : undefined;

const higherThanThree = (value) =>
  value.length < 3 ? "Invalid CVV" : undefined;

export {
  stringNotEmpty,
  onlyNumbers,
  validDate,
  validateEmail,
  higherThanEight,
};
