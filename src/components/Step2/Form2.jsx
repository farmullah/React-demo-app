import React, { useState } from "react";
import InputElement from "../InputElement";
import ProgressBar from "../ProgressBar";
import "./styles.css";
import { errorMessages } from "../../utils/constants";

const defaultValues = {
  gender: "",
  occupation: "",
  dob: "",
};

const defaultErrors = {
  gender: "",
  occupation: "",
  dob: "",
};

const Form2 = ({ setStep }) => {
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
    if (name === "dob") {
      return setErrors({
        ...errors,
        [name]: errorMessages.invalidDOB,
      });
    }
    return setErrors({
      ...errors,
      [name]: "", 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation check
    //if all okay
    setStep((prev) => prev + 1);
  };
  return (
    <form onSubmit={handleSubmit} method="post" className="form">
      <ProgressBar value={65} />
      <br />
      <fieldset className="fieldset">
        <legend>Step 2</legend>

        <div className="gender">
          <h4>Gender</h4>
          <InputElement
            label="Male"
            name="gender"
            id="male"
            type="radio"
            value={formData.gender}
            handleChange={handleChange}
            error={null}
          />
          <InputElement
            label="Female"
            name="gender"
            id="female"
            type="radio"
            value={null}
            handleChange={handleChange}
            error={null}
          />
        </div>
        <InputElement
          label="Occupation"
          name="occupation"
          id="occupation"
          value={null}
          handleChange={handleChange}
          error={null}
        />
        <InputElement
          label="Date of birth"
          type="date"
          name="dob"
          id="dob"
          value={null}
          handleChange={handleChange}
          error={null}
        />
        <br />
        <div className="flex-between">
          <button
            type="button"
            onClick={() => setStep((prev) => prev - 1)}
            className="button info"
          >
            {"<<"} Previous
          </button>
          <button type="submit" className="button primary">
            Next {">>"}
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form2;
