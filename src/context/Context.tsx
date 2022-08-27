import React, { useContext, useEffect, useState, createContext } from 'react';

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext({ currency: 'HK', setCurrency: (currency: string) => {} });

export const AppContextProvider = ({ children }: Props) => {
  const [currency, setCurrency] = useState<string>('HKD');

  return <AppContext.Provider value={{ currency, setCurrency }}>{children}</AppContext.Provider>;
};
