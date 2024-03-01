import Button from 'components/Button';
import Container from 'components/Container';
import Label from 'components/Label';
import Median from 'median-js-bridge';
import React, { useCallback, useState } from 'react';
import styles from './styles.module.scss';

const Haptics: React.FC = () => {
  const [listenerId, setListenerId] = useState('');
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    if (listenerId) {
      Median.deviceShake.removeListener(listenerId);
      setListenerId('');
    } else {
      const id = Median.deviceShake.addListener(() => {
        window.alert('Device did shake!');
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
      title="Haptics Plugin"
    >
      <Label>{`median_device_shake invocation count: ${count}`}</Label>
      <Button onClick={handleClick} type="secondary">
        {listenerId ? 'Remove Listener' : 'Add Listener'}
      </Button>
    </Container>
  );
};

export default Haptics;
