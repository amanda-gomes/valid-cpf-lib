function validCPF(getNumber) {
  const cpfWithoutCharacter = getNumber.replace(/[^\d]+/g, '');
  return numberofDigits(cpfWithoutCharacter);
}

function numberofDigits(number) {
  const digits = number.length;

  if (digits < 11 || digits > 11) {
    return false;
  } else {
    return equalDigits(number);
  }
}

function equalDigits(elevenDigits) {
  let numbersEquals = 0;
  for (let digit of elevenDigits) {
    if (elevenDigits[0] === digit) {
      numbersEquals++;
    }
  }

  if (numbersEquals === 11) {
    return false;
  } else {
    return firsDigit(elevenDigits);
  }
}

function firsDigit(CPF) {
  let sum = 0;
  let multiplier = 10;
  let nineDigits = CPF.substring(0, 9);
  let firstDigitChecker = parseInt(CPF.substring(9, 10));

  for (let digit of nineDigits) {
    sum = sum + (digit * multiplier);
    multiplier--;
  }

  const result = sum % 11;
  let generateDigit;

  if (result < 2 || result > 9) {
    generateDigit = 0;
  } else {
    generateDigit = 11 - result;
  }

  if (generateDigit === firstDigitChecker) {
    return seconDigit(CPF);
  } else {
    return false;
  }
}

function seconDigit(CPF) {
  let sum = 0;
  let multiplier = 11;
  let teenDigits = CPF.substring(0, 10);
  let seconDigitChecker = parseInt(CPF.substring(10, 11));

  for (let digit of teenDigits) {
    sum = sum + (digit * multiplier);
    multiplier--;
  }

  const result = sum % 11;
  let generateDigit;

  if (result < 2 || result > 9) {
    generateDigit = 0;
  } else {
    generateDigit = 11 - result;
  }

  if (generateDigit === seconDigitChecker) {
    return true;
  } else {
    return false;
  }
}

module.exports.validCPF = validCPF;