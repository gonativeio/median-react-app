import classNames from 'classnames';
import Label from 'components/Label';
import React from 'react';
import SectionItemDemo from './SectionItemDemo';
import styles from './styles.module.scss';

interface SectionItem {
  docs?: string;
  image?: string;
  label: string;
  url: string;
}

interface Props {
  className?: string;
  contentClassName?: string;
  items?: SectionItem[];
  title?: string;
}

const Section: React.FC<Props> = ({
  className,
  contentClassName,
  items = [],
  title,
}) => {
  return (
    <div className={classNames(styles.container, className)}>
      <Label size="h2">{title}</Label>

      <div className={classNames(styles.content, contentClassName)}>
        {items.map((item) => (
          <SectionItemDemo key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Section;
