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
      <div className="w-full bg-[#131418] border border-gray-800/80 rounded-2xl p-3 flex flex-col justify-between group-hover:border-[#3f6212] transition-all duration-300 h-full">
        

        <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-gray-900 mb-4">
          <Image
            src={plan.image}
            alt={plan.name}
            fill
            className="object-cover "
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        </div>

        <div className="px-1 flex-1 flex flex-col justify-between">
          <div>
 
            <div className="flex flex-wrap gap-2 mb-3">
              {plan.muscleGroups.map((muscle, idx) => (
                <span
                  key={idx}
                  className="bg-[#a3e635] text-black font-extrabold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full"
                >
                  {muscle}
                </span>
              ))}
            </div>

 
            <h2 className="text-xl font-black text-white uppercase tracking-tight mb-1  transition-colors">
              {plan.name}
            </h2>
            <p className="text-gray-400 text-xs font-medium mb-4">
              {plan.equipment}
            </p>
          </div>

  
          <div>
            <div className="h-px bg-gray-800/80 w-full mb-3" />
            <div className="flex items-center gap-4 text-gray-400 text-xs font-semibold">

              <div className="flex items-center gap-1.5">
                <FiClock className="w-4 h-4 text-gray-400" />
                <span>{plan.duration} min</span>
              </div>

              <div className="flex items-center gap-1.5">
                <FaFire className="w-3.5 h-3.5 text-gray-400" />
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