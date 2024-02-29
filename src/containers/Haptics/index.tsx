import Button from 'components/Button';
import Container from 'components/Container';
import Median from 'median-js-bridge';
import React, { useCallback, useState } from 'react';
import styles from './styles.module.scss';

const Haptics: React.FC = () => {
  const [listenerId, setListenerId] = useState('');

  const handleClick = useCallback(() => {
    if (listenerId) {
      Median.deviceShake.removeListener(listenerId);
      setListenerId('');
    } else {
      const id = Median.deviceShake.addListener(() => {
        window.alert('Device did shake!');
      });
      setListenerId(id);
    }
  }, [listenerId]);

  return (
    <Container
      footerType="none"
      headerType="back"
      innerClassName={styles.container}
      title="Haptics Plugin"
    >
      <Button onClick={handleClick} type="secondary">
        {listenerId ? 'Remove Listener' : 'Add Listener'}
      </Button>
    </Container>
  );
};

export default Haptics;
