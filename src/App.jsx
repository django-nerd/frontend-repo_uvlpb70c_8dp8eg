import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductGrid from './components/ProductGrid'

function App() {
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-slate-800">
      <Navbar />
      <Hero onSearch={setQuery} />
      <div className="py-4">
        <Categories active={cat} setActive={setCat} />
      </div>
      <ProductGrid query={query} category={cat} />
      <footer id="contact" className="mt-16 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm text-slate-600">
          <div>
            <div className="text-slate-900 font-semibold mb-2">Hardware Hub</div>
            Reliable tools and supplies for every project.
          </div>
          <div>
            <div className="text-slate-900 font-semibold mb-2">Contact</div>
            <div>123 Toolbelt Ave, Workshop City</div>
            <div>(555) 123-4567</div>
            <div>support@hardwarehub.example</div>
          </div>
          <div>
            <div className="text-slate-900 font-semibold mb-2">Hours</div>
            Mon–Sat: 8:00–18:00
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
