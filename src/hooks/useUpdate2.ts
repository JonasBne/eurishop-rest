/* eslint-disable max-len */
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

  // TODO: find a better way to pass the url for basket
  const sendHttpRequest = async (method: UpdateMethods, data?: T | null, id?: string | number, urlSuffix?: string) => {
    let finalUrl = url;

    if (id) {
      finalUrl += `/${id}`;
    }
    if (urlSuffix) {
      finalUrl += `/${urlSuffix}`;
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

  const post = (data: any, id: number | string = '', urlSuffix?: string) => sendHttpRequest('POST', data, id, urlSuffix);

  const put = (data: any, id: number | string = '') => sendHttpRequest('PUT', data, id);

  const remove = (id: number | string = '') => sendHttpRequest('DELETE', null, id);

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
