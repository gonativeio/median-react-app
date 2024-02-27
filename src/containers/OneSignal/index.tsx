import Button from 'components/Button';
import Container from 'components/Container';
import Label from 'components/Label';
import TextAreaInput from 'components/TextAreaInput';
import Median from 'median-js-bridge';
import React, { useCallback, useState } from 'react';
import styles from './styles.module.scss';

const OneSignal: React.FC = () => {
  const [listenerId1, setListenerId1] = useState('');
  const [listenerId2, setListenerId2] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const handleClick1 = useCallback(() => {
    if (listenerId1) {
      Median.oneSignalPushOpened.removeListener(listenerId1);
      setListenerId1('');
    } else {
      setListenerId1(
        Median.oneSignalPushOpened.addListener((data) => {
          setValue1(JSON.stringify(data));
        }),
      );
    }
  }, [listenerId1]);

  const handleClick2 = useCallback(() => {
    if (listenerId2) {
      Median.oneSignalPushOpened.removeListener(listenerId2);
      setListenerId2('');
    } else {
      setListenerId2(
        Median.oneSignalPushOpened.addListener((data) => {
          setValue2(JSON.stringify(data));
        }),
      );
    }
  }, [listenerId2]);

  return (
    <Container innerClassName={styles.container}>
      <Label size="xl">One Signal Push Opened</Label>

      <div className={styles.content}>
        <div className={styles.section}>
          <Label size="lg">Listener 1</Label>

          <Button
            onClick={handleClick1}
            type={listenerId1 ? 'tertiary' : 'primary'}
          >
            {listenerId1 ? 'Remove Listener' : 'Add Listener'}
          </Button>

          <TextAreaInput
            containerClassName={styles.result}
            label="Callback"
            onChange={setValue1}
            value={value1}
          />
        </div>

        <div className={styles.section}>
          <Label size="lg">Listener 2</Label>

          <Button
            onClick={handleClick2}
            type={listenerId2 ? 'tertiary' : 'primary'}
          >
            {listenerId2 ? 'Remove Listener' : 'Add Listener'}
          </Button>

          <TextAreaInput
            containerClassName={styles.result}
            label="Callback"
            onChange={setValue2}
            value={value2}
          />
        </div>
      </div>
    </Container>
  );
};

export default OneSignal;
