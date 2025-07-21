export const min8DigitRegex = new RegExp("(?=.{8,})");
export const specialCharacterRegex = new RegExp("(?=.*[!@#$%^&*])");
export const oneNumericCharacterRegex = new RegExp("(?=.*[0-9])");
export const upperCaseRegex = new RegExp("(?=.*[A-Z])");
export const noSpecialCharInNameRegex = new RegExp("^[A-Za-z]*$");

export const emailValidationRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
