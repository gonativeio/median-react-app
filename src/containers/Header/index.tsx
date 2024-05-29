import classNames from 'classnames';
import Button from 'components/Button';
import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const links = useMemo(() => ['home', 'about', 'portfolio', 'contact'], []);

  const pathname = useMemo(
    () =>
      links.some((section) => `/${section}` === location.pathname)
        ? location.pathname
        : '/home',
    [links, location.pathname],
  );

  return (
    <div className={styles.container}>
      {links.map((section) => (
        <Button
          className={classNames(
            styles.button,
            `/${section}` === pathname && styles.selected,
          )}
          key={section}
          onClick={() => navigate(section)}
        >
          {section}
        </Button>
      ))}
    </div>
  );
};

export default Header;
