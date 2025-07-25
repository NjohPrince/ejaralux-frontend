import React from "react";

import { IconProps } from "@/shared/types/icon.type";

const SparkleIcon: React.FC<IconProps> = ({
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
        d="M9.93743 15.5002C9.84815 15.1542 9.66777 14.8384 9.41505 14.5856C9.16232 14.3329 8.8465 14.1525 8.50043 14.0632L2.36543 12.4812C2.26076 12.4515 2.16864 12.3885 2.10304 12.3017C2.03744 12.2149 2.00195 12.1091 2.00195 12.0002C2.00195 11.8914 2.03744 11.7856 2.10304 11.6988C2.16864 11.612 2.26076 11.549 2.36543 11.5192L8.50043 9.93625C8.84638 9.84706 9.16212 9.66682 9.41483 9.41429C9.66754 9.16175 9.84799 8.84614 9.93743 8.50025L11.5194 2.36525C11.5488 2.26017 11.6118 2.16759 11.6987 2.10164C11.7857 2.0357 11.8918 2 12.0009 2C12.11 2 12.2162 2.0357 12.3031 2.10164C12.39 2.16759 12.453 2.26017 12.4824 2.36525L14.0634 8.50025C14.1527 8.84632 14.3331 9.16215 14.5858 9.41487C14.8385 9.66759 15.1544 9.84797 15.5004 9.93725L21.6354 11.5182C21.7409 11.5473 21.834 11.6103 21.9003 11.6973C21.9666 11.7844 22.0025 11.8908 22.0025 12.0002C22.0025 12.1097 21.9666 12.2161 21.9003 12.3032C21.834 12.3902 21.7409 12.4531 21.6354 12.4822L15.5004 14.0632C15.1544 14.1525 14.8385 14.3329 14.5858 14.5856C14.3331 14.8384 14.1527 15.1542 14.0634 15.5002L12.4814 21.6353C12.452 21.7403 12.389 21.8329 12.3021 21.8989C12.2152 21.9648 12.109 22.0005 11.9999 22.0005C11.8908 22.0005 11.7847 21.9648 11.6977 21.8989C11.6108 21.8329 11.5478 21.7403 11.5184 21.6353L9.93743 15.5002Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 3V7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 5H18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 17V19"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18H3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SparkleIcon;
