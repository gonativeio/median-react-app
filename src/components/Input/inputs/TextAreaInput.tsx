import classNames from 'classnames';
import Label from 'components/Label';
import React, { forwardRef, useCallback } from 'react';
import { BaseProps, InputChangeEvent } from '../constants';
import styles from '../styles.module.scss';

export interface TextAreaInputProps {
  autoCapitalize?: 'characters' | 'none' | 'off' | 'on' | 'sentences' | 'words';
  autoCorrect?: 'on' | 'off';
  defaultInputField?: boolean;
  inputClassName?: string;
  onChange?: (event: InputChangeEvent) => void;
  placeholder?: string;
  rows?: number;
  type: 'textarea';
  maxLength?: number;
  value?: string;
}

type Props = BaseProps & TextAreaInputProps;

const TextAreaInput = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      autoCapitalize,
      autoCorrect,
      autoFocus,
      className,
      disabled,
      id,
      inputClassName,
      label,
      maxLength,
      name,
      onBlur = () => null,
      onChange = () => null,
      onFocus = () => null,
      placeholder,
      rows = 4,
      value,
    },
    ref,
  ) => {
    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange({ value: event.target.value });
      },
      [onChange],
    );

    return (
      <div className={classNames(styles.container, className)}>
        <Label htmlFor={id}>{label}</Label>

        <div className={styles.inputContainer}>
          <textarea
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            autoFocus={autoFocus}
            className={classNames(
              styles.input,
              styles.textAreaInput,
              inputClassName,
            )}
            disabled={disabled}
            id={id}
            maxLength={maxLength}
            name={name}
            onBlur={onBlur}
            onChange={handleChange}
            onFocus={onFocus}
            placeholder={placeholder}
            ref={ref}
            rows={rows}
            value={value}
          />
        </div>
      </div>
    );
  },
);

export default TextAreaInput;
