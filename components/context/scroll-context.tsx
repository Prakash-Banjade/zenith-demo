"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type ScrollContextType = {
  hasScrolled: boolean;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    setHasScrolled(window.scrollY > 80);
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ hasScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollContextProvider");
  }
  return context;
};
