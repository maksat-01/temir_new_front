// External dependensies
import React from "react";

// Local dependensies
import { IconProps } from "./Types";

export default function DeleteSvgIcon({ height = 24, width = 24 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9604 5.83008H5.69043V19.1901C5.69043 20.3201 6.61043 21.2401 7.74043 21.2401H15.9004C17.0304 21.2401 17.9504 20.3201 17.9504 19.1901V5.83008H17.9604Z"
        stroke="#960404"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.79004 5.83008H20.21"
        stroke="#960404"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0799 2.73999H8.91992V5.81999H15.0799V2.73999Z"
        stroke="#960404"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.94043 9.75V17.14"
        stroke="#960404"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0498 9.75V17.14"
        stroke="#960404"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
