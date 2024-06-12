'use client';

import { PropsWithChildren, createContext, useCallback, useState } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme(): void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider(props: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeContextType['theme']>('light');

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      return currentTheme === 'light' ? 'dark' : 'light';
    });
  }, [setTheme]);

  const contextValue: ThemeContextType = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
}
