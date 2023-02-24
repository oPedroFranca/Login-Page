//Function that fetches the form's error elements and returns an object with them
export function getFormErrors() {
  const errorFormName = document.querySelector('p.errorForm.errorFormName');
  const errorFormEmail = document.querySelector('p.errorForm.errorFormEmail');
  const errorFormPassword = document.querySelector(
    'p.errorForm.errorFormPassword',
  );

  return {
    errorFormName,
    errorFormEmail,
    errorFormPassword,
  };
}
