import React, { forwardRef } from 'react';

import classNames from 'classnames';
import { Link, LinkProps } from 'react-router-dom';
import urlJoin from 'url-join';
import { root } from 'utils/constants';
import styles from './styles.module.scss';

export type BaseProps = {
  containerClassName?: string;
  disabled?: boolean;
  isSubmit?: boolean;
  type?: 'primary' | 'secondary' | 'tertiary';
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
      type = 'primary',
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
              [styles.primary]: type === 'primary',
              [styles.secondary]: type === 'secondary',
              [styles.tertiary]: type === 'tertiary',
            },
            className,
          )}
          to={urlJoin(root, (props as LinkProps).to as string)}
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
            [styles.primary]: type === 'primary',
            [styles.secondary]: type === 'secondary',
            [styles.tertiary]: type === 'tertiary',
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
