import Link from "next/link";

const samples = [
  { slug: "hotel", title: "La Marée", tag: "Coastal Boutique Hotel", swatch: "from-teal-700 to-amber-200" },
  { slug: "restaurant", title: "Maker & Hearth", tag: "Modern American Bistro", swatch: "from-stone-900 to-red-700" },
  { slug: "hvac", title: "Tidewater HVAC", tag: "24/7 Emergency HVAC", swatch: "from-sky-700 to-amber-400" },
  { slug: "medspa", title: "Luminé", tag: "Aesthetic Medicine", swatch: "from-rose-300 to-stone-100" },
  { slug: "wealth", title: "Meridian Wealth", tag: "Private Wealth Advisory", swatch: "from-slate-900 to-amber-600" },
  { slug: "realestate", title: "The Hartley Group", tag: "Luxury Real Estate", swatch: "from-emerald-900 to-stone-300" },
  { slug: "saas", title: "Quanta", tag: "Ops Analytics Platform", swatch: "from-violet-700 to-fuchsia-400" },
  { slug: "ai-agent", title: "Replywise", tag: "Inbound AI Agent", swatch: "from-blue-900 to-cyan-300" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F5F7FA] to-white">
      <header className="border-b border-slate-200/60 backdrop-blur sticky top-0 bg-white/70 z-50">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-[#0B2545] grid place-items-center text-[#C5A05A] font-bold">O</div>
            <div>
              <div className="font-serif text-lg font-semibold text-[#0B2545]">Ownly Web Studio — Samples</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">Eight live industry builds</div>
            </div>
          </div>
          <Link href="https://ownly-web-studio.vercel.app" className="text-sm font-medium text-[#0B2545] hover:text-[#C5A05A]">← Back to Studio</Link>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="font-serif text-5xl md:text-6xl font-semibold text-[#0B2545] max-w-3xl">Live sample sites. <span className="italic text-[#C5A05A]">Click any one.</span></h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl">Each card opens a real one-page site Ownly Web Studio built as a vertical sample. Different palette, different copy, different industry — same studio.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {samples.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 hover:ring-[#C5A05A] hover:shadow-xl transition">
              <div className={`aspect-[4/5] bg-gradient-to-br ${s.swatch} relative`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
                <div className="absolute bottom-0 p-5 text-white">
                  <div className="text-xs uppercase tracking-widest opacity-80">{s.tag}</div>
                  <div className="font-serif text-2xl font-semibold mt-1">{s.title}</div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between text-sm">
                <span className="text-slate-500">/{s.slug}</span>
                <span className="text-[#0B2545] font-medium group-hover:text-[#C5A05A]">View →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <footer className="border-t border-slate-200 mt-16">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-slate-500">
          <div>© 2026 Ownly ONCE LLC · Sample sites for demonstration only</div>
          <Link href="https://ownly-web-studio.vercel.app" className="hover:text-[#0B2545]">ownly-web-studio.vercel.app</Link>
        </div>
      </footer>
    </main>
  );
}
