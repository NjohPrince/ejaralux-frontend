import React from "react";

import { IconProps } from "@/shared/types/icon.type";

const CheckIcon: React.FC<IconProps> = ({
  size = "24",
  strokeWidth = "1.5",
  color = "var(--black-color)",
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
        d="M21.8011 10C22.2578 12.2413 21.9323 14.5714 20.879 16.6018C19.8256 18.6322 18.108 20.2401 16.0126 21.1573C13.9172 22.0746 11.5707 22.2458 9.3644 21.6424C7.15807 21.039 5.22529 19.6974 3.88838 17.8414C2.55146 15.9854 1.89122 13.7272 2.01776 11.4434C2.14431 9.15954 3.04998 6.9881 4.58375 5.29118C6.11752 3.59426 8.18668 2.47444 10.4462 2.11846C12.7056 1.76248 15.0189 2.19186 17.0001 3.335"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11L12 14L22 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
