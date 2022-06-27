import { useState } from "react";
import "./App.css";
import Form1 from "./components/Step1/Form1";
import Form2 from "./components/Step2/Form2";
import Form3 from "./components/Step3/Form3";
import Details from "./components/Step4/Details";

const App = () => {
  const [step, setStep] = useState(0);

  const RenderStep = () => {
    switch (step) {
      case 0:
        return <Form1 setStep={setStep} />;
      case 1:
        return <Form2 setStep={setStep} />;
      case 2:
        return <Form3 setStep={setStep} />;
      case 3:
        return <Details />;
      default:
        return <h3>Invalid step selected!</h3>;
    }
  };
  
  return (
    <div className="app">
      <RenderStep />
    </div>
  );
};

export default App;
