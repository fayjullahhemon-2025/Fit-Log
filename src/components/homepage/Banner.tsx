import React from 'react';
import Image from 'next/image';
import bannerImg from '@/assets/banner.png';

export default function Banner() {
  return (
    <section className="p-4 md:p-6 bg-[#0b0c0e]">
      <div className="max-w-7xl mx-auto bg-[#131418] border border-gray-800/80 rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">


          <div className="lg:col-span-7 space-y-6 z-10">

            <span className="text-[#a3e635] text-xs font-bold uppercase tracking-widest block">
              WORKOUT LIBRARY
            </span>


            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05]">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
            </p>


            <div className="pt-2">
              <a
                href="#library"
                className="inline-block bg-[#a3e635] hover:bg-[#8ee01d] text-black font-extrabold text-xs tracking-wider uppercase px-6 py-3.5 rounded-lg transition-colors duration-200 active:scale-95 cursor-pointer"
              >
                BROWSE WORKOUTS
              </a>
            </div>
          </div>


          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
            <div className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none">
              <Image
                src={bannerImg}
                alt="Gym Machine Workout Illustration"
                width={500}
                height={500}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}