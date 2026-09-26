import React from 'react'
import LibraryCard from './LibraryCard'
import { LibraryCardType } from '@/types/types'
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
const getPlans = async () => {
    try {
        const res = await fetch(`${BASE_URL}/api/fitlog`)
        if (!res.ok) {
            throw new Error('Fetching Failed')
        }
        return res.json()
    } catch (error) {
        throw new Error('Fetching Failed');
    }
}
export default async function Library() {
    const plans = await getPlans();
    console.log(plans)
    return (
        <section id='library' className="  bg-[#0b0c0e] min-h-screen text-white px-4 md:px-6 py-8">
            <div className="max-w-7xl mx-auto space-y-6">


                <div className="space-y-1">
                    <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                        THE LIBRARY
                    </h1>
                    <p className="text-gray-400 text-sm font-medium">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {plans.map((plan: LibraryCardType) => (
                        <LibraryCard key={plan.id} plan={plan} />
                    ))}
                </div>

            </div>
        </section>
    )
}