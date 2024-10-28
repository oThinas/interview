'use client';

import { Header } from '@/components/header';
import { QUESTIONS } from '@/config/questions';
import { Fragment, useEffect, useState } from 'react';
import { Data } from './data.interface';

export default function Page() {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    const interval = setInterval(fetchData, 1000 * 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Header
        description={QUESTIONS.q1}
      />

      {loading ? (
        <p>
          Carregando...
        </p>
      ) : (
        <>
          {error ? (
            <p>
              Erro ao buscar dados.
            </p>
          ) : (
            <>
              {data.map((user, index) => (
                <Fragment key={index}>
                  <p>{user.id}</p>
                  <p>{user.name}</p>
                  <p>{user.username}</p>
                  <p>{user.email}</p>
                </Fragment>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}
