import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

export type LabelSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'lg' | 'md' | 'sm';

export type LabelType = 'default' | 'error' | 'light';

interface Props {
  children?: React.ReactNode;
  className?: string;
  htmlFor?: string;
  size?: LabelSize;
  type?: LabelType;
}

const Label: React.FC<Props> = ({
  children,
  className,
  htmlFor,
  size = 'md',
  type = 'default',
}) => {
  if (!children) {
    return null;
  }

  if (htmlFor) {
    return (
      <label
        className={classNames(
          styles.label,
          {
            [styles.error]: type === 'error',
            [styles.light]: type === 'light',
            [styles.h1]: size === 'h1',
            [styles.h2]: size === 'h2',
            [styles.h3]: size === 'h3',
            [styles.h4]: size === 'h4',
            [styles.h5]: size === 'h5',
            [styles.lg]: size === 'lg',
            [styles.md]: size === 'md',
            [styles.sm]: size === 'sm',
          },
          className,
        )}
        htmlFor={htmlFor}
      >
        {children}
      </label>
    );
  }

  return (
    <span
      className={classNames(
        styles.label,
        {
          [styles.error]: type === 'error',
          [styles.light]: type === 'light',
          [styles.h1]: size === 'h1',
          [styles.h2]: size === 'h2',
          [styles.h3]: size === 'h3',
          [styles.h4]: size === 'h4',
          [styles.h5]: size === 'h5',
          [styles.lg]: size === 'lg',
          [styles.md]: size === 'md',
          [styles.sm]: size === 'sm',
        },
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Label;
