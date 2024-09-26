interface Step {
  step: number;
  name: string;
  descripiton: string;
  stepStatusActive: boolean;
  stepActive: boolean;
  buttonText: string;
}

export const steps: Step[] = [
  {
    step: 1,
    name: "Get Started with the Development",
    descripiton: "Utilize the documentation to understand the integration process and generate test credentials.",
    stepStatusActive: false,
    stepActive: true,
    buttonText: "Generate Access Key"
  },
  {
    step: 2,
    name: "Utilize the Delivery Simulator",
    descripiton: "Begin by using the delivery simulator to test and validate your integration setup.",
    stepActive: true,
    stepStatusActive: false,
    buttonText: "Utilize Delivery Simulator"
  },
  {
    step: 3,
    name: "Release to Production",
    descripiton: "Initiate the process to request production access and then generate your production credentials.",
    stepActive: false,
    stepStatusActive: true,
    buttonText: "Request Production Access"
  }
];
