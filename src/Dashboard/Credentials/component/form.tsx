import React,{useState} from "react";
import CustomSelect from "../../../Home/Auth/component/customSelect";

const Credentialform = ({ input, setInput }: any) => {
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
        <input
          type="text"
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          className={inputClass}
          placeholder="Enter Name"
        />
      </label>
      <CustomSelect  options={options} onSelect={(value) => setSelectedValue(value)} name="Environment"/>

    </div>
  );
};

export default Credentialform;
