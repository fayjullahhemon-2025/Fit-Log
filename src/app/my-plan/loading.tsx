
import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0b0c0e] flex flex-col items-center justify-center space-y-4">

      <div className="w-12 h-12 border-4 border-gray-800 border-t-[#a3e635] rounded-full animate-spin" />
      <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest animate-pulse">
        Loading Workouts...
      </p>
    </div>
  );
}