import { Search } from "lucide-react"

export default function Hero({ onSearch }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.15),transparent_40%)]" />
      <div className="max-w-6xl mx-auto px-4 py-14 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Everything you need to build, fix, and create</h1>
            <p className="mt-4 text-lg text-slate-600">Browse tools, fasteners, electrical supplies, paint, plumbing and more — quality gear for DIYers and pros.</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input onChange={(e)=>onSearch?.(e.target.value)} placeholder="Search hammers, drills, screws..." className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <a href="#catalog" className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl shadow">Browse catalog</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div>
                <div className="font-semibold text-slate-900">2,500+ items</div>
                In stock today
              </div>
              <div>
                <div className="font-semibold text-slate-900">Same‑day pickup</div>
                Order by 5 pm
              </div>
              <div>
                <div className="font-semibold text-slate-900">Expert support</div>
                In‑store & online
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop" className="w-full h-80 md:h-[420px] object-cover rounded-2xl shadow-xl" alt="Hardware tools" />
          </div>
        </div>
      </div>
    </section>
  )
}
