// Local dependencies
import { IconProps } from "./Types";

export default function SecondaryLogo({ width = 19, height = 20 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_406_595)">
        <path
          d="M18.9146 0V4.15993H12.3557V4.18602H6.62364V4.15993H0.0617676V0H18.9146Z"
          fill="url(#paint0_linear_406_595)"
        />
        <path
          d="M12.0216 6.28906H6.95605V19.1877H12.0216V6.28906Z"
          fill="url(#paint1_linear_406_595)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_406_595"
          x1="9.4882"
          y1="0"
          x2="9.4882"
          y2="4.18602"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.416667" stopColor="#898888" stopOpacity="0.583333" />
          <stop offset="1" stopColor="white" stopOpacity="0.46" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_406_595"
          x1="9.48885"
          y1="6.28906"
          x2="9.48885"
          y2="19.1877"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.416667" stopColor="#898888" stopOpacity="0.583333" />
          <stop offset="1" stopColor="white" stopOpacity="0.46" />
        </linearGradient>
        <clipPath id="clip0_406_595">
          <rect width="19" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
