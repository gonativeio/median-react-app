import React, { ForwardedRef, forwardRef } from 'react';

import { InputChangeEvent } from './constants';
import RadioInput, { RadioInputProps } from './inputs/RadioInput';
import SelectInput, { SelectInputProps } from './inputs/SelectInput';
import TextAreaInput, { TextAreaInputProps } from './inputs/TextAreaInput';
import TextInput, { TextInputProps } from './inputs/TextInput';
import ToggleInput, { ToggleInputProps } from './inputs/ToggleInput';

export type InputProps =
  | RadioInputProps
  | SelectInputProps
  | TextAreaInputProps
  | TextInputProps
  | ToggleInputProps;

const Input: React.FC<InputProps> = forwardRef((props, ref) => {
  if (
    props.type === 'email' ||
    props.type === 'password' ||
    props.type === 'text' ||
    props.type === 'search' ||
    props.type === 'url'
  ) {
    return <TextInput ref={ref as ForwardedRef<HTMLInputElement>} {...props} />;
  }

  if (props.type === 'radio') {
    return <RadioInput {...props} />;
  }

  if (props.type === 'select') {
    return <SelectInput {...props} />;
  }

  if (props.type === 'textarea') {
    return (
      <TextAreaInput
        ref={ref as ForwardedRef<HTMLTextAreaElement>}
        {...props}
      />
    );
  }

  if (props.type === 'toggle') {
    return <ToggleInput {...props} />;
  }

  return null;
});

export default Input;

export type { InputChangeEvent };
