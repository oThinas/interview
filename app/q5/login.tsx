'use client';

import { useCallback } from 'react';
import { useUserContext } from './use-user-context';

export function Login() {
  const { setUser } = useUserContext();

  const handleLogin = useCallback(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();

    setUser(user);
  }, [setUser]);

  return (
    <button className="border border-white" onClick={handleLogin}>
      Fazer login
    </button>
  );
}
