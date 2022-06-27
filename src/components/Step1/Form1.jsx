import React, { useState } from "react";
import InputElement from "../InputElement";
import ProgressBar from "../ProgressBar";
import { errorMessages } from "../../utils/constants";

const defaultValues = {
  firstName: "",
  lastName: "",
  emailAddress: "",
};

const defaultErrors = {
  firstName: "",
  lastName: "",
  emailAddress: "",
};

const Form1 = ({ setStep }) => {
  const [formData, setFormData] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value === "") {
      return setErrors({
        ...errors,
        [name]: errorMessages[name],
      });
    }
    if (name === "emailAddress") {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(value)) {
        return setErrors({
          ...errors,
          [name]: errorMessages.invalidEmailAddress,
        });
      }
    }
    return setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validated = true;

    const newErrors = {};

    if (formData.firstName === "") {
      validated = false;
      newErrors.firstName = errorMessages.firstName;
    }
    if (formData.lastName === "") {
      validated = false;
      newErrors.lastName = errorMessages.lastName;
    }

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(formData.emailAddress)) {
      validated = false;
      newErrors.emailAddress = errorMessages.invalidEmailAddress;
    }
    if (!validated) {
      setErrors(defaultErrors);
      //Navigate to next screen
      setStep((prev) => prev + 1);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post" className="form">
      <ProgressBar value={30} />
      <br />
      <fieldset className="fieldset">
        <legend>Step 1</legend>

        <InputElement
          label="First Name"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          error={errors.firstName}
          handleChange={handleChange}
        />
        <InputElement
          label="Last Name"
          name="lastName"
          id="firstName"
          value={formData.lastName}
          handleChange={handleChange}
          error={errors.lastName}
        />
        <InputElement
          label="Email Address"
          type="email"
          name="emailAddress"
          id="emailAddress"
          value={formData.emailAddress}
          handleChange={handleChange}
          error={errors.emailAddress}
        />
        <br />
        <div className="flex-end">
          <button type="submit" className="button primary">
            Next {">>"}
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form1;
