const emailValidateRegEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const textFieldRegex = /^[\wa-я.\s-]+$/i;

const validateField = ({ value, regex, message }) => {
  if (!value) {
    return 'Field is required';
  }

  if (regex && !value.match(regex)) {
    return message;
  }

  return null;
};

const fields = [
  {
    name: 'first_name',
    regex: textFieldRegex,
    message: 'Please check your First name',
  },
  {
    name: 'last_name',
    regex: textFieldRegex,
    message: 'Please check your Last name',
  },
  {
    name: 'email',
    regex: emailValidateRegEx,
    message: 'Please check your email',
  },
  {
    name: 'company',
  },
];

export const validate = values =>
  fields.reduce((errors, field) => {
    const errorMessage = validateField({ ...field, value: values[field.name] });

    if (errorMessage) {
      errors[field.name] = errorMessage;
    }

    return errors;
  }, {});
