// Local dependencies
import { IconProps } from "./Types";

export default function ContactsIcon({ width = 75, height = 48 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_280_377)" filter="url(#filter0_d_280_377)">
        <path
          d="M31 3.15226V30L30.6045 23.5144C30.6045 23.5144 30.6369 6.46914 30.5461 3.44856C30.4553 0.477366 28.8797 0.510288 28.1275 0.460905C27.5569 0.427984 7.76081 0.617284 6.30836 0.72428C4.45389 0.864197 4.51873 3.11111 4.51873 3.11111L4.48631 23.9177L4 29.7366V3.15226C4 1.41564 4.99856 0.0740741 6.29539 0H28.7046C30.196 0 30.9805 1.40741 31 3.15226Z"
          fill="white"
        />
        <path
          d="M21.2219 2.4856H13.6938L13.214 2.78189L13.6938 3.07819H21.3127L21.7925 2.71605L21.2219 2.4856ZM20.8912 2.92181H14.031V2.69959H20.8912V2.92181Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_280_377"
          x="0"
          y="0"
          width="35"
          height="38"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_280_377"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_280_377"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_280_377">
          <rect width="27" height="30" fill="white" transform="translate(4)" />
        </clipPath>
      </defs>
    </svg>
  );
}
