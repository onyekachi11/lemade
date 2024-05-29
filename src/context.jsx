import React, { createContext, useState } from "react";

// Create a context with a default value
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Context.Provider value={{ openMenu, setOpenMenu}}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
