/* eslint-disable no-useless-return */
/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import RequestError from '../errors/RequestError';
import CommunicationError from '../errors/CommunicationError';
import { UpdateMethods } from './useUpdate';

function useUpdate2<T>(url: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [updatedData, setUpdatedData] = useState<T>();

  const sendHttpRequest = async (method: UpdateMethods, data?: T | null, id?: string | number) => {
    let finalUrl = url;

    if (id) {
      finalUrl += `/${id}`;
    }

    try {
      setLoading(true);
      const response = await fetch(finalUrl, {
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

  const post = async (data: T, id: number | string = '') => {
    await sendHttpRequest('POST', data, id);
  };

  const put = async (data: T, id: number | string = '') => {
    await sendHttpRequest('PUT', data, id);
  };

  const remove = async (id: number | string = '') => {
    await sendHttpRequest('DELETE', null, id);
  };

  return {
    loading,
    error,
    post,
    put,
    remove,
    data: updatedData,
  };
}

export default useUpdate2;
