import classNames from 'classnames';
import React from 'react';

import IconSpinner from 'assets/icons/IconSpinner';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  color?: string;
  size?: 'lg' | 'md' | 'sm';
}

const Loader: React.FC<Props> = ({ className, color, size = 'md' }) => (
  <div className={classNames(styles.container, className)}>
    <IconSpinner
      className={classNames(styles.icon, {
        [styles.lg]: size === 'lg',
        [styles.md]: size === 'md',
        [styles.sm]: size === 'sm',
      })}
      color={color}
    />
  </div>
);

export default Loader;
