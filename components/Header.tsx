import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
            <span className="text-white text-xl font-black">
              M
            </span>
          </div>

          <div>
            <h1 className="text-2xl font-black text-slate-900">
              Mika AI
            </h1>

            <p className="text-xs text-slate-500">
              The Future of Personalized Learning
            </p>
          </div>

        </Link>

        {/* Navigation */}

        <nav className="flex items-center gap-8">

          <Link
            href="/"
            className="text-slate-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>

          <Link
            href="/classes"
            className="text-slate-700 hover:text-blue-600 font-medium"
          >
            Classes
          </Link>

          <Link
            href="/dashboard"
            className="text-slate-700 hover:text-blue-600 font-medium"
          >
            Dashboard
          </Link>

        </nav>

      </div>

    </header>
  );
}