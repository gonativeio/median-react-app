import Container from 'components/Container';
import React from 'react';
import styles from './styles.module.scss';

const OneSignal: React.FC = () => {
  return (
    <Container
      outerClassName={styles.outer}
      innerClassName={styles.container}
    ></Container>
  );
};

export default OneSignal;
