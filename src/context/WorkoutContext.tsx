'use client'
import { LibraryCardType } from "@/types/types";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface WorkoutContextType{
    todaysPlan:LibraryCardType[]
    setTodaysPlan:Dispatch<SetStateAction<LibraryCardType[]>>
    saveLater:LibraryCardType[]
    setSaveLater:Dispatch<SetStateAction<LibraryCardType[]>>
}
export const WorkoutContext = createContext<WorkoutContextType>({} as WorkoutContextType)
export default function WorkoutProvider({children}:{children:ReactNode}){
    const [todaysPlan, setTodaysPlan] = useState<LibraryCardType[]>([])
    const [saveLater, setSaveLater] = useState<LibraryCardType[]>([])
    const sharedData = {
        todaysPlan, setTodaysPlan, saveLater, setSaveLater
    }
    return <WorkoutContext.Provider value={sharedData} >
        {children}
    </WorkoutContext.Provider>
}