import React from "react";

interface NavBarActiveContextType {
  active: string;
  setActive: (active: string) => void;
}

const navBarActiveContext = React.createContext<NavBarActiveContextType>(
  {} as NavBarActiveContextType
);

export default navBarActiveContext;
