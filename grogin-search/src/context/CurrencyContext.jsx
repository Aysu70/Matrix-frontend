import { useEffect, useState } from "react";
import { createContext } from "react";

export const CurrencyContext = createContext();
export const CurrencyProvider=({children})=>{
    const [currency, setCurrency] = useState(localStorage.getItem('currency'));
    useEffect(()=>{
        localStorage.setItem('currency', currency);
    },[])
    return <CurrencyContext.Provider value={[currency, setCurrency]}>{children}</CurrencyContext.Provider>
}