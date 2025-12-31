"use client";

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({
  isUpsideDown: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isUpsideDown, setIsUpsideDown] = useState(false);
  const toggleTheme = () => setIsUpsideDown(!isUpsideDown);

  return (
    <ThemeContext.Provider value={{ isUpsideDown, toggleTheme }}>
      {/* 1. Added 'min-h-screen' to ensure the theme covers the whole page.
          2. The CSS classes 'upside-down-theme' and 'light-theme' 
             will now control the visibility.
      */}
      <div className={`${isUpsideDown ? "upside-down-theme" : "light-theme"} min-h-screen transition-colors duration-500`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);