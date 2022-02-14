/* eslint-disable import/prefer-default-export */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { ReactNode } from 'react';
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';

interface WrapperProps {
  children: ReactNode;
}

export const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0,
        staleTime: 0,
      },
    },
  });
  // eslint-disable-next-line func-names
  return function ({ children }: WrapperProps) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
  };
};

export const customRenderHook = <T extends unknown>(callbackfn: () => T) =>
  renderHook(callbackfn, { wrapper: createWrapper() });
