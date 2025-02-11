import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider=({children})=>{
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    useEffect(()=>{
        document.body.setAttribute('data-bs-theme', theme);
    },[])
    return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>
}