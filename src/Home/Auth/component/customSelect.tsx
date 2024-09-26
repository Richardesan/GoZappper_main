import React, { useState, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  onSelect: (value: string) => void;
  name?: string
}

const CustomSelect: React.FC<SelectProps> = ({ options, onSelect, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const [selectedLabel, setSelectedLabel] = useState('');

  useEffect(() => {
    setFilteredOptions(
      options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, options]);

  const handleSelect = (value: string, label: string,) => {
    onSelect(value);
    setSearchTerm(label);  // Set the selected option in the search input
    setSelectedLabel(label);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
          {name &&  <span className="font-bold  text-sm ">{name}</span>  }

      <div
        className="bg-white border border-gray-300 rounded-md p-2 mt-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        
        <input
          type="text"
          placeholder="Select an option..."
          value={searchTerm || selectedLabel}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setSelectedLabel('');
          }}
          className="w-full p-1 focus:outline-none"
          onClick={() => setIsOpen(true)}  // Open the dropdown when clicked
        />
      </div>
      {isOpen && (
        <div className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto z-10">
          
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(option.value, option.label)}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No options found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
