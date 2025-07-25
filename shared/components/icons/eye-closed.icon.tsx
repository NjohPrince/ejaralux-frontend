import React from "react";

import { IconProps } from "@/shared/types/icon.type";

const EyeClosedIcon: React.FC<IconProps> = ({
  size,
  color = "#aebac6",
  strokeWidth = "1.5",
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
        d="M10.733 5.07599C13.0624 4.7984 15.4186 5.29081 17.4419 6.47804C19.4651 7.66527 21.0442 9.48207 21.938 11.651C22.0213 11.8755 22.0213 12.1225 21.938 12.347C21.5705 13.238 21.0848 14.0755 20.494 14.837"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.084 14.158C13.5182 14.7045 12.7604 15.0069 11.9738 15C11.1872 14.9932 10.4348 14.6777 9.87854 14.1215C9.32232 13.5652 9.00681 12.8128 8.99998 12.0262C8.99314 11.2396 9.29552 10.4818 9.842 9.91602"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.479 17.499C16.1525 18.2848 14.6725 18.776 13.1394 18.9394C11.6063 19.1028 10.056 18.9345 8.59363 18.4459C7.13131 17.9573 5.7912 17.1599 4.66421 16.1078C3.53723 15.0556 2.64975 13.7734 2.062 12.348C1.97866 12.1235 1.97866 11.8765 2.062 11.652C2.94863 9.50186 4.50867 7.69725 6.508 6.509"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 2L22 22"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeClosedIcon;
