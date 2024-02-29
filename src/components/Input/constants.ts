import React from 'react';

export interface BaseProps {
  autoFocus?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  horizontal?: boolean;
  id?: string;
  label?: React.ReactNode;
  name?: string;
  onBlur?: () => void;
  onFocus?: () => void;
}

export interface InputChangeEvent<T = string> {
  value: T;
}
