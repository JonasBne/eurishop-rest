import RequestError from '../errors/RequestError';

type HttpRequestType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// TODO: find way to avoid any

const request = async (requestType: HttpRequestType, url: string, data?: any) => {
  const response = await fetch(url, {
    method: requestType,
    headers: data && {
      'Content-Type': 'application/json',
    },
    body: data && JSON.stringify(data),
  });
  if (!response.ok) {
    throw new RequestError(response.status);
  }
  return response.json();
};

const get = (url: string) => request('GET', url);
const post = (url: string, data: any) => request('POST', url, data);
const put = (url: string, data: any) => request('PUT', url, data);
const patch = (url: string, data: any) => request('PATCH', url, data);
const remove = (url: string) => request('DELETE', url);

export default {
  get,
  post,
  put,
  patch,
  remove,
};
