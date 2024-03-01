import Button from 'components/Button';
import Container from 'components/Container';
import Input from 'components/Input';
import Median from 'median-js-bridge';
import React, { useCallback, useState } from 'react';
import styles from './styles.module.scss';

const ShareIntoApp: React.FC = () => {
  const [listenerId, setListenerId] = useState('');
  const [value, setValue] = useState('');

  const handleClick = useCallback(() => {
    if (listenerId) {
      Median.shareToApp.removeListener(listenerId);
      setListenerId('');
    } else {
      const id = Median.shareToApp.addListener((data) => {
        setValue(`${data.subject} - ${data.url}`);
      });
      setListenerId(id);
    }
  }, [listenerId]);

  return (
    <Container
      footerType="none"
      headerType="back"
      innerClassName={styles.container}
      title="Share into App"
    >
      <Input
        label="median_share_to_app callback"
        onChange={(e) => setValue(e.value)}
        type="textarea"
        value={value}
      />

      <Button onClick={handleClick} type="secondary">
        {listenerId ? 'Remove Listener' : 'Add Listener'}
      </Button>
    </Container>
  );
};

export default ShareIntoApp;
