import IconArrow from 'assets/icons/IconArrow';
import classNames from 'classnames';
import Button from 'components/Button';
import Label from 'components/Label';
import { useClickOutside } from 'hooks';
import React, { useCallback, useRef, useState } from 'react';
import { BaseProps, InputChangeEvent } from '../constants';
import styles from './styles.module.scss';

interface Option {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface SelectInputProps {
  onChange?: (event: InputChangeEvent<string>) => void;
  options: Option[];
  optionClassName?: string;
  placeholder?: string;
  showDropdownIcon?: boolean;
  topPosition?: number;
  type: 'select';
  value?: string;
}

type Props = BaseProps & SelectInputProps;

const SelectInput: React.FC<Props> = ({
  children,
  className,
  id,
  label,
  onChange = () => null,
  options = [],
  optionClassName,
  placeholder = 'Select',
  showDropdownIcon,
  topPosition = 36,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleSelect = useCallback(
    (value: string) => {
      onChange({ value });
      setIsOpen(false);
    },
    [onChange],
  );

  useClickOutside({
    onClickOutside: handleClickOutside,
    ref: containerRef,
  });

  return (
    <div className={classNames(styles.container, className)}>
      <Label htmlFor={id}>{label}</Label>

      <div className={styles.selectInput} ref={containerRef}>
        <Button className={className} onClick={() => setIsOpen(!isOpen)}>
          {children || value || placeholder}

          {showDropdownIcon && (
            <IconArrow
              className={styles.indicatorIcon}
              direction={isOpen ? 'up' : 'down'}
              type="chevron"
            />
          )}
        </Button>

        {isOpen && (
          <div className={styles.optionsContainer} style={{ top: topPosition }}>
            {options.map((item) => (
              <Button
                className={classNames(styles.optionsItem, optionClassName)}
                onClick={() => handleSelect(item.value)}
                key={item.value}
              >
                {item.icon}
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
