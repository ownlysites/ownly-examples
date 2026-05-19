import Link from "next/link";
import { SampleRibbon } from "@/components/SampleRibbon";

export const metadata = { title: "Maker & Hearth — Modern American", description: "Chef Marcus Field's open-fire kitchen. Local farm. Bar room. Six-seat counter." };

const menu = [
  { course: "Snacks", items: ["Salt-cured radishes · cultured butter · $14","Cornbread · sorghum · whipped lard · $11","Smoked trout dip · house crackers · $18"]},
  { course: "Hearth", items: ["Charred lamb shoulder · mint · pickled fennel · $42","Whole branzino · brown-butter dashi · $48","Embered oyster mushroom · creamed corn · $26"]},
  { course: "Sweets", items: ["Stone fruit galette · vanilla bean ice cream · $16","Brown butter caramel parfait · $14","Coffee ice · espresso meringue · $13"]},
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#1a0e08] text-[#f3e7d3] font-sans">
      <header className="absolute top-0 inset-x-0 z-30 px-6 md:px-10 py-6 flex items-center justify-between">
        <div className="font-serif italic text-2xl text-[#f3e7d3]">Maker & Hearth</div>
        <nav className="hidden md:flex gap-8 text-xs tracking-widest uppercase text-[#f3e7d3]/80">
          <a href="#menu">Menu</a><a href="#chef">Chef</a><a href="#room">Room</a><a href="#visit">Visit</a>
        </nav>
        <button className="text-xs tracking-widest uppercase border border-[#c4392b] text-[#f3e7d3] px-5 py-2.5 rounded-full bg-[#c4392b]/20 hover:bg-[#c4392b]">Reserve</button>
      </header>
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&auto=format&fit=crop&q=82" alt="" className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-b from-[#1a0e08]/60 via-[#3a1e10]/70 to-[#1a0e08]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(244,165,69,0.4),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22600%22><filter id=%22n%22><feTurbulence baseFrequency=%220.8%22/></filter><rect width=%22600%22 height=%22600%22 filter=%22url(%23n)%22 opacity=%220.1%22/></svg>')] mix-blend-overlay" />
        <div className="relative z-10 px-6 md:px-10 pb-24 max-w-5xl">
          <div className="text-[10px] tracking-[0.4em] uppercase text-[#f4a545] mb-4">Old Town · Charleston</div>
          <h1 className="font-serif text-6xl md:text-9xl leading-[0.9] italic">Open <span className="not-italic">fire.</span><br/>Open<span className="text-[#f4a545]"> table.</span></h1>
          <p className="mt-8 max-w-xl text-lg text-[#f3e7d3]/80">Chef Marcus Field cooks dinner like he learned at his grandmother's place outside Atlanta — over coals, hand to mouth, no shortcuts. Twenty-eight seats, two services a night.</p>
          <div className="mt-10 flex gap-4">
            <button className="bg-[#c4392b] hover:bg-[#a52d22] text-[#f3e7d3] px-8 py-4 text-sm tracking-widest uppercase font-medium">Book a Table</button>
            <button className="border border-[#f3e7d3]/40 text-[#f3e7d3] px-8 py-4 text-sm tracking-widest uppercase">See the Menu</button>
          </div>
        </div>
      </section>
      <section id="menu" className="py-20 md:py-28 px-6 md:px-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.4em] uppercase text-[#f4a545] mb-3">The Menu</div>
          <h2 className="font-serif italic text-5xl md:text-6xl text-[#f3e7d3]">What we made this week.</h2>
          <p className="mt-4 text-[#f3e7d3]/60">Changes Wednesday. Sometimes Friday.</p>
        </div>
        <div className="space-y-12">
          {menu.map(g => (
            <div key={g.course}>
              <h3 className="font-serif text-3xl italic text-[#f4a545] mb-6 pb-3 border-b border-[#f4a545]/20">{g.course}</h3>
              <ul className="space-y-3">{g.items.map(i => <li key={i} className="text-[#f3e7d3]/85 leading-relaxed">{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>
      <section id="chef" className="py-20 md:py-28 px-6 md:px-10 bg-[#0d0805]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] rounded-sm relative overflow-hidden"><img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1600&auto=format&fit=crop&q=82" alt="" className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#0d0805] via-[#0d0805]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-[#f3e7d3]">
              <div className="font-serif italic text-3xl">Marcus Field</div>
              <div className="text-xs uppercase tracking-widest text-[#f3e7d3]/60 mt-1">Chef · Owner</div>
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-[#f4a545] mb-4">The Chef</div>
            <h2 className="font-serif italic text-5xl text-[#f3e7d3] leading-tight">Forty years between<br/>the coals and you.</h2>
            <p className="mt-6 text-[#f3e7d3]/70 text-lg">Marcus opened Maker & Hearth in 2019 after fifteen years cooking around the South — McCrady's, Husk, two seasons under Sean Brock. He runs the line himself five nights a week. The sixth night, he hosts the bar.</p>
            <div className="mt-10 grid grid-cols-3 gap-4 text-sm">
              <div><div className="font-serif italic text-3xl text-[#f4a545]">28</div><div className="text-[#f3e7d3]/60 mt-1">Seats</div></div>
              <div><div className="font-serif italic text-3xl text-[#f4a545]">2</div><div className="text-[#f3e7d3]/60 mt-1">Services</div></div>
              <div><div className="font-serif italic text-3xl text-[#f4a545]">★★½</div><div className="text-[#f3e7d3]/60 mt-1">NYT</div></div>
            </div>
          </div>
        </div>
      </section>
      <section id="visit" className="py-20 md:py-28 px-6 md:px-10 max-w-5xl mx-auto text-center">
        <h2 className="font-serif italic text-5xl md:text-6xl text-[#f3e7d3]">Reserve a table.</h2>
        <p className="mt-4 text-[#f3e7d3]/70">Bookings open thirty days out. Counter seats at the open fire are first-come.</p>
        <button className="mt-10 bg-[#c4392b] hover:bg-[#a52d22] text-[#f3e7d3] px-12 py-5 text-sm tracking-widest uppercase font-medium">Book on Resy</button>
        <div className="mt-12 grid md:grid-cols-3 gap-4 text-sm text-[#f3e7d3]/60">
          <div><div className="text-[#f4a545] font-medium uppercase text-xs tracking-widest mb-2">Hours</div>Tue–Sat · 6pm + 8:30pm</div>
          <div><div className="text-[#f4a545] font-medium uppercase text-xs tracking-widest mb-2">Address</div>114 East Bay · Old Town</div>
          <div><div className="text-[#f4a545] font-medium uppercase text-xs tracking-widest mb-2">Contact</div>+1 843 555 0182</div>
        </div>
      </section>
      <footer className="bg-[#0d0805] text-[#f3e7d3]/40 py-10 px-6 md:px-10 text-xs text-center">© 2026 Maker & Hearth · Charleston, SC</footer>
      <SampleRibbon />
    </main>
  );
}
