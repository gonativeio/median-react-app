import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode;
  className?: string;
  size?: 'xl' | 'lg' | 'md' | 'sm';
  type?: 'default' | 'error' | 'info' | 'warning';
}

const Label: React.FC<Props> = ({
  children,
  className,
  size = 'md',
  type = 'default',
}) => {
  return (
    <div
      className={classNames(
        styles.container,
        {
          [styles.default]: type === 'default',
          [styles.error]: type === 'error',
          [styles.info]: type === 'info',
          [styles.warning]: type === 'warning',
          [styles.xl]: size === 'xl',
          [styles.lg]: size === 'lg',
          [styles.md]: size === 'md',
          [styles.sm]: size === 'sm',
        },
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Label;
