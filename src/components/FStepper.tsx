import { ReactElement, ReactNode, useState } from "react";
import "./FStepper.css";
import FButton from "./FButton";

export interface Step {
  title: string;
  content: ReactNode;
  icon?: ReactElement;
}

export interface Props {
  initialStep?: number;
  steps: Array<Step>;
  updateStep: (step: number) => void;
}

function stepperProgress(currentStep: number, stepperLength: number) {
  return (100 / (stepperLength - 1)) * currentStep + "%";
}

// Props:
// - Array di steps con titolo
// - Children
// - Fn update
// - Fn finalize
export function FStepper({ initialStep, steps, updateStep }: Props) {
  const [activeStep, setActiveStep] = useState(initialStep || 0);

  function renderStepItems() {
    return steps.map((step, index) => (
      <div className={`stepper-item ${activeStep === index && "active"}`}>
        <div className="stepper-item-counter">
          <div className="icon-box">
            {step.icon ?? <span>{index + 1}</span>}
          </div>
          <h4 className="stepper-item-title">{step.title}</h4>
        </div>
      </div>
    ));
  }

  function goNext() {
    setActiveStep((currentStep) => currentStep + 1);
    if (updateStep) {
      updateStep(activeStep + 1);
    }
  }

  function goBack() {
    setActiveStep((currentStep) => currentStep - 1);
    if (updateStep) {
      updateStep(activeStep - 1);
    }
  }

  return (
    <>
      <div className="stepper">
        <div className="header">
          {/* <!-- Progress --> */}
          <div className="stepper-nav">
            <div className="stepper-progress">
              <div
                className="stepper-progress-bar"
                style={{ width: stepperProgress(activeStep, steps.length) }}
              ></div>
            </div>
            {renderStepItems()}
          </div>
        </div>

        {/* <!-- Content --> */}
        <div className="content-wrapper">{steps[activeStep].content}</div>

        {/* // <!-- Navigation --> */}
        <div className="footer">
          <div className="footer-content">
            <FButton
              text="Back"
              onClick={goBack}
              outlined
              state="primary"
              disabled={activeStep === 0}
            />

            <FButton
              text="Next"
              onClick={goNext}
              outlined
              state="primary"
              disabled={activeStep === steps.length - 1}
            />
          </div>
        </div>
      </div>
    </>
  );
}
