import React from 'react';

interface Props {
  className?: string;
}

const IconDocs: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.25 7.5H19.5V9H14.25V7.5ZM14.25 11.25H19.5V12.75H14.25V11.25ZM14.25 15H19.5V16.5H14.25V15Z"
        fill="currentColor"
      />
      <path
        d="M21 3.75H3C2.6023 3.7504 2.221 3.90856 1.93978 4.18978C1.65856 4.471 1.5004 4.8523 1.5 5.25V18.75C1.5004 19.1477 1.65856 19.529 1.93978 19.8102C2.221 20.0914 2.6023 20.2496 3 20.25H21C21.3976 20.2494 21.7788 20.0912 22.06 19.81C22.3412 19.5288 22.4994 19.1476 22.5 18.75V5.25C22.4996 4.8523 22.3414 4.471 22.0602 4.18978C21.779 3.90856 21.3977 3.7504 21 3.75ZM3 5.25H11.25V18.75H3V5.25ZM12.75 18.75V5.25H21L21.0015 18.75H12.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconDocs;
