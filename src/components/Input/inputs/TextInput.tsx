import classNames from 'classnames';
import Label from 'components/Label';
import React, { forwardRef, useCallback } from 'react';
import { BaseProps, InputChangeEvent } from '../constants';
import styles from '../styles.module.scss';

export interface TextInputProps {
  autoCapitalize?: 'characters' | 'none' | 'off' | 'on' | 'sentences' | 'words';
  autoCorrect?: 'on' | 'off';
  autoComplete?: string;
  inputClassName?: string;
  onChange?: (event: InputChangeEvent) => void;
  placeholder?: string;
  type: 'email' | 'password' | 'text' | 'search' | 'url';
  value?: string;
  maxLength?: number;
}

type Props = BaseProps & TextInputProps;

const TextInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      autoComplete = 'off',
      autoCapitalize,
      autoCorrect,
      autoFocus,
      className,
      disabled,
      id,
      inputClassName,
      label,
      name,
      maxLength,
      onBlur = () => null,
      onChange = () => null,
      onFocus = () => null,
      placeholder,
      type,
      value,
    },
    ref,
  ) => {
    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ value: event.target.value });
      },
      [onChange],
    );

    return (
      <div className={classNames(styles.container, className)}>
        <Label htmlFor={id}>{label}</Label>

        <div className={styles.inputContainer}>
          <input
            autoCapitalize={autoCapitalize}
            autoComplete={autoComplete}
            autoCorrect={autoCorrect}
            autoFocus={autoFocus}
            className={classNames(
              styles.input,
              styles.textInput,
              inputClassName,
            )}
            disabled={disabled}
            id={id}
            name={name}
            onBlur={onBlur}
            onChange={handleChange}
            onFocus={onFocus}
            placeholder={placeholder}
            ref={ref}
            type={['email', 'search'].includes(type) ? 'text' : type}
            value={value || ''}
            maxLength={maxLength}
          />
        </div>
      </div>
    );
  },
);

export default TextInput;
