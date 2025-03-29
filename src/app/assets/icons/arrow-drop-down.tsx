import React from "react";

interface ArrowDropDownProps {
  color?: string;
}

const ArrowDropDown: React.FC<ArrowDropDownProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g
        id=".base/input/.base/suplementary text/arrow-drop-down"
        clipPath="url(#clip0_2_9273)"
      >
        <path id="Vector" d="M7 10L12 15L17 10H7Z" fill={color || "white"} />
      </g>
      <defs>
        <clipPath id="clip0_2_9273">
          <rect width="24" height="24" fill={color || "white"} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowDropDown;
