import { steps } from "../../FakeDataApi/step";
import Step from "./Step";

const Steps = () => {
  return (
    <div className="mt-[4.5rem] flex gap-8 max-lg:flex-col">
      {steps.map(
        ({
          stepStatusActive,
          step,
          name,
          descripiton,
          stepActive,
          buttonText,
        }) => {
          return (
            <div key={step} className="flex-1">
              <Step
                stepActive={stepStatusActive}
                stepNumber={step}
                name={name}
                descripiton={descripiton}
                stepStatus={stepActive}
                buttonText={buttonText}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default Steps;
