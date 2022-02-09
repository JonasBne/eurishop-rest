/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { ReactNode } from 'react';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

interface WrapperProps {
  children: ReactNode;
}

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  // eslint-disable-next-line func-names
  return function ({ children }: WrapperProps) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
  };
};

export default createWrapper;
