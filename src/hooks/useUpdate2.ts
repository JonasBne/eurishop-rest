/* eslint-disable no-useless-return */
/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import RequestError from '../errors/RequestError';
import CommunicationError from '../errors/CommunicationError';

function useUpdate2<T>(url: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [updatedData, setUpdatedData] = useState<T>();

  const sendHttpRequest = async (data?: T | null, id?: string | number) => {
    let finalUrl = url;

    if (id) {
      finalUrl += `/${id}`;
    }

    try {
      setLoading(true);
      const response = await fetch(finalUrl, {
        method: `${data && !id ? 'POST' : data && id ? 'PUT' : 'DELETE'}`,
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

  const post = async (data: T) => {
    await sendHttpRequest(data);
  };

  const put = async (data: T, id: number | string = '') => {
    await sendHttpRequest(data, id);
  };

  const remove = async (id: number | string = '') => {
    await sendHttpRequest(null, id);
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
/*

const { put, remove, post data, error, loading } = useUpdate()

put(id, body)
remove(id)
post(body)

Tracht zoveel mogelijk code te herbruiken en zoveel mogelijk logica te bundelen
*/
