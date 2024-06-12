'use client';

import { useFetch } from './use-fetch';

interface User {
  name: string;
  email: string;
}

export function MyComponent() {
  const { data: user, error, isLoading } = useFetch<User>('https://jsonplaceholder.typicode.com/users/1');

  if (isLoading) {
    return (
      <p>
        Carregando...
      </p>
    );
  }

  if (error) {
    return (
      <p>
        Erro: {error.message}
      </p>
    );
  }

  return (
    <div>
      <p>
        {user?.name}
      </p>

      <p>
        {user?.email}
      </p>
    </div>
  );
}
