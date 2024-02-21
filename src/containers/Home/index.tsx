import Button from 'components/Button';
import Container from 'components/Container';
import Label from 'components/Label';
import Median from 'median-js-bridge';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface Props {
  onChangeSection: (value: string) => void;
}

const Home: React.FC<Props> = ({ onChangeSection }) => {
  const [appResumedListenerId, setAppResumedListenerId] = useState('');
  const [deviceShakeListenerId, setDeviceShakeListenerId] = useState('');
  const [shareToAppListenerId, setShareToAppListenerId] = useState('');

  useEffect(() => {
    Median.onReady(async () => {
      const { initialized } = await Median.branch.isInitialized()!;

      if (initialized) {
        const params = await Median.branch.getFirstParams();
        console.log(params);
      } else {
        const branchId = Median.branchInitialized.addListener(({ data }) => {
          console.log(branchId);
          console.log(data);
        });
      }
    });
  }, []);

  const handleDeviceInfoClick = useCallback(async () => {
    const isNativeApp = Median.isNativeApp();
    const platform = await Median.getPlatform();
    window.alert(`isNativeApp: ${isNativeApp}, getPlatform: ${platform}`);
  }, []);

  const handleAppResumedClick = useCallback(() => {
    if (appResumedListenerId) {
      Median.appResumed.removeListener(appResumedListenerId);
      setAppResumedListenerId('');
    } else {
      const listenerId = Median.appResumed.addListener(() => {
        window.alert('App resumed callback!');
      });
      setAppResumedListenerId(listenerId);
    }
  }, [appResumedListenerId]);

  const handleDeviceShakeClick = useCallback(() => {
    if (deviceShakeListenerId) {
      Median.deviceShake.removeListener(deviceShakeListenerId);
      setDeviceShakeListenerId('');
    } else {
      const listenerId = Median.deviceShake.addListener(() => {
        window.alert('Device shake callback!');
      });
      setDeviceShakeListenerId(listenerId);
    }
  }, [deviceShakeListenerId]);

  const handleShareToAppClick = useCallback(() => {
    if (shareToAppListenerId) {
      Median.shareToApp.removeListener(shareToAppListenerId);
      setShareToAppListenerId('');
    } else {
      const listenerId = Median.shareToApp.addListener((data) => {
        window.alert(`${data.url} - ${data.subject}`);
      });
      setShareToAppListenerId(listenerId);
    }
  }, [shareToAppListenerId]);

  return (
    <Container innerClassName={styles.container}>
      <Label size="xl">Median React Demo</Label>

      <Label size="lg" type="error">
        App Only: To use this demo for testing open the current page within your
        Median.co app.
      </Label>

      <div className={styles.content}>
        <div className={styles.section}>
          <Label size="md">Built-in functions</Label>
          <Button onClick={handleDeviceInfoClick}>Check Device Info</Button>
        </div>

        <div className={styles.section}>
          <Label size="md">median_app_resumed</Label>
          <Button onClick={handleAppResumedClick}>
            {appResumedListenerId ? 'Remove Listener' : 'Add Listener'}
          </Button>
        </div>

        <div className={styles.section}>
          <Label size="md">median_device_shake (Haptics Plugin)</Label>
          <Button onClick={handleDeviceShakeClick}>
            {deviceShakeListenerId ? 'Remove Listener' : 'Add Listener'}
          </Button>
        </div>

        <div className={styles.section}>
          <Label size="md">median_share_to_app (Share Plugin)</Label>
          <Button onClick={handleShareToAppClick}>
            {shareToAppListenerId ? 'Remove Listener' : 'Add Listener'}
          </Button>
        </div>

        <div className={styles.section}>
          <Label size="md">Background Location</Label>
          <Button onClick={() => onChangeSection('background-location')}>
            Background Location Demo
          </Button>
        </div>

        <div className={styles.section}>
          <Label size="md">One Signal</Label>
          <Button onClick={() => onChangeSection('onesignal')}>
            One Signal Push Opened Demo
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
