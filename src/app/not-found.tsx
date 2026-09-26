// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0b0c0e] text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-black text-[#a3e635]">404</h1>
      <h2 className="text-2xl font-bold uppercase tracking-wide mt-4 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-400 text-sm max-w-md mb-8">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-[#a3e635] hover:bg-[#8ee01d] text-black font-extrabold text-xs uppercase px-6 py-3 rounded-full transition-all active:scale-95"
      >
        Back to Home
      </Link>
    </main>
  );
}