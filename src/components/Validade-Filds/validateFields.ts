const forms = (window.onload = async () => {
  const form = () => {
    const forms = {
      errorFormName: document.querySelector('p.errorForm.errorFormName'),
      errorFormEmail: document.querySelector('p.errorForm.errorFormEmail'),
      errorFormPassword: document.querySelector(
        'p.errorForm.errorFormPassword',
      ),
    };
    return forms
  };
});

// Check if name is not empty or just spaces
export function validateName(name: string) {
  const isNameValid = name.length < 8;
  console.log(name.length);

  if (isNameValid) {
    forms.errorFormName.innerHTML = '* Nome precisa ter 8 ou mais caracteres.';
    return false;
  } else {
    forms.errorFormName.innerHTML = '';
    return true;
  }
}

// Checks if email is valid using a regular expression
export function validateEmail(email: string) {
  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  forms.errorFormEmail.textContent = '* E-mail inválido';

  return isEmailValid;
}

// Checks if password length is greater than or equal to minimum password length
export function validatePassword(password: string, minLength = 8) {
  const isPasswordValid = password.length >= minLength;
  forms.errorFormPassword.textContent = '* Senha inválida';

  return isPasswordValid;
}
