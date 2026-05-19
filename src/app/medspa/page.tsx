import { SampleRibbon } from "@/components/SampleRibbon";
export const metadata = { title: "Luminé — Aesthetic Medicine", description: "Quiet, considered aesthetic medicine in Scottsdale. Member-only treatments, board-certified provider." };
const tx = [
  { name: "Botox · Forehead", price: "$340", time: "30 min", note: "Pricing per session, results last 3–4 mo." },
  { name: "Hydrafacial Signature", price: "$285", time: "60 min", note: "Glow visible same day." },
  { name: "Microneedling RF", price: "$680", time: "90 min", note: "Series of 3 recommended." },
  { name: "Lip Refresh", price: "$520", time: "45 min", note: "Filler, includes follow-up." },
  { name: "Skin Consult", price: "Complimentary", time: "30 min", note: "Member onboarding." },
  { name: "Annual Member", price: "$2,400/yr", time: "—", note: "12% off, priority booking." },
];
export default function Page() {
  return (
    <main className="min-h-screen bg-[#FAF5EF] text-[#3D2E2A] font-sans">
      <header className="sticky top-0 z-30 bg-[#FAF5EF]/95 backdrop-blur border-b border-[#E8D5C2] px-8 py-5 flex items-center justify-between">
        <div className="font-serif text-2xl tracking-wide">Luminé</div>
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-[#3D2E2A]/70"><a>Treatments</a><a>Provider</a><a>Membership</a><a>Visit</a></nav>
        <button className="text-xs uppercase tracking-widest border border-[#3D2E2A] px-4 py-2 rounded-full hover:bg-[#3D2E2A] hover:text-[#FAF5EF]">Book</button>
      </header>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4D9C5] via-[#E8C5B0] to-[#D4A88E]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.6),transparent_50%)]" />
        <div className="relative max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#8B5A4F] mb-6">Old Town Scottsdale</div>
            <h1 className="font-serif text-6xl md:text-7xl text-[#3D2E2A] leading-[0.95]">Aesthetic <em className="italic text-[#8B5A4F]">medicine.</em><br/>Quietly done.</h1>
            <p className="mt-6 text-[#3D2E2A]/75 text-lg max-w-md">Board-certified provider. Twenty-four members at a time. No injectables menu in the lobby, no neon, no upsell. Just the work, done well, in a room that feels like a library.</p>
            <div className="mt-10 flex gap-4">
              <button className="bg-[#3D2E2A] text-[#FAF5EF] px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#5A4540]">Book a Consult</button>
              <button className="border border-[#3D2E2A] text-[#3D2E2A] px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#3D2E2A] hover:text-[#FAF5EF]">Membership</button>
            </div>
          </div>
          <div className="aspect-[3/4] rounded-sm bg-gradient-to-b from-[#3D2E2A]/10 via-[#8B5A4F]/30 to-[#3D2E2A]/40 relative overflow-hidden">
            <div className="absolute bottom-6 left-6 right-6 bg-[#FAF5EF]/90 backdrop-blur p-5 rounded">
              <div className="text-[10px] uppercase tracking-widest text-[#8B5A4F]">Dr. Anika Reyes</div>
              <div className="font-serif text-xl mt-1">14 years aesthetic medicine</div>
              <div className="text-xs text-[#3D2E2A]/60 mt-1">Board-certified · ABDS · ASLMS</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#8B5A4F] mb-3">Treatments</div>
          <h2 className="font-serif text-5xl text-[#3D2E2A]">Considered, never sold.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {tx.map(t => (
            <div key={t.name} className="border-b border-[#3D2E2A]/15 pb-6">
              <div className="flex justify-between items-baseline mb-1">
                <div className="font-serif text-2xl">{t.name}</div>
                <div className="text-[#8B5A4F] font-medium">{t.price}</div>
              </div>
              <div className="flex justify-between text-sm text-[#3D2E2A]/60">
                <span>{t.note}</span><span>{t.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-8 bg-[#3D2E2A] text-[#FAF5EF]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-[#D4A88E] mb-4">Membership</div>
          <h2 className="font-serif text-5xl">Twenty-four members. No more.</h2>
          <p className="mt-6 text-[#FAF5EF]/70 text-lg max-w-2xl mx-auto">Members get a dedicated provider, priority booking, twelve percent off every treatment, and a yearly skin protocol designed for their face. We accept four new members per quarter.</p>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            <div className="border border-[#D4A88E]/30 p-6"><div className="font-serif text-3xl text-[#D4A88E]">$2,400</div><div className="text-sm text-[#FAF5EF]/60 mt-2">Annual membership</div></div>
            <div className="border border-[#D4A88E]/30 p-6"><div className="font-serif text-3xl text-[#D4A88E]">12%</div><div className="text-sm text-[#FAF5EF]/60 mt-2">Off every treatment</div></div>
            <div className="border border-[#D4A88E]/30 p-6"><div className="font-serif text-3xl text-[#D4A88E]">Priority</div><div className="text-sm text-[#FAF5EF]/60 mt-2">Booking + after-hours line</div></div>
          </div>
          <button className="mt-12 bg-[#D4A88E] text-[#3D2E2A] px-10 py-4 text-xs uppercase tracking-widest hover:bg-[#FAF5EF]">Apply to Join</button>
        </div>
      </section>
      <footer className="bg-[#2A1F1B] text-[#FAF5EF]/50 py-8 px-8 text-xs text-center">Luminé · Old Town Scottsdale · By appointment only · (480) 555-0177</footer>
      <SampleRibbon />
    </main>
  );
}
