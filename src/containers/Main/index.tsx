import Content from 'containers/Content';
import Header from 'containers/Header';
import Timestamp from 'containers/Timestamp';
import React, { useEffect } from 'react';
import styles from './styles.module.scss';

const Main: React.FC = () => {
  useEffect(() => {
    // Median.jsNavigation.url.addListener((data) => {
    //   console.log(data);
    // });
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Content />
      <Timestamp />
    </div>
  );
};

export default Main;
