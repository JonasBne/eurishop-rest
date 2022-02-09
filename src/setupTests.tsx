/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import '@testing-library/jest-dom';
import { setLogger } from 'react-query';
import { server } from './mockServer';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});
afterAll(() => {
  server.close();
});
afterEach(() => server.resetHandlers());

// silence react-query errors
setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});
