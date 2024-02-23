import Button from 'components/Button';
import Container from 'components/Container';
import Label from 'components/Label';
import TextAreaInput from 'components/TextAreaInput';
import React, { useCallback, useState } from 'react';
import styles from './styles.module.scss';

const OneSignal: React.FC = () => {
  const [pushOpenedListenerId, setPushOpenedListenerId] = useState('');
  const [value, setValue] = useState('');

  const handleOneSignalPushOpenedClick = useCallback(() => {
    if (pushOpenedListenerId) {
      setPushOpenedListenerId('');
    }
  }, [pushOpenedListenerId]);

  return (
    <Container innerClassName={styles.container}>
      <Label size="xl">One Signal Push Opened</Label>

      <div className={styles.content}>
        <div className={styles.section}>
          <Label size="md">median_onesignal_push_opened</Label>
          <Button onClick={handleOneSignalPushOpenedClick}>
            {pushOpenedListenerId ? 'Remove Listener' : 'Add Listener'}
          </Button>
        </div>

        <TextAreaInput label="Result" onChange={setValue} value={value} />
      </div>
    </Container>
  );
};

export default OneSignal;
