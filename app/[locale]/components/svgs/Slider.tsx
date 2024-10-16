import React from "react";

export default function Slider() {
  return (
    <>
      <svg
        width="300"
        height="74"
        viewBox="0 0 300 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_0_1)">
          <rect x="0.5" width="209" height="74" rx="16" fill="#16171F" />
          <rect x="32.5" y="32" width="41" height="10" rx="5" fill="#FFA100" />
          <rect
            opacity="0.1"
            x="89.5"
            y="32"
            width="10"
            height="10"
            rx="5"
            fill="white"
          />
          <rect
            opacity="0.1"
            x="115.5"
            y="32"
            width="10"
            height="10"
            rx="5"
            fill="white"
          />
          <rect
            opacity="0.1"
            x="141.5"
            y="32"
            width="10"
            height="10"
            rx="5"
            fill="white"
          />
          <rect
            opacity="0.1"
            x="167.5"
            y="32"
            width="10"
            height="10"
            rx="5"
            fill="white"
          />
        </g>
        <g filter="url(#filter1_b_0_1)">
          <rect x="225.5" width="74" height="74" rx="16" fill="#16171F" />
          <path
            d="M257.25 28H258.75C259.969 28 261 29.0312 261 30.25V43.75C261 45.0156 259.969 46 258.75 46H257.25C255.984 46 255 45.0156 255 43.75V30.25C255 29.0312 255.984 28 257.25 28ZM266.25 28H267.75C268.969 28 270 29.0312 270 30.25V43.75C270 45.0156 268.969 46 267.75 46H266.25C264.984 46 264 45.0156 264 43.75V30.25C264 29.0312 264.984 28 266.25 28Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_0_1"
            x="-31.5"
            y="-32"
            width="273"
            height="138"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_b_0_1"
            x="193.5"
            y="-32"
            width="138"
            height="138"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}


