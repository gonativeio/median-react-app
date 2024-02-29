import IconArrow from 'assets/icons/IconArrow';
import IconNewWindow from 'assets/icons/IconNewWindow';
import Button from 'components/Button';
import Container from 'components/Container';
import Label from 'components/Label';
import Section from 'components/Section';
import React, { useMemo } from 'react';
import styles from './styles.module.scss';

const Home: React.FC = () => {
  const general = useMemo(
    () => [
      {
        docs: 'https://median.co/docs/npm-package#javascript-bridge-methods-specific-to-npm-package',
        label: 'NPM Specific Functions',
        url: 'npm-specific-functions',
      },
      {
        docs: 'https://median.co/docs/npm-package#app-resumed-event',
        label: 'App Resumed Event',
        url: 'app-resumed-event',
      },
    ],
    [],
  );

  const plugins = useMemo(
    () => [
      {
        docs: 'https://median.co/docs/npm-package#haptics-plugin',
        image: 'https://cdn.median.co/images/plugins/plugin_haptics.svg',
        label: 'Haptics Plugin',
        url: 'haptics',
      },
      {
        docs: 'https://median.co/docs/onesignal',
        image: 'https://cdn.median.co/images/plugins/plugin_onesignal.svg',
        label: 'OneSignal Plugin',
        url: 'onesignal',
      },
      {
        docs: 'https://median.co/docs/npm-package#share-into-app-plugin',
        image: 'https://cdn.median.co/images/plugins/plugin_share.svg',
        label: 'Share into App',
        url: 'share-into-app',
      },
    ],
    [],
  );

  return (
    <Container
      innerClassName={styles.container}
      footerType="default"
      headerType="default"
    >
      <Section items={general} title="General" />

      <Section items={plugins} title="Native Plugins" />

      <div className={styles.supportContainer}>
        <Label size="h1" type="light">
          Support at your Service
        </Label>

        <Label className={styles.description} size="h4" type="light">
          Get answers in our public support portal, or add a support plan for
          one-on-one help from our experienced engineering team.
        </Label>

        <div className={styles.buttonsContainer}>
          <Button
            className={styles.buttonItem}
            to="https://median.co/discuss"
            type="primary"
          >
            Go to support portal
            <IconNewWindow />
          </Button>

          <Button
            className={styles.buttonItem}
            to="https://median.co/contact"
            type="primary"
          >
            Contact Engineering
            <IconArrow direction="right" type="arrow" />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
