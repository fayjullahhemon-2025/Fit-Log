import Image from "next/image";
import footerLogo from "@/assets/footer.png"; 

export default function Footer() {
  return (
    <footer className="bg-[#0b0c0e] text-gray-400 px-4 md:px-6 py-6 border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Branding */}
        <div className="flex items-center gap-2">
          <Image
            src={footerLogo}
            alt="FitLog Logo"
            width={20}
            height={20}
            className="w-5 h-5 object-contain"
          />
          <span className="font-extrabold text-sm tracking-wider text-white uppercase">
            FITLOG
          </span>
        </div>


        <p className="text-xs font-medium text-gray-400 text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}