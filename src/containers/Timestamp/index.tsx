import React, { useMemo } from 'react';
import { formatDate } from 'utils/format';
import styles from './styles.module.scss';

const Timestamp: React.FC = () => {
  const timestamp = useMemo(() => formatDate(new Date()), []);

  return <div className={styles.container}>Session Started: {timestamp}</div>;
};

export default Timestamp;
