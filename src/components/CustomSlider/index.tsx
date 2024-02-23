import React, { useCallback } from 'react';

interface Props {
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  value?: number;
}

const CustomSlider: React.FC<Props> = ({
  min = Number.MIN_VALUE,
  max = Number.MAX_VALUE,
  step = 1,
  onChange = () => null,
  value,
}) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(parseInt(event.target.value));
    },
    [onChange],
  );

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleChange}
    />
  );
};

export default CustomSlider;
