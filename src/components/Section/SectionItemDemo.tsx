import IconArrow from 'assets/icons/IconArrow';
import IconDocs from 'assets/icons/IconDocs';
import classNames from 'classnames';
import Button from 'components/Button';
import Label from 'components/Label';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  docs?: string;
  image?: string;
  label: string;
  url: string;
}

const SectionItemDemo: React.FC<Props> = ({ docs, image, label, url }) => {
  return (
    <div className={styles.sectionItemDemo}>
      {!!image && <img alt="" className={styles.image} src={image} />}

      <Label className={styles.label} size="h3">
        {label}
      </Label>

      {!!docs && (
        <Button className={classNames(styles.button, styles.docs)} to={docs}>
          <IconDocs />
        </Button>
      )}

      <Button className={classNames(styles.button, styles.arrow)} to={url}>
        <IconArrow direction="right" type="arrow" />
      </Button>
    </div>
  );
};

export default SectionItemDemo;
