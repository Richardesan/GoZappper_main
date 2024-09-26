import React from "react";

interface InputFieldProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  error?: string | undefined;
  touched?: boolean | undefined;
  focused: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  touched,
  focused,
}) => {
  const inputClass = `text-darkText mt-1 w-full outline-none border border-borderCol rounded-md p-2 shadow-sm`;
  const inputDanger = "border-danger shadow-sm focus:border-danger focus:shadow-danger";
  const inputFocus = "focus:border-primaryCol focus:shadow-primaryCol";

  return (
    <label className="block text-sm font-bold">
      <span className={`${focused ? "text-primaryCol" : ""} ${error && touched ? "text-danger" : ""}`}>
        {name.charAt(0).toUpperCase() + name.slice(1)} {error && touched && <span className="text-danger text-xs">({error})</span>}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`${inputClass} ${error && touched ? inputDanger : inputFocus}`}
        aria-invalid={error && touched ? "true" : "false"}
      />
    </label>
  );
};

export default InputField;
