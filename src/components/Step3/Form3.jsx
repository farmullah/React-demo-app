import React from "react";
import InputElement from "../InputElement";
import ProgressBar from "../ProgressBar";
import SelectInputElement from "../SelectInputElement";

const Form3 = ({ setStep }) => {
  const handleChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation check
    //if all okay
    //submit and save all the data
    setStep((prev) => prev + 1);
  };
  return (
    <form onSubmit={handleSubmit} method="post" className="form">
      <ProgressBar value={100} />
      <br />
      <fieldset className="fieldset">
        <legend>Final Submit</legend>
        <InputElement
          label="Cotact Number"
          name="contactNumber"
          id="contactNumber"
          type="number"
          value={null}
          handleChange={handleChange}
          error={null}
        />
        <InputElement
          label="Address"
          name="address"
          id="address"
          type="text"
          value={null}
          handleChange={handleChange}
          error={null}
        />
        <SelectInputElement
          label="City"
          name="city"
          id="city"
          options={["Bettiah", "Patna", "Motihari"]}
          value={null}
          handleChange={handleChange}
          error={null}
        />
        <SelectInputElement
          label="State"
          name="state"
          id="state"
          options={["Bihar", "UP", "Maharashtra"]}
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
            Submit {">>"}
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form3;
