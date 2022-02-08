/* eslint-disable max-len */
import 'whatwg-fetch';
import React, { ReactNode } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useGetProduct } from './productsApi';

interface WrapperProps {
  children: ReactNode;
}

const client = new QueryClient();

test('renders hook', () => {
  const wrapper = ({ children }: WrapperProps) => <QueryClientProvider client={client}>{children}</QueryClientProvider>;
  const { result } = renderHook(() => useGetProduct('1'), { wrapper });
  console.log(result.current);
});
