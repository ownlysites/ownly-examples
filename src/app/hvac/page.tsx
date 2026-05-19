import { SampleRibbon } from "@/components/SampleRibbon";

export const metadata = { title: "Tidewater HVAC — 24/7 Emergency Service", description: "Coastal HVAC service for Charleston metro. Same-day install, 24/7 dispatch, financing available." };

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <div className="bg-amber-400 text-slate-900 text-center text-sm font-semibold py-2 px-4">⚡ AC out? We dispatch within 90 minutes · Call (843) 555-COOL</div>
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded bg-sky-700 grid place-items-center text-white font-bold text-sm">T</div>
          <div>
            <div className="font-bold text-slate-900">Tidewater HVAC</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500">Lic. SC-HV-04829</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-700">
          <a>Services</a><a>Service Area</a><a>Financing</a><a>About</a>
        </nav>
        <a href="tel:+18435552665" className="bg-sky-700 hover:bg-sky-800 text-white px-5 py-3 rounded-full text-sm font-bold flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.34 1.9.66 2.81a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.54 2.81.66A2 2 0 0 1 22 16.92z"/></svg>
          (843) 555-COOL
        </a>
      </header>
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-sky-700 to-cyan-500 text-white">
        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&auto=format&fit=crop&q=82" alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">⚡ Live · 4 techs available now</div>
            <h1 className="font-bold text-5xl md:text-6xl leading-tight">No AC?<br/>We're already <span className="text-amber-300">on our way.</span></h1>
            <p className="mt-6 text-lg text-sky-100 max-w-lg">Charleston's only HVAC service with a 90-minute response guarantee. Same-day install on any AC under 5 tons. Financing as low as $89/mo.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="tel:+18435552665" className="bg-amber-400 hover:bg-amber-300 text-slate-900 px-8 py-4 rounded-full font-bold text-lg text-center">Call Now · (843) 555-COOL</a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-sky-900">Get a Free Quote</button>
            </div>
            <div className="mt-8 flex gap-6 text-sm">
              <div className="flex items-center gap-2"><span className="text-amber-300">★★★★★</span>4.9 / 1,247 reviews</div>
              <div>Licensed · Bonded · Insured</div>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-slate-900">
            <h3 className="font-bold text-2xl mb-1">Get a free quote</h3>
            <p className="text-slate-500 text-sm mb-6">We text back in under 5 minutes</p>
            <div className="space-y-3">
              <input className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm" placeholder="Full name" />
              <input className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm" placeholder="ZIP code" />
              <input className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm" placeholder="Phone" />
              <select className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm">
                <option>What's going on?</option>
                <option>AC not cooling</option>
                <option>System won't turn on</option>
                <option>Need new install</option>
                <option>Annual tune-up</option>
              </select>
              <button className="w-full bg-sky-700 hover:bg-sky-800 text-white py-4 rounded-lg font-bold">Send My Free Quote</button>
            </div>
            <p className="text-xs text-slate-400 mt-3 text-center">No spam. We never sell your info.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="font-bold text-3xl md:text-4xl text-center mb-12">What we fix</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { t: "Emergency Repair", d: "Same-day diagnosis. 90-min dispatch.", p: "from $89" },
            { t: "New Install", d: "Full system, financing as low as $89/mo.", p: "from $4,500" },
            { t: "Maintenance Plan", d: "Two tune-ups a year. Priority dispatch.", p: "$19/mo" },
            { t: "Heat Pumps", d: "Energy-efficient. Federal rebates avail.", p: "from $6,200" },
          ].map(s => (
            <div key={s.t} className="bg-slate-50 rounded-2xl p-6 hover:bg-amber-50 border-2 border-transparent hover:border-amber-400 transition">
              <div className="font-bold text-lg">{s.t}</div>
              <p className="text-slate-600 text-sm mt-2">{s.d}</p>
              <div className="text-sky-700 font-bold mt-4">{s.p}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-bold text-3xl md:text-4xl mb-4">Service area</h2>
            <p className="text-slate-700 mb-6">We dispatch from two locations. If you're in our coverage zone, we promise a tech at your door in 90 minutes or your service call is free.</p>
            <ul className="space-y-2 text-slate-700">
              {["Charleston","Mount Pleasant","North Charleston","James Island","Folly Beach","Daniel Island","Goose Creek","Summerville"].map(c => (
                <li key={c} className="flex items-center gap-2"><span className="text-sky-700">✓</span>{c}, SC</li>
              ))}
            </ul>
          </div>
          <div className="aspect-square rounded-3xl relative overflow-hidden flex items-center justify-center"><img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&auto=format&fit=crop&q=82" alt="" className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0 bg-sky-700/55" />
            <div className="bg-white px-6 py-4 rounded-2xl shadow-2xl">
              <div className="font-bold text-lg">Service Area Map</div>
              <div className="text-xs text-slate-500 mt-1">Live · Updated daily</div>
              <div className="mt-3 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs text-slate-700">4 trucks active</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-sky-900 text-white text-center">
        <h2 className="font-bold text-3xl md:text-5xl">Hot house? Let's fix that.</h2>
        <p className="mt-4 text-sky-200 text-lg">Tap to call. We pick up live, 24/7.</p>
        <a href="tel:+18435552665" className="inline-block mt-8 bg-amber-400 hover:bg-amber-300 text-slate-900 px-10 py-5 rounded-full font-bold text-lg">📞 (843) 555-COOL</a>
      </section>
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between">
          <div>Tidewater HVAC · Lic. SC-HV-04829 · Bonded · Insured</div>
          <div>Available 24/7 · (843) 555-COOL · service@tidewaterhvac.com</div>
        </div>
      </footer>
      <SampleRibbon />
    </main>
  );
}
