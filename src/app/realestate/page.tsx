import { SampleRibbon } from "@/components/SampleRibbon";
export const metadata = { title: "The Hartley Group — Luxury Real Estate", description: "Off-market luxury real estate. Twelve agents. One waitlist. Coastal Carolina + Lowcountry." };
const listings = [
  { addr: "12 Sullivan's Bluff", price: "$8,950,000", beds: 6, bath: 7, sqft: 9400, view: "Direct Atlantic" },
  { addr: "404 Tradd Street", price: "$4,200,000", beds: 5, bath: 5, sqft: 5800, view: "Historic Charleston" },
  { addr: "1 Hillside Reserve", price: "$12,400,000", beds: 7, bath: 9, sqft: 14200, view: "Marshfront Estate" },
];
export default function Page() {
  return (
    <main className="min-h-screen bg-[#F8F5EE] text-[#1F2418] font-sans">
      <header className="absolute top-0 inset-x-0 z-30 px-8 py-6 flex items-center justify-between text-[#F8F5EE]">
        <div className="font-serif text-2xl tracking-wide">The Hartley Group</div>
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest"><a>Listings</a><a>Off-Market</a><a>Sellers</a><a>About</a></nav>
        <button className="text-xs uppercase tracking-widest border border-[#F8F5EE]/40 px-5 py-2.5 backdrop-blur hover:bg-[#F8F5EE] hover:text-[#1F2418]">Inquire</button>
      </header>
      <section className="relative h-screen w-full overflow-hidden">
        <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&auto=format&fit=crop&q=82" alt="" className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#1F2418]/95 via-[#1F2418]/60 to-[#1F2418]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(184,150,98,0.5),transparent_50%)]" />
        <div className="relative z-10 h-full flex flex-col justify-end px-8 pb-20 max-w-6xl">
          <div className="text-xs uppercase tracking-[0.3em] text-[#B89662] mb-6">Coastal Carolina · Lowcountry</div>
          <h1 className="font-serif text-6xl md:text-8xl text-[#F8F5EE] leading-[0.95]">Estates few<br/>ever <em className="italic text-[#B89662]">see.</em></h1>
          <p className="mt-8 text-[#F8F5EE]/80 text-lg max-w-xl">Twelve agents, one waitlist, sixty percent of our transactions happen before they hit the MLS. If you're buying or selling at the top of this market, this is the desk you want.</p>
          <button className="mt-10 self-start bg-[#B89662] hover:bg-[#D4B284] text-[#1F2418] px-10 py-4 text-xs uppercase tracking-widest font-medium">Join the Buyer Waitlist</button>
        </div>
      </section>
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#5B6741] mb-3">Active Listings</div>
            <h2 className="font-serif text-5xl">On the market now.</h2>
          </div>
          <button className="text-xs uppercase tracking-widest text-[#5B6741] hover:text-[#1F2418]">View 14 off-market →</button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {listings.map(l => (
            <div key={l.addr} className="bg-white shadow-sm hover:shadow-2xl transition group">
              <div className="aspect-[4/3] relative overflow-hidden"><img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=82" alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-[#B89662] text-[#1F2418] text-[10px] uppercase tracking-widest px-2 py-1 font-medium">New</div>
                <div className="absolute bottom-4 left-4 text-[#F8F5EE] text-xs uppercase tracking-widest">{l.view}</div>
              </div>
              <div className="p-6">
                <div className="font-serif text-2xl">{l.addr}</div>
                <div className="text-[#5B6741] font-medium mt-2">{l.price}</div>
                <div className="flex gap-4 mt-3 text-xs text-[#1F2418]/60">
                  <span>{l.beds} bed</span><span>{l.bath} bath</span><span>{l.sqft.toLocaleString()} sq ft</span>
                </div>
                <button className="mt-6 w-full border border-[#1F2418]/20 py-3 text-xs uppercase tracking-widest hover:bg-[#1F2418] hover:text-[#F8F5EE]">Request Showing</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-8 bg-[#1F2418] text-[#F8F5EE]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#B89662] mb-4">For Sellers</div>
            <h2 className="font-serif text-5xl leading-tight">Sell quietly.<br/><em className="italic text-[#B89662]">Move quickly.</em></h2>
            <p className="mt-6 text-[#F8F5EE]/75 text-lg">Sixty percent of our sales close before the MLS ever sees them. Our buyer network includes 800+ vetted families, family offices, and second-home buyers we've matched in person.</p>
            <button className="mt-8 border border-[#B89662] text-[#B89662] hover:bg-[#B89662] hover:text-[#1F2418] px-8 py-4 text-xs uppercase tracking-widest">Request a Valuation</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{n:"$1.4B",l:"Annual volume"},{n:"60%",l:"Off-market closes"},{n:"32 days",l:"Avg days on market"},{n:"800+",l:"Vetted buyer network"}].map(s=>(
              <div key={s.l} className="bg-[#2D3322] border border-[#B89662]/20 p-6"><div className="font-serif text-4xl text-[#B89662]">{s.n}</div><div className="text-xs uppercase tracking-widest text-[#F8F5EE]/50 mt-2">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-[#0d100a] text-[#F8F5EE]/40 py-8 px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-3">
          <div>The Hartley Group · Lic. SC-RE-78421 · Equal Housing Opportunity</div>
          <div>4 Broad Street · Charleston, SC · (843) 555-0144</div>
        </div>
      </footer>
      <SampleRibbon />
    </main>
  );
}
