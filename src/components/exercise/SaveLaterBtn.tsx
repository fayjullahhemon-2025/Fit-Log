'use client'

import { WorkoutContext } from "@/context/WorkoutContext";
import { LibraryCardType } from "@/types/types";
import React, { useContext } from "react"
import { FiBookmark } from 'react-icons/fi';
import { Bounce, toast } from "react-toastify";
interface SaveLaterBtnType {
    workout: LibraryCardType
}
export default function SaveLaterBtn({ workout }: SaveLaterBtnType) {
    const { saveLater, setSaveLater } = useContext(WorkoutContext);
    const handleSaveLater = () => {
        console.log('triggerd Save Later btn', workout)
        const exist = saveLater.find(w => w.id === workout.id)
        if (!exist) {
            setSaveLater([...saveLater, workout])
            toast.success('Saved for later', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } else {
            toast(
                <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-5 h-5 bg-red-600 text-white rounded-full text-xs font-bold">
                        ✕
                    </span>
                    <span>Already saved!</span>
                </div>,
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                }
            );
        }
    }
    return (
        <button onClick={handleSaveLater} className="flex items-center justify-center gap-2 bg-[#12141a] hover:bg-gray-800 text-white border border-gray-800 font-extrabold text-xs tracking-wider uppercase py-3 px-5 rounded-xl transition-colors duration-200 cursor-pointer active:scale-95">
            <FiBookmark className="w-4 h-4 text-gray-400" />
            <span>Save for later</span>
        </button>
    )
}