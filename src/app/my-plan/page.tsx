'use client';

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WorkoutContext } from '@/context/WorkoutContext';
import { LibraryCardType } from '@/types/types'
import { FiClock, FiStar, FiCheck, FiX, FiChevronDown } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';

export default function MyPlanPage() {
  const {
    todaysPlan,
    setTodaysPlan,
    saveLater, setSaveLater
  } = useContext(WorkoutContext);

  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
  const [sortBy, setSortBy] = useState<'duration' | 'calories' | 'rating'>('duration');


  const currentList = activeTab === 'today' ? todaysPlan : saveLater;

  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce((acc, curr) => acc + (curr.duration || 0), 0);
  const totalCalories = currentList.reduce((acc, curr) => acc + (curr.caloriesBurned || 0), 0);

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === 'duration') return b.duration - a.duration;
    if (sortBy === 'calories') return b.caloriesBurned - a.caloriesBurned;
    if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
    return 0;
  });

const handleRemove = (item:LibraryCardType) => {
    if (activeTab === 'today') {
      setTodaysPlan(todaysPlan.filter((workout) => workout.id !== item.id));
    } else if (setSaveLater) {
      setSaveLater(saveLater.filter((workout) => workout.id !== item.id));
    }
    
  };
 const handleMarkDone = (item:LibraryCardType) => {
    setTodaysPlan(todaysPlan.filter((workout) => workout.id !== item.id));

  };

  return (
    <main className="min-h-screen bg-[#0b0c0e] text-white px-4 md:px-12 py-10 flex flex-col items-center relative">




      <div className="max-w-6xl w-full space-y-6">

        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">
            MY PLAN
          </h1>
          <p className="text-gray-400 text-xs font-medium mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="w-full bg-[#12141a] border border-gray-800/80 rounded-2xl p-6 grid grid-cols-3 gap-4">
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs font-medium mb-1">Exercises</span>
            <span className="text-3xl font-black text-[#a3e635]">{totalExercises}</span>
          </div>

          <div className="flex flex-col border-l border-gray-800/80 pl-6">
            <span className="text-gray-400 text-xs font-medium mb-1">Minutes</span>
            <span className="text-3xl font-black text-white">{totalMinutes}</span>
          </div>

          <div className="flex flex-col border-l border-gray-800/80 pl-6">
            <span className="text-gray-400 text-xs font-medium mb-1">Calories</span>
            <span className="text-3xl font-black text-white">{totalCalories}</span>
          </div>
        </div>

        <div className="w-full bg-[#12141a] border border-gray-800/80 rounded-2xl p-2 flex items-center justify-between">

          {/* Tabs */}
          <div className="flex items-center gap-1 bg-[#0b0c0e]/60 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('today')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'today'
                  ? 'bg-[#1c202a] text-white shadow'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'saved'
                  ? 'bg-[#1c202a] text-white shadow'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 pr-2">
            <span className="text-gray-400 text-xs font-medium">Sort By</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'duration' | 'calories' | 'rating')}
                className="appearance-none bg-[#1c202a] border border-gray-800 text-white text-xs font-semibold rounded-xl px-3 py-1.5 pr-8 cursor-pointer focus:outline-none focus:border-gray-600"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>
              <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            </div>
          </div>

        </div>

        {sortedList.length === 0 ? (

          <div className="w-full bg-[#12141a] border border-gray-800/80 rounded-2xl py-24 px-4 flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-black uppercase text-white tracking-wide mb-2">
              NOTHING HERE YET
            </h2>
            <p className="text-gray-400 text-xs font-medium mb-6">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/workouts"
              className="bg-[#a3e635] hover:bg-[#8ee01d] text-black font-extrabold text-xs tracking-wider uppercase px-6 py-3 rounded-full transition-colors duration-200 active:scale-95"
            >
              Go to workouts
            </Link>
          </div>
        ) : (

          <div className="space-y-3">
            {sortedList.map((item) => (
              <div
                key={item.id}
                className="w-full bg-[#12141a] border border-gray-800/80 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-gray-700 transition-colors"
              >

                <div className="flex items-center gap-4">
                  <div className="relative w-28 h-20 sm:w-32 sm:h-20 rounded-xl overflow-hidden bg-gray-900 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-black uppercase text-white tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-xs font-medium mb-3">
                      {item.equipment}
                    </p>

                    <div className="flex items-center gap-4 text-gray-400 text-xs font-semibold">
                      <div className="flex items-center gap-1.5">
                        <FiClock className="w-3.5 h-3.5 text-gray-400" />
                        <span>{item.duration} min</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <FaFire className="w-3 h-3 text-gray-400" />
                        <span>{item.caloriesBurned} kcal</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <FiStar className="w-3.5 h-3.5 text-gray-400" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="flex items-center justify-end gap-3 pt-2 sm:pt-0">
                  <Link
                    href={`/exercise/${item.id}`}
                    className="bg-[#1c202a] hover:bg-gray-800 text-gray-300 font-bold text-xs px-4 py-2.5 rounded-xl border border-gray-800 transition-colors"
                  >
                    View Details
                  </Link>

                  {activeTab === 'today' && (
                    <button
                      onClick={()=>{
                        handleMarkDone(item)
                      }}
                      className="bg-[#a3e635] hover:bg-[#8ee01d] text-black font-extrabold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors active:scale-95 cursor-pointer"
                    >
                      <FiCheck className="w-4 h-4 stroke-3" />
                      <span>Mark as Done</span>
                    </button>
                  )}

                  <button
                    onClick={()=>{
                      handleRemove(item)
                    }}
                    className="p-2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
                    aria-label="Remove item"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}