import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: fNameIsValid,
    hasError: fNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lNameIsValid,
    hasError: lNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (fNameIsValid && lNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredFirstName, enteredLastName, enteredEmail);

    resetFirstName("");
    resetLastName("");
    resetEmail("");
  };

  const fNameInputClasses = fNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lNameInputClasses = lNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailNameInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={fNameInputClasses}>
        <label htmlFor="name">First Name</label>
        <input
          value={enteredFirstName}
          type="text"
          id="name"
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
        />
        {fNameInputHasError && (
          <p className="error-text">First name can not be empty.</p>
        )}
      </div>
      <div className={lNameInputClasses}>
        <label htmlFor="name">Last Name</label>
        <input
          value={enteredLastName}
          type="text"
          id="name"
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
        />
        {lNameInputHasError && (
          <p className="error-text">Last name can not be empty.</p>
        )}
      </div>

      <div className={emailNameInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={enteredEmail}
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Email must include @.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
