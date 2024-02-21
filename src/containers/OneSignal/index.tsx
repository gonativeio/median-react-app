import Button from 'components/Button';
import Container from 'components/Container';
import Label from 'components/Label';
import TextAreaInput from 'components/TextAreaInput';
import Median from 'median-js-bridge';
import React, { useCallback, useState } from 'react';
import styles from './styles.module.scss';

const OneSignal: React.FC = () => {
  const [pushOpenedListenerId, setPushOpenedListenerId] = useState('');
  const [value, setValue] = useState('');

  const printResult = useCallback((data: any) => {
    console.log(data);
    setValue(JSON.stringify(data));
  }, []);

  const handleOneSignalPushOpenedClick = useCallback(() => {
    if (pushOpenedListenerId) {
      Median.oneSignalPushOpened.removeListener(pushOpenedListenerId);
      setPushOpenedListenerId('');
    } else {
      const listenerId = Median.oneSignalPushOpened.addListener((data) => {
        printResult(data);
      });
      setPushOpenedListenerId(listenerId);
    }
  }, [printResult, pushOpenedListenerId]);

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
