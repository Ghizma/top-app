import { Category } from "../interfaces/category.interface";
import { createContext, ReactNode, useState } from "react";

export interface IAppContext {
  menu: Category[];
  setMenu?: (newMenu: Category[]) => void;
}

export interface AppContextProviderProps {
  menu: Category[];
  children: ReactNode;
}

export const AppContext = createContext<IAppContext>({ menu: [] });

export const AppContextProvider = ({
  menu,
  children,
}: AppContextProviderProps) => {
  const [menuState, setMenuState] = useState<Category[]>(menu);
  const setMenu = (newMenu: Category[]) => {
    setMenuState(newMenu);
  };

  return (
    <AppContext.Provider value={{ menu: menuState, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
