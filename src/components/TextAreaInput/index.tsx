import classNames from 'classnames';
import Button from 'components/Button';
import Label from 'components/Label';
import { forwardRef } from 'react';
import styles from './styles.module.scss';

interface Props {
  containerClassName?: string;
  className?: string;
  clearButtonShown?: boolean;
  label?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  rows?: number;
  value?: string;
}

const TextAreaInput = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      className,
      clearButtonShown = true,
      containerClassName,
      label,
      onChange = () => null,
      placeholder,
      rows,
      value,
    },
    ref,
  ) => {
    return (
      <div className={classNames(styles.container, containerClassName)}>
        {!!label && <Label>{label}</Label>}

        <textarea
          className={classNames(styles.input, className)}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          ref={ref}
          rows={rows}
          value={value}
        />

        <Button className={styles.button} onClick={() => onChange('')}>
          Clear
        </Button>
      </div>
    );
  },
);

export default TextAreaInput;
