import { IconProps } from "./Types";

export default function QrCodeIcon({ width = 37, height = 37 }: IconProps) {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.4"
        y="5.4"
        width="23.2"
        height="13.2"
        rx="1.6"
        fill="black"
        stroke="url(#paint0_linear_701_3445)"
        strokeWidth="0.8"
      />
      <rect
        x="5.52473"
        y="22.692"
        width="22.2191"
        height="12.8022"
        rx="1.6"
        transform="rotate(-90.3179 5.52473 22.692)"
        fill="black"
        stroke="url(#paint1_linear_701_3445)"
        strokeWidth="0.8"
      />
      <defs>
        <linearGradient
          id="paint0_linear_701_3445"
          x1="12"
          y1="5"
          x2="12"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ECEAEA" />
          <stop offset="0.541667" stopColor="#3A3A3A" />
          <stop offset="1" stopColor="#F5F3F3" stopOpacity="0.91" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_701_3445"
          x1="16.6365"
          y1="23.0942"
          x2="16.6365"
          y2="36.6965"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ECEAEA" />
          <stop offset="0.541667" stopColor="#3A3A3A" />
          <stop offset="1" stopColor="#F5F3F3" stopOpacity="0.91" />
        </linearGradient>
      </defs>
    </svg>
  );
}
