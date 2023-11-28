import React, { forwardRef } from 'react';

import classNames from 'classnames';
import styles from './styles.module.scss';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  containerClassName?: string;
  disabled?: boolean;
  isSubmit?: boolean;
  type?: 'primary' | 'text';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      containerClassName,
      disabled,
      isSubmit,
      type = 'primary',
      ...props
    },
    ref,
  ) => {
    return (
      <div className={classNames(styles.container, containerClassName)}>
        <button
          {...props}
          className={classNames(styles.button, className)}
          disabled={disabled}
          ref={ref}
          type={isSubmit ? 'submit' : 'button'}
        >
          {children}
        </button>
      </div>
    );
  },
);

export default Button;
