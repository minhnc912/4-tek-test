import React from "react";

const SlideLeft = () => {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2_9414)">
        <path
          d="M33.9833 6.33337H20.0167C13.95 6.33337 10.3333 9.95004 10.3333 16.0167V29.9667C10.3333 36.05 13.95 39.6667 20.0167 39.6667H33.9667C40.0333 39.6667 43.65 36.05 43.65 29.9834V16.0167C43.6667 9.95004 40.05 6.33337 33.9833 6.33337ZM29.9833 28C30.4667 28.4834 30.4667 29.2834 29.9833 29.7667C29.7333 30.0167 29.4167 30.1334 29.1 30.1334C28.7833 30.1334 28.4667 30.0167 28.2167 29.7667L22.3333 23.8834C21.85 23.4 21.85 22.6 22.3333 22.1167L28.2167 16.2334C28.7 15.75 29.5 15.75 29.9833 16.2334C30.4667 16.7167 30.4667 17.5167 29.9833 18L24.9833 23L29.9833 28Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2_9414"
          x="-3"
          y="-3"
          width="60"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_9414"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_9414"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SlideLeft;
