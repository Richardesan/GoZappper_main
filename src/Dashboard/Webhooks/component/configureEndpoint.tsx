import React, { useState } from "react";

const ConfigureEndpoint = ({handleModal}: any) => {
  const configClass = `border-dashed  border-2 w-5/12 p-2 rounded-xl border-primaryCol
   flex flex-col gap-4 py-10 mt-10 items-center justify-between 
   text-center cursor-pointer max-md:w-full`;


  return (
    <div
      className={configClass}
      onClick={handleModal}
      >
      <img src="/PlusVector.svg" />
      <div className="mt-2">
        <p className="font-bold mb-2">Configure an Endpoint</p>
        <p className="w-72 leading-tight">
          Set up an endpoint to receive webhook events for delivery updates.{" "}
        </p>
      </div>
    </div>
  );
};

export default ConfigureEndpoint;
