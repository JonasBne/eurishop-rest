/* eslint-disable import/prefer-default-export */
import { setupServer } from 'msw/node';
import { handlers } from './testUtils';

export const server = setupServer(...handlers);
