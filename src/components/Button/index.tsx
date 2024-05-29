import React, { forwardRef } from 'react';

import classNames from 'classnames';
import { Link, LinkProps } from 'react-router-dom';
import styles from './styles.module.scss';

export type BaseProps = {
  containerClassName?: string;
  disabled?: boolean;
  isSubmit?: boolean;
  type?: 'link';
};

export type ButtonProps = BaseProps &
  (LinkProps | React.HTMLAttributes<HTMLButtonElement>);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      containerClassName,
      disabled,
      isSubmit,
      type = 'link',
      ...props
    },
    ref,
  ) => {
    if ((props as LinkProps).to) {
      return (
        <Link
          {...(props as LinkProps)}
          className={classNames(
            styles.button,
            {
              [styles.link]: type === 'link',
            },
            className,
          )}
          to={(props as LinkProps).to as string}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        {...(props as React.HTMLAttributes<HTMLButtonElement>)}
        className={classNames(
          styles.button,
          {
            [styles.link]: type === 'link',
          },
          className,
        )}
        ref={ref}
        type={isSubmit ? 'submit' : 'button'}
      >
        {children}
      </button>
    );
  },
);

export default Button;
