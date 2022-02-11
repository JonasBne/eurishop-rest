/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
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
