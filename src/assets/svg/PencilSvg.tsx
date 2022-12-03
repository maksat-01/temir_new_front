// External dependensies
import React from "react";

// Local dependensies
import { IconProps } from "./Types";

export default function PencilSvg({ height = 15, width = 16 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 15"
      fill={"#ff9900"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1369 0.46967C11.9963 0.329018 11.8055 0.25 11.6066 0.25C11.4077 0.25 11.2169 0.329018 11.0763 0.46967L1.88387 9.66206C1.78964 9.75628 1.72222 9.87391 1.68855 10.0028L0.688547 13.8313C0.621257 14.0889 0.695596 14.3629 0.883871 14.5511C1.07215 14.7394 1.34613 14.8138 1.60374 14.7465L5.43217 13.7465C5.5611 13.7128 5.67873 13.6454 5.77296 13.5511L14.9653 4.35876C15.2582 4.06586 15.2582 3.59099 14.9653 3.2981L12.1369 0.46967ZM3.08843 10.5788L11.6066 2.06066L13.3744 3.82843L4.85619 12.3466L2.46343 12.9716L3.08843 10.5788Z"
        fill="black"
      />
    </svg>
  );
}
