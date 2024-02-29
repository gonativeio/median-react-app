import classNames from 'classnames';
import Button from 'components/Button';
import Label from 'components/Label';
import React, { useCallback } from 'react';
import { BaseProps, InputChangeEvent } from '../constants';
import styles from '../styles.module.scss';

export interface ToggleInputProps {
  onChange?: (event: InputChangeEvent<boolean>) => void;
  type: 'toggle';
  value?: boolean;
}

type Props = BaseProps & ToggleInputProps;

const ToggleInput: React.FC<Props> = ({
  className,
  disabled,
  horizontal,
  id,
  label,
  onChange = () => null,
  value = false,
}) => {
  const handleChange = useCallback(() => {
    onChange({ value: !value });
  }, [onChange, value]);

  return (
    <div
      className={classNames(
        styles.container,
        horizontal && styles.horizontal,
        className,
      )}
    >
      <Label htmlFor={id}>{label}</Label>

      <Button
        className={classNames(styles.toggleInput, value && styles.active)}
        disabled={disabled}
        onClick={handleChange}
      >
        <div className={classNames(styles.toggle, value && styles.active)} />
      </Button>
    </div>
  );
};

export default ToggleInput;
