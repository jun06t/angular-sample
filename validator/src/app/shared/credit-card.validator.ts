import { AbstractControl } from '@angular/forms';

export class CreditCardValidator {

  static luhn(c: AbstractControl) {
    const num = c.value;
    if (num.length < 13) {
      return {luhn: true};
    }

    const digits = num.split('').reverse();
    let digit;
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
      digit = digits[i];
      digit = parseInt(digit, 10);
      // if odd, multiplied by 2.
      if ((i + 1) % 2 === 0) {
        digit *= 2;
      }
      // if more than 10, subtract 9.
      if (digit > 9) {
        digit -= 9;
      }
      sum += digit;
    }

    if (sum % 10 !== 0) {
      return {luhn: true};
    }

    return null;
  }
}
