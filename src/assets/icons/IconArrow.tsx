import React, { useMemo } from 'react';

interface Props {
  className?: string;
  direction?: 'down' | 'left' | 'right' | 'up';
  type: 'chevron' | 'arrow';
}

const IconArrow: React.FC<Props> = ({
  className,
  direction = 'left',
  type = 'arrow',
}) => {
  const transform = useMemo(() => {
    const mapping = {
      down: 'rotateZ(90deg)',
      left: 'scale(-1, 1)',
      right: 'scale(1, 1)',
      up: 'rotateZ(270deg)',
    };
    return mapping[direction];
  }, [direction]);

  if (type === 'arrow') {
    return (
      <svg
        className={className}
        transform={transform}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 4.5L12.4275 5.54475L18.1125 11.25H3V12.75H18.1125L12.4275 18.4298L13.5 19.5L21 12L13.5 4.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === 'chevron') {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        transform={transform}
        viewBox="0 0 320 512"
      >
        <path
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return null;
};

export default IconArrow;
