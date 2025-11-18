const categories = [
  { key: 'power-tools', label: 'Power Tools' },
  { key: 'hand-tools', label: 'Hand Tools' },
  { key: 'fasteners', label: 'Fasteners' },
  { key: 'electrical', label: 'Electrical' },
  { key: 'plumbing', label: 'Plumbing' },
  { key: 'paint', label: 'Paint & Supplies' },
]

export default function Categories({ active, setActive }) {
  return (
    <div id="categories" className="max-w-6xl mx-auto px-4">
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map(c => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`px-4 py-2 rounded-full border whitespace-nowrap transition ${active===c.key? 'bg-slate-900 text-white border-slate-900':'bg-white text-slate-700 border-slate-200 hover:border-slate-300'}`}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  )
}
