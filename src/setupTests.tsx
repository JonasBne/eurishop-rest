/* eslint-disable no-console */
import '@testing-library/jest-dom';
import { setLogger } from 'react-query';
import { server } from './mockServer';
import dotenv from 'dotenv-flow';

dotenv.config();

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
