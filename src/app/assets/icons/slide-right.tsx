import React from "react";

const SlideRight = () => {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2_9415)">
        <path
          d="M33.9834 6.33337H20.0167C13.95 6.33337 10.3334 9.95004 10.3334 16.0167V29.9667C10.3334 36.05 13.95 39.6667 20.0167 39.6667H33.9667C40.0334 39.6667 43.65 36.05 43.65 29.9834V16.0167C43.6667 9.95004 40.05 6.33337 33.9834 6.33337ZM31.65 23.8834L25.7667 29.7667C25.5167 30.0167 25.2 30.1334 24.8834 30.1334C24.5667 30.1334 24.25 30.0167 24 29.7667C23.5167 29.2834 23.5167 28.4834 24 28L29 23L24 18C23.5167 17.5167 23.5167 16.7167 24 16.2334C24.4834 15.75 25.2834 15.75 25.7667 16.2334L31.65 22.1167C32.15 22.6 32.15 23.4 31.65 23.8834Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2_9415"
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
            result="effect1_dropShadow_2_9415"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_9415"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SlideRight;
