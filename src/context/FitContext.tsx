'use client';
import { FitlogType } from "@/types/type";
import React, { createContext, ReactNode, useState } from "react";

interface SetterType {
    todaylist: FitlogType[]
    setTodaylist: React.Dispatch<React.SetStateAction<FitlogType[]>>
    saveforlater: FitlogType[]
    setSaveforlater: React.Dispatch<React.SetStateAction<FitlogType[]>>
    activeTab: 'today' | 'saved'
    setActiveTab: React.Dispatch<React.SetStateAction<'today' | 'saved'>>
    sort: string
    setSort: React.Dispatch<React.SetStateAction<'duration' | 'calories' | 'rating'>>
}
export const FitContext = createContext({} as SetterType)




function FitDataProvider ({children}: {children: ReactNode}) {
    const [todaylist, setTodaylist] = useState<FitlogType[]>([])
    const [saveforlater, setSaveforlater] = useState<FitlogType[]>([])
    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
    const [sort, setSort] = useState<'duration' | 'calories' | 'rating'>('duration');

    const setterElement = {
        todaylist,
        setTodaylist, 
        saveforlater, 
        setSaveforlater,
        activeTab,
        setActiveTab,
        sort, 
        setSort
    }
    return <FitContext.Provider value={setterElement}>{children}</FitContext.Provider>
}


export default FitDataProvider;