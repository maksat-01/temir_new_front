// External dependensies
import React from "react";

// Local dependensies
import { IconProps } from "./Types";

export default function APlusSvg({ height = 23, width = 23 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 22V1M1 11.5L22 11.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
