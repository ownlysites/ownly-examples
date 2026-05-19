import Link from "next/link";
import { SampleRibbon } from "@/components/SampleRibbon";

export const metadata = { title: "La Marée — Coastal Boutique Hotel", description: "A 24-suite coastal retreat. Quiet luxury, two-Michelin dining, ocean-facing spa." };

const suites = [
  { name: "Atlantic Suite", rate: "from $895", view: "Direct Ocean", sqft: 950 },
  { name: "Coral Garden", rate: "from $620", view: "Garden Terrace", sqft: 720 },
  { name: "The Lighthouse", rate: "from $1,400", view: "Panoramic Cove", sqft: 1250 },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] text-[#1B3140] font-sans">
      <header className="absolute top-0 inset-x-0 z-30 px-8 py-6 flex items-center justify-between text-white">
        <div className="font-serif text-2xl tracking-wide">La Marée</div>
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
          <a href="#suites">Suites</a><a href="#dining">Dining</a><a href="#spa">Spa</a><a href="#events">Events</a>
        </nav>
        <button className="text-xs tracking-widest uppercase border border-white/40 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white hover:text-[#1B3140]">Reserve</button>
      </header>
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d4a5a] via-[#1B3140] to-[#0a1f29]" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(214,180,123,0.5),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22800%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.7%22/></filter><rect width=%22600%22 height=%22800%22 filter=%22url(%23n)%22 opacity=%220.08%22/></svg>')] mix-blend-overlay" />
        <div className="relative z-10 h-full flex flex-col justify-end px-8 pb-20 max-w-5xl">
          <div className="text-xs tracking-[0.3em] uppercase text-[#D6B47B] mb-6">Anchor Cove · Maine</div>
          <h1 className="font-serif text-6xl md:text-8xl text-white leading-[0.95]">Quiet luxury,<br/><em className="text-[#D6B47B]">tide by tide.</em></h1>
          <p className="mt-8 text-white/80 text-lg max-w-xl">24 suites set against the granite shoreline of Anchor Cove. Two-Michelin tasting menu, sea-stone spa, and one private cove only guests can access.</p>
          <div className="mt-10 flex gap-4">
            <button className="bg-[#D6B47B] text-[#1B3140] px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-white">Reserve a Suite</button>
            <button className="border border-white/40 text-white px-8 py-4 text-sm tracking-widest uppercase">Plan a Visit</button>
          </div>
        </div>
      </section>
      <section id="suites" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[#8E6F3F] mb-4">The Suites</div>
            <h2 className="font-serif text-5xl text-[#1B3140] leading-tight">Twenty-four ways<br/>to disappear.</h2>
          </div>
          <p className="text-[#1B3140]/70 text-lg">Every suite faces water. Marble bath. King linen. Curated minibar from the village. Turndown leaves a hand-pressed tide chart for the morning.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {suites.map(s => (
            <div key={s.name} className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-[#D6B47B]/20 hover:shadow-xl transition">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1B3140] via-[#345567] to-[#D6B47B]/30 relative">
                <div className="absolute top-4 left-4 text-[#D6B47B] text-xs uppercase tracking-widest">{s.view}</div>
              </div>
              <div className="p-6">
                <div className="font-serif text-2xl text-[#1B3140]">{s.name}</div>
                <div className="flex justify-between mt-3 text-sm">
                  <span className="text-[#1B3140]/60">{s.sqft} sq ft</span>
                  <span className="text-[#8E6F3F] font-medium">{s.rate}</span>
                </div>
                <button className="mt-6 w-full border border-[#1B3140]/20 py-3 text-xs tracking-widest uppercase hover:bg-[#1B3140] hover:text-white transition">Check Dates</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="dining" className="py-24 px-8 bg-[#1B3140] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <div className="text-xs tracking-[0.3em] uppercase text-[#D6B47B] mb-4">Dining</div>
            <h2 className="font-serif text-5xl leading-tight">Sourced<br/><em className="text-[#D6B47B]">within sight.</em></h2>
            <p className="mt-6 text-white/70">Chef Beatrice Liang's seven-course tasting menu uses only what the Atlantic delivered yesterday. Two Michelin stars, one harvest table, twelve seats per evening.</p>
            <div className="mt-10 grid grid-cols-2 gap-4 text-sm">
              <div><div className="text-[#D6B47B] text-3xl font-serif">2</div><div className="text-white/60 mt-1">Michelin Stars</div></div>
              <div><div className="text-[#D6B47B] text-3xl font-serif">7</div><div className="text-white/60 mt-1">Course Tasting</div></div>
              <div><div className="text-[#D6B47B] text-3xl font-serif">12</div><div className="text-white/60 mt-1">Seats Nightly</div></div>
              <div><div className="text-[#D6B47B] text-3xl font-serif">$485</div><div className="text-white/60 mt-1">Per Guest</div></div>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 gap-4">
            {["Cold Smoked Hamachi","Hand-Dived Scallop","Coal-Embered Halibut","Beach Plum Tartlet"].map(d => (
              <div key={d} className="aspect-square rounded-2xl bg-gradient-to-br from-[#345567] to-[#1B3140] p-6 flex flex-col justify-between ring-1 ring-[#D6B47B]/20">
                <div className="font-serif italic text-[#D6B47B]">{d}</div>
                <div className="text-xs uppercase tracking-widest text-white/40">Tasting · 2026</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="spa" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-[#8E6F3F] mb-4">The Spa</div>
          <h2 className="font-serif text-5xl text-[#1B3140]">Salt, stone, silence.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Tide Stone Therapy", dur: "90 min", price: "$340" },
            { name: "Cove Soak + Salt Scrub", dur: "60 min", price: "$220" },
            { name: "Couples Cliffside Massage", dur: "120 min", price: "$680" },
          ].map(t => (
            <div key={t.name} className="border border-[#D6B47B]/30 p-8 hover:bg-[#D6B47B]/5 transition">
              <div className="font-serif text-2xl text-[#1B3140]">{t.name}</div>
              <div className="mt-4 flex justify-between text-sm">
                <span className="text-[#1B3140]/60">{t.dur}</span>
                <span className="text-[#8E6F3F] font-medium">{t.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-8 bg-gradient-to-br from-[#1B3140] to-[#0a1f29] text-white text-center">
        <h2 className="font-serif text-5xl md:text-6xl max-w-3xl mx-auto leading-tight">When was the last time you actually <em className="text-[#D6B47B]">slept?</em></h2>
        <button className="mt-10 bg-[#D6B47B] text-[#1B3140] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-white">Reserve Your Stay</button>
      </section>
      <footer className="bg-[#0a1f29] text-white/60 py-10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-4 text-sm">
          <div>La Marée · 14 Cove Light Road · Anchor Cove, ME 04046</div>
          <div>+1 207 555 0190 · reserve@lamaree.com</div>
        </div>
      </footer>
      <SampleRibbon />
    </main>
  );
}
