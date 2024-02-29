import Button from 'components/Button';
import Container from 'components/Container';
import Median from 'median-js-bridge';
import React from 'react';
import styles from './styles.module.scss';

const NpmSpecificFunctions: React.FC = () => {
  return (
    <Container
      footerType="none"
      headerType="back"
      innerClassName={styles.container}
      title="NPM Specific Functions"
    >
      <Button
        onClick={() => {
          const data = Median.isNativeApp();
          window.alert(`isNativeApp: ${data}`);
        }}
        type="secondary"
      >
        Check if Native App
      </Button>
      <Button
        onClick={async () => {
          const platform = await Median.getPlatform();
          window.alert(`Platform: ${platform}`);
        }}
        type="secondary"
      >
        Get Platform
      </Button>
    </Container>
  );
};

export default NpmSpecificFunctions;
