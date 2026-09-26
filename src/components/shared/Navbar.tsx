"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import logo from "@/assets/logo.png";
import { WorkoutContext } from "@/context/WorkoutContext";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const navItems = [
        { name: "Workouts", href: "/" },
        { name: "My Plan", href: "/my-plan" },
    ];
    const {todaysPlan,saveLater} = useContext(WorkoutContext);
    return (
        <header className="bg-[#0b0c0e] text-white px-4 md:px-6 py-3.5 border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="Fit-Log Logo"
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                    />
                    <span className="font-extrabold text-lg tracking-wider text-white">
                        FITLOG
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-2">
                    <ul className="flex items-center gap-2 m-0 p-0">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.href} className="list-none">
                                    <Link
                                        href={item.href}
                                        className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all inline-block ${isActive
                                                ? "bg-[#1e290f] text-[#a3e635] border-[#3f6212]"
                                                : "bg-transparent text-gray-300 border-transparent hover:text-white hover:bg-gray-800"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="flex items-center gap-3 sm:gap-4 text-xs">

                    <div className="flex items-center gap-1.5 text-gray-300">
                        <span>Plan</span>
                        <span className="bg-[#a3e635] text-black font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            {todaysPlan.length>0?todaysPlan.length:'0'}
                        </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-300">
                        <span>Saved</span>
                        <span className="bg-[#18191c] border border-gray-700 text-gray-300 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            {saveLater.length>0?saveLater.length:'0'}
                        </span>
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-gray-300 hover:text-white p-1 focus:outline-none"
                        aria-label="Toggle navigation menu"
                    >
                        {isMobileMenuOpen ? (
                            <RxCross1 className="w-5 h-5" />
                        ) : (
                            <GiHamburgerMenu className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>


            {isMobileMenuOpen && (
                <nav className="md:hidden pt-4 pb-2 border-t border-gray-800 mt-3">
                    <ul className="flex flex-col gap-2 m-0 p-0">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.href} className="list-none w-full">
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`text-xs font-semibold px-4 py-2.5 rounded-lg border transition-all block w-full text-left ${isActive
                                                ? "bg-[#1e290f] text-[#a3e635] border-[#3f6212]"
                                                : "bg-transparent text-gray-300 border-transparent hover:text-white hover:bg-gray-900"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            )}
        </header>
    )
}