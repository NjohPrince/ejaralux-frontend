import React from "react";

import { IconProps } from "@/shared/types/icon.type";

const EyeOpenIcon: React.FC<IconProps> = ({
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
        d="M2.062 12.348C1.97866 12.1235 1.97866 11.8765 2.062 11.652C2.8737 9.68385 4.25152 8.00103 6.02077 6.81689C7.79003 5.63275 9.87105 5.00061 12 5.00061C14.129 5.00061 16.21 5.63275 17.9792 6.81689C19.7485 8.00103 21.1263 9.68385 21.938 11.652C22.0213 11.8765 22.0213 12.1235 21.938 12.348C21.1263 14.3161 19.7485 15.999 17.9792 17.1831C16.21 18.3672 14.129 18.9994 12 18.9994C9.87105 18.9994 7.79003 18.3672 6.02077 17.1831C4.25152 15.999 2.8737 14.3161 2.062 12.348Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeOpenIcon;
