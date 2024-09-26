import CustomButton from "../../components/customButton";
const Step = ({stepNumber, name, descripiton, stepStatus, stepActive, buttonText}: any) => {


// btn Style Logic
const btnStyle = {
 buttonStyle : "flex justify-between items-center py-10 px-5 flex-col text-center border-2 rounded-[10px]",
 stepsActive : stepActive ? "border-dashed border-primaryCol ": "border-solid border-[#EEEEEE]",
 activeNumber : stepNumber ===2 ? "mt-12" : stepNumber === 3 ? "mt-8": ""
}
// Destructuring
const {buttonStyle, activeNumber, stepsActive} = btnStyle
    return (
      <div className={`${buttonStyle} ${activeNumber} ${stepsActive} `}>
        {stepStatus ?<img src="/Rectangle.svg" />:<p className="bg-[#EBFFF0] text-primaryCol text-sm rounded-md">
          Step 00{stepNumber}
        </p>}
        <div className="">
          <h1 className="text-lg font-bold mt-6">{name}</h1>
          <p className="text-base leading-none mt-2">{descripiton}</p>
        </div>
        {stepActive &&  <div className="mt-6 mb-2 w-11/12"><CustomButton buttonText={buttonText} img='/ArrowRight.svg' rev={true} /> </div>}
       
      </div>
    );
  };
  
  export default Step;
  