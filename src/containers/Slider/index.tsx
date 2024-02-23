import 'rc-slider/assets/index.css';

import MuiSlider from '@mui/material/Slider';
import classNames from 'classnames';
import Container from 'components/Container';
import CustomSlider from 'components/CustomSlider';
import Label from 'components/Label';
import RCSlider from 'rc-slider';
import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import styles from './styles.module.scss';

const Slider: React.FC = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);

  return (
    <Container innerClassName={styles.container}>
      <Label size="xl">Sliders Demo</Label>

      <div className={styles.content}>
        <div className={styles.item}>
          <Label size="lg">rc-slider</Label>
          <RCSlider
            className={styles.slider}
            onChange={(value) => setValue1(value as number)}
            value={value1}
            step={1}
            max={100}
            min={0}
            styles={{
              handle: {
                backgroundColor: 'rgb(33, 150, 243)',
                height: 20,
                width: 20,
                border: 'none',
                opacity: 1,
                userSelect: 'none',
              },
              rail: {
                height: 10,
                userSelect: 'none',
              },
              track: {
                height: 10,
                backgroundColor: 'rgb(33, 150, 243)',
                userSelect: 'none',
              },
            }}
          />
        </div>

        <div className={styles.item}>
          <Label size="lg">react-slider</Label>
          <ReactSlider
            onChange={(value) => setValue2(value as number)}
            value={value2}
            step={1}
            max={100}
            min={0}
            className={styles.reactSlider}
            thumbClassName={styles.reactSliderThumb}
            trackClassName={styles.reactSliderTrack}
          />
        </div>

        <div className={classNames(styles.item, styles.smallGap)}>
          <Label size="lg">Material UI</Label>
          <MuiSlider
            defaultValue={50}
            onChange={(_, value) => setValue3(value as number)}
            value={value3}
            step={1}
            max={100}
            min={0}
          />
        </div>

        <div className={styles.item}>
          <Label size="lg">Built-in range input</Label>
          <CustomSlider
            onChange={(value) => setValue4(value)}
            value={value4}
            step={1}
            max={100}
            min={0}
          />
        </div>
      </div>
    </Container>
  );
};

export default Slider;
