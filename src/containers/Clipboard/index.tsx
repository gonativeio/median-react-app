import Button from 'components/Button';
import Container from 'components/Container';
import Input from 'components/Input';
import Median from 'median-js-bridge';
import React, { useState } from 'react';
import styles from './styles.module.scss';

const Clipboard: React.FC = () => {
  const [copyAreaValue, setCopyAreaValue] = useState(
    'Text to be copied to clipboard',
  );
  const [pasteAreaValue, setPasteAreaValue] = useState('');

  return (
    <Container
      footerType="none"
      headerType="back"
      innerClassName={styles.container}
      title="Clipboard"
    >
      <Input
        label="Copy Area"
        type="textarea"
        onChange={(e) => setCopyAreaValue(e.value)}
        value={copyAreaValue}
      />
      <Button
        onClick={() => {
          Median.clipboard.set({ data: copyAreaValue });
        }}
        type="secondary"
      >
        Copy
      </Button>

      <Input
        label="Paste Area"
        type="textarea"
        onChange={(e) => setPasteAreaValue(e.value)}
        value={pasteAreaValue}
      />
      <Button
        onClick={async () => {
          const value = await Median.clipboard.get();
          if (value) {
            setPasteAreaValue(value.data);
          }
        }}
        type="secondary"
      >
        Paste
      </Button>
    </Container>
  );
};

export default Clipboard;
