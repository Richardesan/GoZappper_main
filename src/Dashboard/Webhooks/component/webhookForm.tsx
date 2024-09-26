import React, {useState} from "react";
import CustomSelect from "../../../Home/Auth/component/customSelect";

const WebhookForm = ({ input, setInput }: any) => {
  const inputClass =
    "text-darkText mt-1 w-full outline-none border border-borderCol rounded-md  p-2 placeholder:text-[#AFAFAF]";

    const [selectedValue, setSelectedValue] = useState('');

    const options = [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'cherry', label: 'Cherry' },
      { value: 'date', label: 'Date' },
      { value: 'elderberry', label: 'Elderberry' },
      
    ];
    

  return (
      <div className="flex flex-col gap-3">
        <label>
          <span className="font-semibold text-sm block ">Name</span>
          <input type="text" placeholder="Enter Name"       value={input}
          onChange={(e)=> setInput(e.target.value)}
          className={inputClass} />
        </label>

        <label>
          <span className="font-semibold text-sm block ">URl</span>
          <input type="text" placeholder="https:///www." className={inputClass} />
        </label>
        <CustomSelect  options={options} onSelect={(value) => setSelectedValue(value)} name="Authentication Header"/>
          <p className="text-sm text-[#1A1A1A]">It has to be at least 16 characters. This token can be changed later</p>
      </div>
  );
};

export default WebhookForm;
