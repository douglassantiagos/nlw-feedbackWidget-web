import { useContext, useState, useEffect, createContext, ReactNode, ReactElement } from 'react';

const ThemeContext = createContext<any>({});

export default function ThemeContextProvider({ children }: any) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== "dark" ? "light" : "dark"
  );

  const root = window.document.documentElement;
  const removeOldTheme = theme === "dark" ? "light" : "dark";
  
  useEffect(() => {
    root.classList.remove(removeOldTheme)
    root.classList.add(theme);

    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return (
    useContext(ThemeContext)
  )
}