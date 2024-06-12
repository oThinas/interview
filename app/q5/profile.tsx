'use client';

import { useThemeContext } from './use-theme-context';
import { useUserContext } from './use-user-context';

export function Profile() {
  const { user } = useUserContext();
  const { theme, toggleTheme } = useThemeContext();

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

      <p>
        Tema atual: {theme}
      </p>

      <button className="border border-white" onClick={toggleTheme}>
        Alterar tema
      </button>
    </div>
  );
}
