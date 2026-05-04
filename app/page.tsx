import { SystemMonitor } from "@/components/SystemMonitor";
import { Github, MapPin, User, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-5xl w-full flex flex-col gap-8 pb-12">
      {/* Top Header / Pill */}
      <header className="flex justify-center pt-4">
        <div className="bg-white px-6 py-2 rounded-full shadow-soft flex items-center gap-2 text-sm font-medium border border-gray-100">
          <Terminal size={16} className="text-accent-blue" />
          <span>HQ Index</span>
        </div>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">

        {/* Intro Hero (2 cols, span 1 row) */}
        <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-soft border border-gray-100 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
            <span className="inline-block animate-wave">👋</span> HI! I DESIGN & BUILD <br />
            <span className="text-accent-blue">DATA EXPERIENCES</span>, <br />
            APPS <span className="inline-block text-accent-yellow">✨</span>, & MODELS.
          </h1>
          <p className="mt-4 text-muted text-lg font-medium max-w-lg">
            Welcome to KUMA Headquarters. This is the central hub for monitoring and navigating my digital ecosystem.
          </p>
        </div>

        {/* Profile Card (1 col) */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-soft border border-gray-100 flex flex-col gap-6">
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full w-fit border border-gray-100">
            <User size={14} className="text-accent-pink" />
            <span className="text-xs font-semibold tracking-wide">THE PERSONA</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary">KUMA</h2>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              Data Scientist & Developer exploring the intersection of data, web, and automation.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-2 text-xs font-medium text-muted">
            <MapPin size={14} />
            <span>Earth</span>
          </div>
        </div>

        {/* GitHub Contribution Card (1 col) */}
        <a href="https://github.com/kumakit" target="_blank" rel="noopener noreferrer" className="bg-white rounded-[2.5rem] p-8 shadow-soft border border-gray-100 flex flex-col group hover:shadow-lg transition-all hover:-translate-y-1 block">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              <Github size={14} className="text-primary" />
              <span className="text-xs font-semibold tracking-wide">GITHUB</span>
            </div>
          </div>
          <div className="block w-full mt-auto">
            <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden flex items-center justify-center min-h-[120px] border border-gray-100">
              {/* Re-using the chart from previous site, but inverted for light theme */}
              <img src="https://ghchart.rshah.org/3B82F6/kumakit" alt="Github Chart" className="w-full opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </a>

        {/* Streamlit Card */}
        <div className="bg-[#FFF5F5] rounded-[2.5rem] p-8 shadow-soft border border-red-50 flex flex-col gap-6 group hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <span className="text-4xl">📱</span>
            <SystemMonitor url="https://kumadata.streamlit.app/" />
          </div>
          <div className="mt-auto">
            <a href="https://kumadata.streamlit.app/" target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
              <h3 className="text-2xl font-bold text-primary group-hover:text-red-500 transition-colors">Data Apps</h3>
              <p className="text-red-900/60 text-sm mt-1 font-medium">Main Streamlit Platform</p>
            </a>
          </div>
        </div>

        {/* MkDocs Card */}
        <div className="bg-[#F0FDF4] rounded-[2.5rem] p-8 shadow-soft border border-green-50 flex flex-col gap-6 group hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <span className="text-4xl">📘</span>
            <SystemMonitor url="https://kumadata.netlify.app/" />
          </div>
          <div className="mt-auto">
            <a href="https://kumadata.netlify.app/" target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
              <h3 className="text-2xl font-bold text-primary group-hover:text-green-600 transition-colors">Data Science</h3>
              <p className="text-green-900/60 text-sm mt-1 font-medium">Netlify / MkDocs</p>
            </a>
          </div>
        </div>

        {/* Toukei Kentei Drill (2 cols) */}
        <div className="md:col-span-2 bg-[#F5F3FF] rounded-[2.5rem] p-8 shadow-soft border border-purple-50 flex flex-col sm:flex-row justify-between sm:items-center gap-6 group hover:shadow-lg transition-all hover:-translate-y-1">
          <div>
            <span className="text-4xl mb-4 block">📊</span>
            <a href="https://toukei-kentei-drill.vercel.app/" target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
              <h3 className="text-2xl font-bold text-primary group-hover:text-purple-600 transition-colors">Toukei Kentei Drill</h3>
              <p className="text-purple-900/60 text-sm mt-1 font-medium">Web Application on Vercel</p>
            </a>
          </div>
          <div className="sm:self-start">
            <SystemMonitor url="https://toukei-kentei-drill.vercel.app/" />
          </div>
        </div>

        {/* OCI Sub Apps (1 col) */}
        <div className="bg-[#EFF6FF] rounded-[2.5rem] p-8 shadow-soft border border-blue-50 flex flex-col gap-6 group hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <span className="text-4xl">🖥️</span>
            <SystemMonitor url="https://apps.bearworks.uk/" />
          </div>
          <div className="mt-auto">
            <a href="https://kumatiki.f5.si/" target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
              <h3 className="text-2xl font-bold text-primary group-hover:text-blue-600 transition-colors">Sub Apps</h3>
              <p className="text-blue-900/60 text-sm mt-1 font-medium">External / OCI</p>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
