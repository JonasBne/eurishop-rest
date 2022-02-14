import React, { ReactElement, ReactNode } from 'react';
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';

interface WrapperProps {
  children: ReactNode;
}

const createWrapper = () => {
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

export const customRender = (children: ReactElement) =>
  render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>,
    {
      wrapper: createWrapper(),
    },
  );

export const customRenderHook = <T extends unknown>(callbackfn: () => T) =>
  renderHook(callbackfn, { wrapper: createWrapper() });
