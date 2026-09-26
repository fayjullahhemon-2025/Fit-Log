import React from 'react';
import Image from 'next/image';
import { FiPlusCircle, FiBookmark } from 'react-icons/fi';
import { LibraryCardType } from '@/types/types';
import PlanBtn from '@/components/exercise/PlanBtn';
import SaveLaterBtn from '@/components/exercise/SaveLaterBtn';
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
async function getDetail(id: number): Promise<LibraryCardType> {
    try {
        const res = await fetch(`${BASE_URL}/api/fitlog/${id}`, {
            cache: 'force-cache',
        });
        if (!res.ok) {
            throw new Error('Failed to fetch');
        }
        return res.json();
    } catch (error) {
        throw new Error('Failed to fetch');

    }

}

export default async function DetailPage({
    params,
}: {
    params: Promise<{ id: number }>;
}) {
    const { id } = await params;
    const workout = await getDetail(id);

    return (
        <main className="min-h-screen bg-[#0b0c0e] text-white px-4 md:px-8 py-10 flex items-center justify-center">
            <div className="max-w-6xl w-full bg-[#0d0e12] border border-dashed border-[#1f293d] rounded-2xl p-6 md:p-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            unoptimized
                            priority
                        />
                    </div>

                    <div className="flex flex-col justify-between space-y-6">

                        <div>
                            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-2">
                                {workout.name}
                            </h1>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {workout.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {workout.muscleGroups?.map((muscle, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-[#a3e635] text-black font-extrabold text-[11px] tracking-wider uppercase px-3 py-1 rounded-full"
                                    >
                                        {muscle}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#12141a] border border-gray-800/80 rounded-xl p-4 text-xs font-medium space-y-3">
                            <div className="flex justify-between items-center text-gray-400">
                                <span className="uppercase tracking-wider">EQUIPMENT</span>
                                <span className="text-white font-semibold">{workout.equipment}</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-400">
                                <span className="uppercase tracking-wider">DIFFICULTY</span>
                                <span className="text-white font-semibold">{workout.difficulty}</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-400">
                                <span className="uppercase tracking-wider">SETS</span>
                                <span className="text-white font-semibold">{workout.sets}</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-400">
                                <span className="uppercase tracking-wider">REPS</span>
                                <span className="text-white font-semibold">{workout.reps}</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-400">
                                <span className="uppercase tracking-wider">DURATION</span>
                                <span className="text-white font-semibold">{workout.duration} min</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-400">
                                <span className="uppercase tracking-wider">CALORIES</span>
                                <span className="text-white font-semibold">{workout.caloriesBurned} kcal</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-400">
                                <span className="uppercase tracking-wider">RATING</span>
                                <span className="text-white font-semibold">{workout.rating}</span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-sm font-black uppercase tracking-wider text-white mb-3">
                                INSTRUCTIONS
                            </h2>
                            <ol className="space-y-2 text-xs text-gray-400 leading-relaxed list-decimal list-inside">
                                {workout.instructions && workout.instructions.length > 0 ? (
                                    workout.instructions.map((step, idx) => (
                                        <li key={idx} className="pl-1 font-bold text-sm">
                                            <span className="text-gray-300 ">{step}</span>
                                        </li>
                                    ))
                                ) : ""}
                            </ol>
                        </div>

                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 pt-2">
                            <PlanBtn workout={workout} ></PlanBtn>

                            <SaveLaterBtn workout={workout}></SaveLaterBtn>
                        </div>

                    </div>

                </div>

            </div>
        </main>
    );
}