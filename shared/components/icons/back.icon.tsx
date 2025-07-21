import React from "react";

import { IconProps } from "@/shared/types/icon.type";

const BackIcon: React.FC<IconProps> = ({
  size = "24",
  strokeWidth = "1.5",
  color = "#ffffff",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackIcon;
