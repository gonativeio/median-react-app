import { useCallback, useEffect } from 'react';

interface ClickOutsideParams<T> {
  onClickOutside?: (event: MouseEvent) => void;
  ref: React.RefObject<T>;
}

export const useClickOutside = <T extends HTMLElement>({
  onClickOutside = () => null,
  ref,
}: ClickOutsideParams<T>) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as T)) {
        return;
      }

      onClickOutside(event);
    },
    [onClickOutside, ref],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useClickOutside;
