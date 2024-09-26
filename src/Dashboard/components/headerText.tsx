import React from "react";
import CustomButton from "./customButton";

const HeaderText = ({img, buttonText, headerTitle, headerText, handleDelivery}: any) => {
  return (
    <nav className="flex justify-between items-end max-md:block">
      <div>
      <h1 className="text-3xl font-bold mb-3 flex">{headerTitle}</h1>
      <p className="text-[#333333] mb-4">
      {headerText}
      </p>
      </div>
     
      {img && <div>
        <CustomButton img={img}  buttonText={buttonText} handleLogic={handleDelivery}/>
      </div>}
    </nav>
  );
};

export default HeaderText;
