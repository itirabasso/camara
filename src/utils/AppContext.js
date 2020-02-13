import React, { useContext } from "react";

import { useMessages } from "../hooks/useMessages";

export const AppContext = React.createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  const [messages, addMessage] = useMessages();

  const context = {
    messages, 
    addMessage
  };

  return (
    <AppContext.Provider value={context}>{children}</AppContext.Provider>
  );
};
