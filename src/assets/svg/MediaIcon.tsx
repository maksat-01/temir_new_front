import { IconProps } from "./Types";

export default function MediaIcon({ width = 33, height = 23 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.1768 17.2525C32.1768 20.1011 29.9003 22.3838 27.074 22.3838H5.07078C2.25723 22.3838 0 20.1011 0 17.2525V5.13137C0 2.30204 2.25723 0 5.07078 0H27.074C29.9003 0 32.1768 2.30204 32.1768 5.13137V17.2525Z"
        fill="url(#paint0_linear_406_711)"
      />
      <path
        d="M22.4149 11.5513L13.5488 18.0413V5.08081L22.4149 11.5513Z"
        fill="#030303"
      />
      <defs>
        <linearGradient
          id="paint0_linear_406_711"
          x1="16.0884"
          y1="0"
          x2="16.0884"
          y2="22.3838"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D9D9D9" />
          <stop offset="0.5" stop-color="#404040" stop-opacity="0.88" />
          <stop offset="1" stop-color="#DBDBDB" />
        </linearGradient>
      </defs>
    </svg>
  );
}
