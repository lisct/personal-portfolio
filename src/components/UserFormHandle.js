import { useState, useEffect } from "react";

const UserFormHandle = (initial_state, validate) => {

  // allows to have any number of properties react hooks
  const [values, setValues] = useState(initial_state);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {

      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors, isSubmitting, values]);

  // Receiving the data and saving it in the state(Hooks)
  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // On submit form
  const handleSubmit = event => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default UserFormHandle;
