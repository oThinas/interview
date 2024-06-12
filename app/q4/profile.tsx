'use client';

import { useUserContext } from './use-user-context';

export function Profile() {
  const { user } = useUserContext();

  return (
    <div>
      {user ? (
        <>
          <p>
            {user.name}
          </p>

          <p>
            {user.email}
          </p>
        </>
      ) : (
        <p>
          Usuário não autenticado
        </p>
      )}
    </div>
  );
}
