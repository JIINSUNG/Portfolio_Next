"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface MenuContextType {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext<MenuContextType>({
  menuOpen: false,
  setMenuOpen: () => {},
});

type MenuProviderProps = {
  children: ReactNode;
};

export default function MenuProvider({ children }: MenuProviderProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
}
