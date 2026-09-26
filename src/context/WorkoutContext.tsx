'use client'
import { LibraryCardType } from "@/types/types";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface WorkoutContextType {
    todaysPlan: LibraryCardType[]
    setTodaysPlan: Dispatch<SetStateAction<LibraryCardType[]>>
    saveLater: LibraryCardType[]
    setSaveLater: Dispatch<SetStateAction<LibraryCardType[]>>
    completedWorkoutIds: (string | number)[];
    markAsDone: (id: string | number) => void;
    removeFromCompleted: (id: string | number) => void;
}
export const WorkoutContext = createContext<WorkoutContextType>({} as WorkoutContextType)
export default function WorkoutProvider({ children }: { children: ReactNode }) {
    const [todaysPlan, setTodaysPlan] = useState<LibraryCardType[]>([])
    const [saveLater, setSaveLater] = useState<LibraryCardType[]>([])
    const [completedWorkoutIds, setCompletedWorkoutIds] = useState<(string | number)[]>([]);
    const markAsDone = (id: string | number) => {
        setCompletedWorkoutIds((prev) =>
            prev.includes(id) ? prev : [...prev, id]
        );
    };
    const removeFromCompleted = (id: string | number) => {
        setCompletedWorkoutIds((prev) => prev.filter((item) => item !== id));
    };
    const sharedData = {
        todaysPlan, setTodaysPlan, saveLater, setSaveLater, completedWorkoutIds,
        markAsDone,removeFromCompleted
    }
    return <WorkoutContext.Provider value={sharedData} >
        {children}
    </WorkoutContext.Provider>
}