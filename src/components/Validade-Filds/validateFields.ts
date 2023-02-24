import { ErrorFormElements } from '../../types/ErrorFormElement';
import { getFormErrors } from './getFormErrors';
import { showError } from './showError';

// Assigning form error elements to the formErrors variable after page load
let formErrors: ErrorFormElements;
window.onload = () => {
  formErrors = getFormErrors();
};

// For name error messages
const NAME_EMPTY_ERROR = '* Name cannot be empty!';
const NAME_LENGTH_ERROR = '* Name must be 4 or more characters';
const NAME_SPECIAL_CHARACTERS_ERROR =
  '* Name cannot contain special characters or numbers';

export function validateName(name: string) {
  const length = name.trim().length; //removes the spacing at the end of the name
  const regex = /^[a-zA-Z ]+$/;

  if (!length) {
    showError(formErrors.errorFormName!, NAME_EMPTY_ERROR);
  } else if (length < 4) {
    showError(formErrors.errorFormName!, NAME_LENGTH_ERROR);
  } else if (!regex.test(name)) {
    showError(formErrors.errorFormName!, NAME_SPECIAL_CHARACTERS_ERROR);
  } else {
    formErrors.errorFormName!.innerHTML = '';
    return true;
  }

  return false;
}

// For email error messages
const EMAIL_EMPTY_ERROR = '* E-mail cannot be empty!';
const EMAIL_INVALID_ERROR = '* E-mail format is invalid';

export function validateEmail(email: string) {
  const regex = /\S+@\S+\.\S+/;

  if (!email) {
    showError(formErrors.errorFormEmail!, EMAIL_EMPTY_ERROR);
  } else if (!regex.test(email)) {
    showError(formErrors.errorFormEmail!, EMAIL_INVALID_ERROR);
  } else {
    formErrors.errorFormEmail!.innerHTML = '';
    return true;
  }

  return false;
}

// For password error messages
const PASSWORD_LENGTH_ERROR = '* Password must be 8 or more characters';
const PASSWORD_EMPTY_ERROR = '* Password cannot be empty!';
const PASSWORD_SPECIAL_CHARACTERS_ERROR =
  '* Only these special characters are allowed ! @ & # * - _ +';

export function validatePassword(password: string) {
  const regex = /^[a-zA-Z0-9!@#*&_+=-]+$/;
  const minLength = 8;

  if (!password) {
    showError(formErrors.errorFormPassword!, PASSWORD_EMPTY_ERROR);
  } else if (password.length < minLength) {
    showError(formErrors.errorFormPassword!, PASSWORD_LENGTH_ERROR);
  } else if (!regex.test(password)) {
    showError(formErrors.errorFormPassword!, PASSWORD_SPECIAL_CHARACTERS_ERROR);
  } else {
    formErrors.errorFormPassword!.innerHTML = '';
    return true;
  }

  return false;
}
