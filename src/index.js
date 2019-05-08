function cpfValidator(CPF) {
  const digits = CPF.toString().replace(/[^\d]+/g, '');
  if (digits.length !== 11) return false;

  let numbersEquals = 0;
  for (const digit of digits) {
    if (digits[0] === digit) numbersEquals++;
  }
  if (numbersEquals === 11) return false;

  const nineFirstNumbers = digits.substring(0, 9).split('');
  let multiplier = 10;
  let sum = nineFirstNumbers.reduce((sum, current) => sum + (current * multiplier--), 0) % 11;
  let generateDigit;
  sum < 2 || sum > 9 ?
    generateDigit = 0 : generateDigit = 11 - sum;
  const firstDigitChecker = parseInt(digits.substring(9, 10));
  if (firstDigitChecker !== generateDigit) return false;

  const teenFirstNumbers = digits.substring(0, 10).split('');
  multiplier = 11;
  sum = teenFirstNumbers.reduce((sum, current) => sum + (current * multiplier--), 0) % 11;
  sum < 2 || sum > 9 ?
    generateDigit = 0 : generateDigit = 11 - sum;
  const seconDigitChecker = parseInt(digits.substring(10, 11));
  if (seconDigitChecker !== generateDigit) return false;
  
  return true;
}

module.exports.cpfValidator = cpfValidator;