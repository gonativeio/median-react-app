import classNames from 'classnames';
import Button from 'components/Button';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Label from 'components/Label';
import React from 'react';
import { CONTENT_MAX_WIDTH, CONTENT_PADDING } from 'utils/constants';
import urls from 'utils/urls';
import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode;
  contentMaxWidth?: number;
  contentPadding?: number;
  footerType?: 'default' | 'none';
  headerType?: 'default' | 'back';
  innerClassName?: string;
  outerClassName?: string;
  title?: string;
}

const Container: React.FC<Props> = ({
  children,
  contentMaxWidth = CONTENT_MAX_WIDTH,
  contentPadding = CONTENT_PADDING,
  innerClassName,
  outerClassName,
  footerType,
  headerType,
  title,
}) => {
  return (
    <div className={styles.container} id="__app_content">
      <Header type={headerType} />

      <div className={classNames(styles.outerContainer, outerClassName)}>
        <div
          className={styles.hero}
          style={{
            backgroundImage: `url(${urls.images('header-background.png')})`,
          }}
        >
          <Label size="h1">{title || 'NPM Package Developer Portal'}</Label>

          {title ? (
            <Label size="h4" type="error">
              App Only: To use this demo for testing open the current page
              within your Median.co app
            </Label>
          ) : (
            <Label size="h4" className={styles.description}>
              {`Welcome to our NPM Package Developer Portal. Feel free to explore our demo pages and test the functionalities of the `}
              <Button
                to="https://median.co/docs/npm-package"
                target="_blank"
                type="link"
              >
                NPM Package
              </Button>
              {` within your Median.co iOS and Android apps.`}
            </Label>
          )}
        </div>

        <div
          className={classNames(styles.innerContainer, innerClassName)}
          style={{
            paddingLeft: contentPadding,
            paddingRight: contentPadding,
            maxWidth: contentMaxWidth,
          }}
        >
          {children}
        </div>

        <Footer type={footerType} />
      </div>
    </div>
  );
};

export default Container;
