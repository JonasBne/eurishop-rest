/* eslint-disable max-len */
/* eslint-disable no-useless-return */
/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import RequestError from '../errors/RequestError';
import CommunicationError from '../errors/CommunicationError';
import { UpdateMethods } from './useUpdate';

function useUpdate2<T>() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [updatedData, setUpdatedData] = useState<T>();

  // TODO: find a better way to pass the url for basket
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sendHttpRequest = async (method: UpdateMethods, url: string, data?: T | null, id?: string | number) => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: data && JSON.stringify(data),
      });
      if (!response.ok) {
        setError(new RequestError(response.status));
        return;
      }
      setUpdatedData(await response.json());
    } catch (e: any) {
      setError(new CommunicationError(e));
    } finally {
      setLoading(false);
    }
  };

  const post = (data: any, url: string, id: number | string = '') => sendHttpRequest('POST', `${url}/${id}`, data);

  const put = (data: any, url: string, id: number | string = '') => sendHttpRequest('PUT', `${url}/${id}`, data);

  const patch = (data: any, url: string, id: number | string = '') => sendHttpRequest('PUT', `${url}/${id}`, data);

  const remove = (url: string, id: number | string = '') => sendHttpRequest('DELETE', `${url}/${id}`, null);

  return {
    loading,
    error,
    post,
    put,
    patch,
    remove,
    data: updatedData,
  };
}

export default useUpdate2;
