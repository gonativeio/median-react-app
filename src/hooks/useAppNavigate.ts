import { useCallback } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

interface AppNavigateOptions {
  replace?: boolean;
  shallow?: boolean;
}

export const useAppNavigate = () => {
  const navigate = useNavigate();

  return useCallback(
    (
      pathname: string | -1,
      query?: Record<string, string | string[]>,
      options: AppNavigateOptions = { shallow: true },
    ) => {
      const { replace, shallow = true } = options;

      if (pathname === -1) {
        return navigate(-1);
      }

      navigate(
        {
          pathname,
          search: createSearchParams(query).toString(),
        },
        { replace, state: { shallow } },
      );
    },
    [navigate],
  );
};

export default useAppNavigate;
