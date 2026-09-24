'use client';
import { FitlogType } from "@/types/type";
import { createContext, ReactNode, useState } from "react";

interface SetterType {
    todaylist: FitlogType[]
    setTodaylist: React.Dispatch<React.SetStateAction<FitlogType[]>>
    saveforlater: FitlogType[]
    setSaveforlater: React.Dispatch<React.SetStateAction<FitlogType[]>>
}
export const FitContext = createContext({} as SetterType)




function FitDataProvider ({children}: {children: ReactNode}) {
    const [todaylist, setTodaylist] = useState<FitlogType[]>([])
    const [saveforlater, setSaveforlater] = useState<FitlogType[]>([])

    const setterElement = {
        todaylist,
        setTodaylist, 
        saveforlater, 
        setSaveforlater
    }
    return <FitContext.Provider value={setterElement}>{children}</FitContext.Provider>
}


export default FitDataProvider;