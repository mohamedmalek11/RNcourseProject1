const rulesValidatorMapper = {
  isPhone: ValidatePhone,
  isMinimumChars: validateIsMinimumChars,
};
function validateIsMinimumChars(inputValue, {minimumChars}) {
  return inputValue.length >= minimumChars;
}

function ValidatePhone(enterdPhone) {
  if (enterdPhone.length !== 11) {
    return false;
  }
  return /^[0-9]+$/.test(enterdPhone);
}

export function validate(userInput, rules) {
  let isValid = true;

  for (let rule of rules) {
    isValid = isValid && rulesValidatorMapper[rule.key](userInput, rule);
  }
  return isValid;
}
