import React from "react";

interface TickProps {
  className?: string;
}

const Tick: React.FC<TickProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21.7698 5.29384C21.3781 4.90205 20.7429 4.90205 20.3511 5.29384L8.33237 17.3127L3.71256 12.6929C3.32081 12.3011 2.68567 12.3011 2.29384 12.6929C1.90205 13.0846 1.90205 13.7198 2.29384 14.1116L7.62301 19.4407C8.01464 19.8324 8.65025 19.8321 9.04173 19.4407L21.7698 6.71256C22.1616 6.32081 22.1616 5.68563 21.7698 5.29384Z"
        fill="black"
      />
    </svg>
  );
};

export default Tick;
