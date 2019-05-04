function cpfValidator(CPF) {
  if (typeof (CPF) === 'number') {
    let numberToString = CPF.toString();
    let valueWithoutCharacteres = numberToString.replace(/[^\d]+/g, '');
    return numberofDigits(valueWithoutCharacteres);
  } else {
    let valueWithoutCharacteres = CPF.replace(/[^\d]+/g, '');
    return numberofDigits(valueWithoutCharacteres);
  }
}

function numberofDigits(CPF) {
  const digits = CPF.length;
  if (digits < 11 || digits > 11) {
    return false;
  } else {
    return equalDigits(CPF);
  }
}

function equalDigits(CPF) {
  let numbersEquals = 0;
  for (let digit of CPF) {
    if (CPF[0] === digit) {
      numbersEquals++;
    }
  }

  if (numbersEquals === 11) {
    return false;
  } else {
    return firsDigit(CPF);
  }
}

function firsDigit(CPF) {
  let sum = 0;
  let multiplier = 10;
  let nineFirstNumbers = CPF.substring(0, 9);
  let firstDigitChecker = parseInt(CPF.substring(9, 10));
  // substituir por reduce
  for (let digit of nineFirstNumbers) {
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
  let teenFirstNumbers = CPF.substring(0, 10);
  let seconDigitChecker = parseInt(CPF.substring(10, 11));
  // substituir por reduce
  for (let digit of teenFirstNumbers) {
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

module.exports.cpfValidator = cpfValidator;