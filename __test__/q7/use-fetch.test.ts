import { useFetch } from '@/app/q6/use-fetch';
import { renderHook, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

describe('useFetch', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('deve retornar dados da API com sucesso', async () => {
    const mockData = {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      username: 'Bret',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const { result } = renderHook(() => {
      const fetchState = useFetch('https://jsonplaceholder.typicode.com/users/1')

      return fetchState;
    });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.data).toEqual(mockData);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBe(null);
    });
  });

  it('deve retornar erro em caso de falha na requisição', async () => {
    fetchMock.mockRejectOnce(new Error('Falha na requisição'));

    const { result } = renderHook(() => {
      const fetchState = useFetch('https://jsonplaceholder.typicode.com/users/-1');

      return fetchState;
    });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.data).toBe(null);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toEqual(new Error('Falha na requisição'));
    });
  });
});
