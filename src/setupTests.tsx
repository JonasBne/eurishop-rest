/* eslint-disable import/prefer-default-export */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React, { ReactNode } from 'react';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { setLogger, QueryClient, QueryClientProvider } from 'react-query';
import handlers from './testUtils';

interface WrapperProps {
  children: ReactNode;
}

export const createWrapper = () => {
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

export const server = setupServer(...handlers);

// silence react-query errors
setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});
