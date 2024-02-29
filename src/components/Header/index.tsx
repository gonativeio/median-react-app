import IconArrow from 'assets/icons/IconArrow';
import classNames from 'classnames';
import Button from 'components/Button';
import { useAppNavigate } from 'hooks';
import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { HEADER_MAX_WIDTH, HEADER_PADDING } from 'utils/constants';
import urls from 'utils/urls';
import styles from './styles.module.scss';

interface Props {
  contentMaxWidth?: number;
  contentPadding?: number;
  type?: 'default' | 'back';
}

const Header: React.FC<Props> = ({
  contentMaxWidth = HEADER_MAX_WIDTH,
  contentPadding = HEADER_PADDING,
  type = 'default',
}) => {
  const location = useLocation();
  const navigate = useAppNavigate();

  const handleBack = useCallback(() => {
    if (location.key === 'default') {
      navigate(urls.root, undefined, { replace: true, shallow: true });
    } else {
      navigate(-1);
    }
  }, [location.key, navigate]);

  return (
    <div
      className={styles.container}
      style={{
        paddingLeft: contentPadding,
        paddingRight: contentPadding,
      }}
    >
      <div className={styles.content} style={{ maxWidth: contentMaxWidth }}>
        {type === 'default' && (
          <>
            <Button to="https://median.co">
              <img
                src="https://cdn.median.co/images/dev-site/median-developer-logo.svg"
                loading="lazy"
                alt=""
              />
            </Button>

            <div className={classNames(styles.rightContent, 'desktop-only')}>
              <Button to="https://median.co/app" type="primary">
                Create A New App
              </Button>
            </div>
          </>
        )}

        {type === 'back' && (
          <Button onClick={handleBack} type="text">
            <IconArrow direction="left" type="arrow" />
            Back to portal
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
