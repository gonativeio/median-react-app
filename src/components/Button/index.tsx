import classNames from 'classnames';
import Loader from 'components/Loader';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './styles.module.scss';

export type ButtonType = 'link' | 'primary' | 'secondary' | 'text';

interface ButtonBaseProps {
  disabled?: boolean;
  isLoading?: boolean;
  isSubmit?: boolean;
  type?: ButtonType;
}

export type ButtonProps = ButtonBaseProps &
  (LinkProps | React.HTMLAttributes<HTMLButtonElement>);

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, disabled, isLoading, isSubmit, type } = props;

  if ((props as LinkProps).to) {
    return (
      <Link
        {...(props as LinkProps)}
        className={classNames(
          styles.button,
          {
            [styles.disabled]: disabled,
            [styles.link]: type === 'link',
            [styles.primary]: type === 'primary',
            [styles.secondary]: type === 'secondary',
            [styles.text]: type === 'text',
          },
          className,
        )}
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
          [styles.disabled]: disabled,
          [styles.link]: type === 'link',
          [styles.primary]: type === 'primary',
          [styles.secondary]: type === 'secondary',
          [styles.text]: type === 'text',
        },
        className,
      )}
      disabled={disabled || isLoading}
      type={isSubmit ? 'submit' : 'button'}
    >
      {isLoading ? (
        <div className={styles.loader}>
          <Loader size="sm" />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
