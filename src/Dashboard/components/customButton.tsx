const CustomButton = ({ img, buttonText, rev, handleLogic, customDisable, customType }: any) => {
  // Styles
  const btnStyle = `bg-custom-gradient
  shadow-custom-combined 
  w-full text-white py-3 px-4 text-sm 
  font-semibold rounded-lg flex gap-3 items-center 
  justify-center transition-all duration-75 ${customDisable ? "opacity-75": ""}`;

  const spin = customDisable ? "animate-spin w-5 h-5 rounded-full border-2 border-t-2 border-slate-50 border-t-transparent" : "";

  return (
    <button onClick={handleLogic} disabled={customDisable} type={customType} className={`${btnStyle}  ${rev ? "flex-row-reverse" : ""}`}>
      {img && <img src={img} alt="Button Icon" />}
      {!customDisable ? buttonText : <p className={spin}></p>}
    </button>
  );
};

export default CustomButton;
