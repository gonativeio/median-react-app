import Folder from 'assets/icons/Folder';
import Home from 'assets/icons/Home';
import Info from 'assets/icons/Info';
import Phone from 'assets/icons/Phone';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.scss';

const Content: React.FC = () => {
  const location = useLocation();

  const data = useMemo(() => {
    if (location.pathname === '/about') {
      return {
        icon: <Info />,
        text: 'Learn more about our mission and team.',
      };
    }
    if (location.pathname === '/portfolio') {
      return {
        icon: <Folder />,
        text: 'Explore our previous projects and works.',
      };
    }
    if (location.pathname === '/contact') {
      return {
        icon: <Phone />,
        text: 'Get in touch with us.',
      };
    }
    return {
      icon: <Home />,
      text: 'Welcome to our homepage!',
    };
  }, [location.pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {data.icon}

        <div className={styles.description}>{data.text}</div>
      </div>
    </div>
  );
};

export default Content;
