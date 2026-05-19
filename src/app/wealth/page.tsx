import { SampleRibbon } from "@/components/SampleRibbon";
export const metadata = { title: "Meridian Wealth — Private Wealth Advisory", description: "Fee-only fiduciary advisory for families above $3M. Discretionary management, tax-aware, owner-led." };
export default function Page() {
  return (
    <main className="min-h-screen bg-[#0F1B2C] text-[#E8E2D0] font-sans">
      <header className="sticky top-0 z-30 bg-[#0F1B2C]/95 backdrop-blur border-b border-[#C5A05A]/20 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3"><div className="h-9 w-9 grid place-items-center bg-[#C5A05A] text-[#0F1B2C] font-serif text-xl font-bold">M</div><div className="font-serif text-xl tracking-wide">Meridian Wealth</div></div>
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-[#E8E2D0]/70"><a>Approach</a><a>Family Office</a><a>Insights</a><a>About</a></nav>
        <button className="text-xs uppercase tracking-widest border border-[#C5A05A] text-[#C5A05A] px-5 py-2.5 hover:bg-[#C5A05A] hover:text-[#0F1B2C]">Schedule</button>
      </header>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1B2C] via-[#1B2D45] to-[#0F1B2C]" />
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22600%22><circle cx=%22100%22 cy=%22100%22 r=%221%22 fill=%22%23C5A05A%22/><circle cx=%22250%22 cy=%22200%22 r=%221%22 fill=%22%23C5A05A%22/><circle cx=%22400%22 cy=%22150%22 r=%221%22 fill=%22%23C5A05A%22/><circle cx=%22500%22 cy=%22400%22 r=%221%22 fill=%22%23C5A05A%22/><circle cx=%22150%22 cy=%22450%22 r=%221%22 fill=%22%23C5A05A%22/></svg>')]" />
        <div className="relative max-w-6xl mx-auto px-8">
          <div className="text-xs uppercase tracking-[0.3em] text-[#C5A05A] mb-6">Fee-only · Fiduciary · Discretionary</div>
          <h1 className="font-serif text-6xl md:text-8xl leading-[1.0]">Wealth that<br/>outlasts <em className="text-[#C5A05A] italic">the noise.</em></h1>
          <p className="mt-8 text-xl text-[#E8E2D0]/75 max-w-2xl">Private wealth advisory for families with $3M+ in investable assets. Owner-led, tax-aware, and small enough that you actually know who manages your money.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md">
            <button className="bg-[#C5A05A] hover:bg-[#D4B47B] text-[#0F1B2C] px-8 py-4 text-xs uppercase tracking-widest font-medium">Request an Introduction</button>
          </div>
          <div className="mt-16 grid md:grid-cols-4 gap-8 max-w-4xl">
            {[{n:"$847M",l:"Assets under management"},{n:"34",l:"Client families"},{n:"22 yrs",l:"Average tenure"},{n:"0.85%",l:"All-in fee tier"}].map(s=>(
              <div key={s.l}><div className="font-serif text-4xl text-[#C5A05A]">{s.n}</div><div className="text-xs uppercase tracking-widest text-[#E8E2D0]/50 mt-2">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#C5A05A] mb-4">Approach</div>
            <h2 className="font-serif text-5xl leading-tight">Three things we<br/>actually <em className="italic text-[#C5A05A]">do.</em></h2>
          </div>
          <div className="md:col-span-2 grid md:grid-cols-3 gap-6">
            {[
              {t:"Custody & Allocation",d:"Discretionary management across taxable + retirement. Schwab-custodied. Quarterly rebalance."},
              {t:"Tax-Aware Trades",d:"Loss harvest, gain placement, Roth conversion ladder, charitable lots. Coordinated with your CPA."},
              {t:"Estate + Trust",d:"Trustee succession, beneficiary review, generational transfer modeling. Coordinated with your attorney."},
            ].map(x=>(
              <div key={x.t} className="border-l-2 border-[#C5A05A] pl-6">
                <div className="font-serif text-2xl mb-3">{x.t}</div>
                <p className="text-sm text-[#E8E2D0]/65 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-8 bg-[#1B2D45]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#C5A05A] mb-3">Projection Calculator</div>
            <h2 className="font-serif text-5xl">See where you'd be in twenty years.</h2>
          </div>
          <div className="bg-[#0F1B2C] border border-[#C5A05A]/30 p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div><label className="text-xs uppercase tracking-widest text-[#C5A05A]">Current investable</label><div className="mt-2 text-3xl font-serif">$3,500,000</div></div>
              <div><label className="text-xs uppercase tracking-widest text-[#C5A05A]">Annual contribution</label><div className="mt-2 text-3xl font-serif">$120,000</div></div>
              <div><label className="text-xs uppercase tracking-widest text-[#C5A05A]">Time horizon</label><div className="mt-2 text-3xl font-serif">20 years</div></div>
            </div>
            <div className="mt-8 border-t border-[#C5A05A]/20 pt-8">
              <div className="text-xs uppercase tracking-widest text-[#E8E2D0]/60">Projected at 7% net of fees</div>
              <div className="font-serif text-6xl text-[#C5A05A] mt-3">$18.4M</div>
              <div className="text-xs text-[#E8E2D0]/40 mt-2">Modeled. Past performance does not guarantee future results.</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-8 text-center max-w-3xl mx-auto">
        <h2 className="font-serif text-5xl leading-tight">Two introductions a quarter.<br/><em className="italic text-[#C5A05A]">That's it.</em></h2>
        <p className="mt-6 text-[#E8E2D0]/70">We're small on purpose. If we think we can help, we'll tell you. If we don't, we'll refer you to two firms we trust.</p>
        <button className="mt-10 bg-[#C5A05A] hover:bg-[#D4B47B] text-[#0F1B2C] px-10 py-4 text-xs uppercase tracking-widest font-medium">Request an Introduction</button>
      </section>
      <footer className="bg-[#0a131f] text-[#E8E2D0]/40 py-8 px-8 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-3">
          <div>Meridian Wealth Advisors, LLC · Registered Investment Adviser · ADV available on request</div>
          <div>One Logan Square, Suite 2200 · Philadelphia, PA · +1 215 555 0180</div>
        </div>
      </footer>
      <SampleRibbon />
    </main>
  );
}
