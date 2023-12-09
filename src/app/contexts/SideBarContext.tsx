import { ReactNode, createContext, useState } from 'react';

interface SidebarContextProps {
  collapsed: boolean;
}

export const SidebarContext = createContext({} as SidebarContextProps);

export function SidebarContextProvider({ children }: { children: ReactNode }) {
  const [collapsed] = useState(false);

  return (
    <SidebarContext.Provider value={{ collapsed }}>
      {children}
    </SidebarContext.Provider>
  );
}
