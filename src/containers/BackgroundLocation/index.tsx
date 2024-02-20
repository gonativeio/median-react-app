import Button from 'components/Button';
import Container from 'components/Container';
import Label from 'components/Label';
import TextAreaInput from 'components/TextAreaInput';
import Median from 'median-js-bridge';
import React, { useCallback, useState } from 'react';
import styles from './styles.module.scss';

const BackgroundLocation: React.FC = () => {
  const [value, setValue] = useState('');

  const printResult = useCallback((data: any) => {
    console.log(data);
    setValue(JSON.stringify(data));
    Median.backgroundLocation.stop();
  }, []);

  const getLocation = useCallback(async () => {
    if (Median.isNativeApp()) {
      Median.backgroundLocation.start({
        callback: printResult,
        iosBackgroundIndicator: true,
        iosPauseAutomatically: true,
        iosDesiredAccuracy: 'bestForNavigation',
        iosActivityType: 'automotiveNavigation',
        androidPriority: 'highAccuracy',
      });
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          printResult({
            accuracy: position.coords.accuracy,
            altitude: position.coords.altitude,
            altitudeAccuracy: position.coords.altitudeAccuracy,
            heading: position.coords.heading,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            speed: position.coords.speed,
            timstamp: position.timestamp,
          }),
        (error) => printResult(error),
      );
    }
  }, [printResult]);

  return (
    <Container innerClassName={styles.container}>
      <Label size="xl">Background Location Plugin</Label>

      <div className={styles.content}>
        <Button onClick={getLocation}>Get Location</Button>

        <TextAreaInput label="Result" onChange={setValue} value={value} />
      </div>
    </Container>
  );
};

export default BackgroundLocation;
