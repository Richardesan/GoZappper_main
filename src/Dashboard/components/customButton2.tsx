const CustomButton2 = ({ img, buttonText, rev, dark }: any) => {
  // Styles
  const btnStyle = `bg-transparent border-[#CBCBCB] border-2
    w-full  py-3 px-4 text-sm 
    font-bold rounded-lg flex gap-3 items-center 
    justify-center `;
  return (
    <button className={` ${btnStyle} ${rev ? "flex-row-reverse" : ""} ${dark ? "text-darkText": "text-[#CBCBCB]"}`}>
      {img && <img src={img}  width={24} height={24}/>}
      {buttonText}
    </button>
  );
};

export default CustomButton2;
