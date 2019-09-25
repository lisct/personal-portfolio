export default function UserDataValidation(values) {
  let errors = {};

  // Name Errors
  if (!values.name || values.name.trim() == "") {
    errors.name = "Your Name is required. ";
  }

  // Email Errors
  if (!values.email) {
    errors.email = "Your Email is required. ";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address. ";
  }

  //Message Errors
  if (!values.message || values.message.trim() == "") {
    errors.message = "Message is required. ";
  }

  return errors;

}
