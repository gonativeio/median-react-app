import Button from 'components/Button';
import Median from 'median-js-bridge';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Home: React.FC = () => {
  const [appResumedListenerId, setAppResumedListenerId] = useState('');
  const [deviceShakeListenerId, setDeviceShakeListenerId] = useState('');
  const [shareToAppListenerId, setShareToAppListenerId] = useState('');

  useEffect(() => {
    Median.onReady(async () => {
      const { initialized } = await Median.branch.isInitialized()!;

      if (initialized) {
        const params = await Median.branch.getFirstParams();
        console.log(params)
      }else {
        const branchId = Median.branchInitialized.addListener(({ data }) => {
          console.log(data)
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

  // useEffect(() => {
    

  //   return () => Median.branchInitialized.removeListener(branchId);
  // }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Median React Demo</h1>
      <p className={styles.note}>
        App Only: To use this demo for testing open the current page within your
        Median.co app.
      </p>

      <div className={styles.content}>
        <h2 className={styles.section}>Built-in functions</h2>
        <Button className={styles.button} onClick={handleDeviceInfoClick}>
          Check Device Info
        </Button>

        <h2 className={styles.section}>median_app_resumed</h2>
        <Button className={styles.button} onClick={handleAppResumedClick}>
          {appResumedListenerId ? 'Remove Listener' : 'Add Listener'}
        </Button>

        <h2 className={styles.section}>median_device_shake (Haptics Plugin)</h2>
        <Button className={styles.button} onClick={handleDeviceShakeClick}>
          {deviceShakeListenerId ? 'Remove Listener' : 'Add Listener'}
        </Button>

        <h2 className={styles.section}>median_share_to_app (Share Plugin)</h2>
        <Button className={styles.button} onClick={handleShareToAppClick}>
          {shareToAppListenerId ? 'Remove Listener' : 'Add Listener'}
        </Button>
      </div>
    </div>
  );
};

export default Home;
