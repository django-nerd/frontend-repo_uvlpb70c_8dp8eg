import { CreditCard, Truck, Wallet, Package } from "lucide-react"

export default function InfoSections() {
  const payments = [
    { icon: CreditCard, title: "Cards", desc: "Visa, MasterCard, AmEx, Discover" },
    { icon: Wallet, title: "Digital", desc: "Apple Pay, Google Pay, PayPal" },
  ]

  const delivery = [
    { icon: Package, title: "Standard Shipping", desc: "3–5 business days nationwide" },
    { icon: Truck, title: "Express & Same‑Day", desc: "Same‑day pickup. 1–2 day express." },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 mt-12">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Payment methods</h3>
          <p className="text-slate-600 mt-1">Secure checkout with multiple options</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {payments.map((p, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p.icon className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <div className="font-medium text-slate-800">{p.title}</div>
                  <div className="text-sm text-slate-600">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Delivery options</h3>
          <p className="text-slate-600 mt-1">Flexible ways to get your gear</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {delivery.map((d, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <d.icon className="w-5 h-5 text-emerald-600 mt-0.5" />
                <div>
                  <div className="font-medium text-slate-800">{d.title}</div>
                  <div className="text-sm text-slate-600">{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
