import { PropsWithChildren } from 'react';
import { ThemeProvider } from './theme-context';
import { UserProvider } from './user-context';

export function AppProviders(props: PropsWithChildren) {
  return (
    <UserProvider>
      <ThemeProvider>
        {props.children}
      </ThemeProvider>
    </UserProvider>
  );
}
