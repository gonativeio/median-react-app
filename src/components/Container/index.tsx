import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode;
  innerClassName?: string;
  outerClassName?: string;
}

const Container: React.FC<Props> = ({
  children,
  innerClassName,
  outerClassName,
}) => {
  return (
    <div className={classNames(styles.outerContainer, outerClassName)}>
      <div className={classNames(styles.innerContainer, innerClassName)}>
        {children}
      </div>
    </div>
  );
};

export default Container;
