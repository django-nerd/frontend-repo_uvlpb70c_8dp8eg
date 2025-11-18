import { useEffect, useState } from 'react'

const fallbackProducts = [
  { id: '1', title: 'Cordless Drill 20V', price: 129.99, category: 'power-tools', in_stock: true, brand: 'ToolPro', image_url: 'https://images.unsplash.com/photo-1604671801908-6df44230996e?q=80&w=1200&auto=format&fit=crop' },
  { id: '2', title: 'Claw Hammer 16oz', price: 19.99, category: 'hand-tools', in_stock: true, brand: 'ForgeMaster', image_url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a14f?q=80&w=1200&auto=format&fit=crop' },
  { id: '3', title: 'Assorted Wood Screws (200pc)', price: 12.49, category: 'fasteners', in_stock: true, brand: 'GripTite', image_url: 'https://images.unsplash.com/photo-1610259110184-ef316b7cbb60?q=80&w=1200&auto=format&fit=crop' },
  { id: '4', title: 'LED Work Light', price: 34.95, category: 'electrical', in_stock: false, brand: 'BrightBeam', image_url: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1200&auto=format&fit=crop' },
]

export default function ProductGrid({ query, category }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const params = new URLSearchParams()
        if (query) params.set('q', query)
        if (category) params.set('category', category)
        const res = await fetch(`${base}/api/products?${params.toString()}`)
        if (!res.ok) throw new Error('Bad response')
        const data = await res.json()
        setItems(data)
      } catch (_) {
        // fallback demo content
        const filtered = fallbackProducts.filter(p => (
          (!category || p.category === category) && (!query || p.title.toLowerCase().includes(query.toLowerCase()))
        ))
        setItems(filtered)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [query, category])

  return (
    <section id="catalog" className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-800">Featured products</h2>
        {!loading && <div className="text-sm text-slate-500">{items.length} items</div>}
      </div>
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-60 bg-slate-100 animate-pulse rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {items.map(p => (
            <article key={p.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="aspect-[4/3] bg-slate-100">
                {p.image_url && <img src={p.image_url} alt={p.title} className="w-full h-full object-cover" />}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-slate-800 line-clamp-2 min-h-[3rem]">{p.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-slate-900 font-semibold">${'{'}p.price.toFixed(2){'}'}</div>
                  <span className={`text-xs px-2 py-1 rounded ${p.in_stock ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{p.in_stock ? 'In stock' : 'Backorder'}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
