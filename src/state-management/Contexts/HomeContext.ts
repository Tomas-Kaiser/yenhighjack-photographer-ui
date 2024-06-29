import React from "react";

interface HomeContextType {
    active: string;
    setActive: (active: string) => void;
}

const homeContext = React.createContext<HomeContextType>({} as HomeContextType);

export default homeContext;