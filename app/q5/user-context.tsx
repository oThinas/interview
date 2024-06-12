'use client';

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider(props: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const contextValue: UserContextType = { user, setUser };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
}
