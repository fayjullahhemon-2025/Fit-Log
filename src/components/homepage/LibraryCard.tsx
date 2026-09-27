import { LibraryCardType } from '@/types/types'
import React from 'react'
import Image from "next/image";
import { FiClock, FiStar } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import Link from 'next/link';

interface planPropType {
  plan: LibraryCardType
}

export default async function LibraryCard({ plan }: planPropType) {
  return (
    <Link 
      href={`/exercise/${plan.id}`} 
      className="group block w-full cursor-pointer"
    >
      <div className="w-full bg-[#131418] border border-gray-800/60 rounded-3xl overflow-hidden group-hover:border-lime-500/40 transition-all duration-300 h-full flex flex-col justify-between">
        
  
        <div className="relative w-full h-52 sm:h-56 bg-gray-900 overflow-hidden">
          <Image
            src={plan.image}
            alt={plan.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        </div>


        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
 
            <div className="flex flex-wrap gap-2 mb-4">
              {plan.muscleGroups.map((muscle, idx) => (
                <span
                  key={idx}
                  className="bg-[#a3e635] text-black font-extrabold text-[11px] tracking-wide uppercase px-3 py-1 rounded-full"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-1">
              {plan.name}
            </h2>
            <p className="text-gray-400 text-sm font-medium mb-6">
              {plan.equipment}
            </p>
          </div>

          <div>
            <div className="h-px bg-gray-800/80 w-full mb-4" />
            <div className="flex items-center gap-5 text-gray-300 text-sm font-medium">


              <div className="flex items-center gap-1.5">
                <FiClock className="w-4 h-4 text-gray-400" />
                <span>{plan.duration} min</span>
              </div>


              <div className="flex items-center gap-1.5">
                <FaFire className="w-4 h-4 text-gray-400" />
                <span>{plan.caloriesBurned} kcal</span>
              </div>


              <div className="flex items-center gap-1.5">
                <FiStar className="w-4 h-4 text-gray-400" />
                <span>{plan.rating}</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </Link>
  )
}