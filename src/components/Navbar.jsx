import { Menu, ShoppingCart } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100">
            <Menu className="w-5 h-5 text-slate-600" />
          </button>
          <div className="flex items-baseline gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white font-bold">H</span>
            <span className="text-lg font-semibold text-slate-800">Hardware Hub</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a className="hover:text-slate-900" href="#catalog">Catalog</a>
          <a className="hover:text-slate-900" href="#categories">Categories</a>
          <a className="hover:text-slate-900" href="#contact">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm shadow hover:bg-slate-800">
          <ShoppingCart className="w-4 h-4" />
          Cart
        </button>
      </div>
    </header>
  )
}
