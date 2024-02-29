import Button from 'components/Button';
import Container from 'components/Container';
import Median from 'median-js-bridge';
import React, { useCallback, useState } from 'react';
import styles from './styles.module.scss';

const AppResumedEvent: React.FC = () => {
  const [listenerId, setListenerId] = useState('');

  const handleClick = useCallback(() => {
    if (listenerId) {
      Median.appResumed.removeListener(listenerId);
      setListenerId('');
    } else {
      const id = Median.appResumed.addListener(() => {
        window.alert('App resumed callback!');
      });
      setListenerId(id);
    }
  }, [listenerId]);

  return (
    <Container
      footerType="none"
      headerType="back"
      innerClassName={styles.container}
      title="App Resumed Event"
    >
      <Button onClick={handleClick} type="secondary">
        {listenerId ? 'Remove Listener' : 'Add Listener'}
      </Button>
    </Container>
  );
};

export default AppResumedEvent;
