import React from 'react';

interface Props {
  className?: string;
}

const Info: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="80px"
    height="80px"
    viewBox="0 0 90 90"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs></defs>

    <title>info-bubble</title>

    <g id="info-bubble">
      <g id="info-bubble-2" data-name="info-bubble">
        <g id="fill">
          <path
            fill="#ff8898"
            d="M45,1.88A43.09,43.09,0,0,0,7.42,66.12L1.88,83.5,18.48,79A43.11,43.11,0,1,0,45,1.88Z"
          />

          <circle fill="#ffbcc5" cx="45" cy="45" r="32.34" />
        </g>

        <g id="outline">
          <path
            fill="#576065"
            d="M45,90a44.51,44.51,0,0,1-26.92-9L2.37,85.31A1.87,1.87,0,0,1,.09,82.93l5.3-16.61A45,45,0,1,1,45,90ZM18.48,77.09a1.88,1.88,0,0,1,1.15.4A40.82,40.82,0,0,0,45,86.25a41.29,41.29,0,1,0-35.94-21,1.87,1.87,0,0,1,.15,1.49L4.71,80.78,18,77.15A1.9,1.9,0,0,1,18.48,77.09Z"
          />

          <path
            fill="#576065"
            d="M45.15,59.25H41.4V50.07a1.87,1.87,0,0,1,1.88-1.87c8.62,0,14.64-5.31,14.64-12.91s-4.8-12.91-11.68-12.91c-7.4,0-14.14,6.51-14.14,13.65H28.34c0-9.27,8.36-17.4,17.89-17.4,8.94,0,15.43,7,15.43,16.66,0,9.08-6.84,15.81-16.51,16.59Z"
          />

          <rect fill="#576065" x="41.4" y="64.96" width="3.75" height="4.54" />
        </g>
      </g>
    </g>
  </svg>
);

export default Info;
