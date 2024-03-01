import Button from 'components/Button';
import Container from 'components/Container';
import Label from 'components/Label';
import Median from 'median-js-bridge';
import React, { useCallback, useState } from 'react';
import styles from './styles.module.scss';

const AppResumedEvent: React.FC = () => {
  const [listenerId, setListenerId] = useState('');
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    if (listenerId) {
      Median.appResumed.removeListener(listenerId);
      setListenerId('');
    } else {
      const id = Median.appResumed.addListener(() => {
        window.alert('App resumed callback!');
        setCount(count + 1);
      });
      setListenerId(id);
    }
  }, [count, listenerId]);

  return (
    <Container
      footerType="none"
      headerType="back"
      innerClassName={styles.container}
      title="App Resumed Event"
    >
      <Label>{`median_app_resumed invocation count: ${count}`}</Label>
      <Button onClick={handleClick} type="secondary">
        {listenerId ? 'Remove Listener' : 'Add Listener'}
      </Button>
    </Container>
  );
};

export default AppResumedEvent;
