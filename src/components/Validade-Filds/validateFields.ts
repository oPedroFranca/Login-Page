// Checks if email is valid using a regular expression
export function validateEmail(email: string) {
  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  return isEmailValid;
}

// Checks if password length is greater than or equal to minimum password length
export function validatePassword(password: string, minLength = 8) {
  const isPasswordValid = password.length >= minLength;
  return isPasswordValid;
}

// Check if name is not empty or just spaces
export function validateName(name: string) {
  const isNameValid = name.trim().length > 0; // Check if name is not empty or just spaces
  return isNameValid;
}
