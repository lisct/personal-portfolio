import { useState, useEffect } from "react";
import UserPostData from './UserPostData';

const UserFormHandle = (initial_state, validate) => {

  // allows to have any number of properties react hooks
  const [values, setValues] = useState(initial_state);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [apiError, setApiErrors] = useState("");

  useEffect(() => {

    if (isSubmitting) {

      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {

        UserPostData(values)
          .then( setTimeout(function(){ setValues({ ...values, apiSend: true }) }, 500))
          .then( setTimeout(function(){ setValues({ ...values, closeModal: true }) }, 2600))
          .then( setTimeout(function(){ hanldleReset() }, 3000) )
          .catch(error => setApiErrors(error));

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

  // On reset form
  const hanldleReset = () => {
    setValues({
      ...initial_state
    });

    setErrors({});

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
    apiError,
  };
};

export default UserFormHandle;
