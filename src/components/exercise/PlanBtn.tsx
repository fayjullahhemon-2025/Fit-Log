'use client'

import { WorkoutContext } from "@/context/WorkoutContext";
import { LibraryCardType } from "@/types/types";
import React, { useContext } from "react"
import { FiPlusCircle, FiBookmark } from 'react-icons/fi';
import { Bounce, toast } from "react-toastify";
// import { toast } from 'sonner';
// import { MdCancel } from "react-icons/md";

interface PlanBtnType {
    workout: LibraryCardType
}
export default function PlanBtn({ workout }: PlanBtnType) {
    const { todaysPlan, setTodaysPlan } = useContext(WorkoutContext);
    const handlePlans = () => {
        console.log('triggerd plans btn', workout)
        const exist = todaysPlan.find(w => w.id === workout.id)
        if (!exist) {
            setTodaysPlan([...todaysPlan, workout])
            toast.success('Added to todays plan', {
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
                    <span>Already in your plan</span>
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
        <button onClick={handlePlans} className="flex-1 flex items-center justify-center gap-2 bg-[#a3e635] hover:bg-[#8ee01d] text-black font-extrabold text-xs tracking-wider uppercase py-3 px-4 rounded-xl transition-colors duration-200 cursor-pointer active:scale-95">
            <FiPlusCircle className="w-4 h-4" />
            <span>Add to today's plan</span>
        </button>
    )
}