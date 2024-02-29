import IconCheck from 'assets/icons/IconCheck';
import classNames from 'classnames';
import Button from 'components/Button';
import Label from 'components/Label';
import React, { useCallback } from 'react';
import { BaseProps, InputChangeEvent } from '../constants';
import styles from '../styles.module.scss';

export interface RadioInputOption {
  label: string;
  value: string;
}

export interface RadioInputProps {
  allowEmpty?: boolean;
  allowMultiple?: boolean;
  onChange?: (event: InputChangeEvent<string[]>) => void;
  options: RadioInputOption[];
  type: 'radio';
  value?: string[];
}

type Props = BaseProps & RadioInputProps;

const RadioInput: React.FC<Props> = ({
  allowEmpty,
  allowMultiple,
  className,
  disabled,
  id,
  label,
  onChange = () => null,
  options = [],
  value = [],
}) => {
  const handleChange = useCallback(
    (option: string) => {
      if (!value.includes(option)) {
        if (allowMultiple) {
          onChange({ value: [...value, option] });
        } else {
          onChange({ value: [option] });
        }
      } else if (allowEmpty || value.length > 1) {
        onChange({ value: value.filter((i) => i !== option) });
      }
    },
    [allowEmpty, allowMultiple, onChange, value],
  );

  return (
    <div className={classNames(styles.container, className)}>
      <Label htmlFor={id}>{label}</Label>

      <div className={styles.radioInput}>
        {options.map((option) => (
          <Button
            className={styles.radioItem}
            disabled={disabled}
            key={option.value}
            onClick={() => handleChange(option.value)}
          >
            <div
              className={classNames(
                styles.radioItemBox,
                value.includes(option.value) && styles.selected,
              )}
            >
              {value.includes(option.value) && (
                <div className={styles.radioItemIcon}>
                  <IconCheck />
                </div>
              )}
            </div>

            <span className={styles.radioItemValue}>{option.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default RadioInput;
