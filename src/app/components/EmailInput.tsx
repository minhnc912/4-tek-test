import React from "react";
import ArrowSendRight from "../assets/icons/arrow-send-right";

interface EmailInputProps {
  placeholder: string;
  classname?: string;
  buttonColor?: string;
}

const EmailInput: React.FC<EmailInputProps> = ({
  placeholder,
  classname,
  buttonColor,
}) => {
  return (
    <div className="relative w-full max-w-md z-10 px-4">
      <input
        type="email"
        placeholder={placeholder}
        className={`w-full py-4 pl-4 pr-12 text-[#545454] text-sm rounded-sm shadow-md focus:outline-none ${classname}`}
      />
      <button className="absolute inset-y-0 right-4 flex items-center">
        <ArrowSendRight color={buttonColor} />
      </button>
    </div>
  );
};

export default EmailInput;
