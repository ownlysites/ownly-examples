import { SampleRibbon } from "@/components/SampleRibbon";
export const metadata = { title: "Replywise — Inbound AI Agent", description: "Never miss another lead. AI replies to every form, call, and chat in under 12 seconds — even at 2am." };
export default function Page() {
  return (
    <main className="min-h-screen bg-[#020817] text-white font-sans overflow-x-hidden">
      <header className="sticky top-0 z-30 bg-[#020817]/85 backdrop-blur-lg border-b border-cyan-400/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3"><div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center font-bold">R</div><div className="font-bold text-lg">Replywise</div></div>
        <nav className="hidden md:flex gap-8 text-sm text-white/70"><a>How it works</a><a>Live demo</a><a>Pricing</a><a>For agencies</a></nav>
        <div className="flex gap-3"><a className="text-sm text-white/70 hover:text-white hidden md:block">Sign in</a><button className="bg-cyan-400 text-[#020817] px-5 py-2.5 rounded-full text-sm font-bold">Try it free</button></div>
      </header>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.18),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.2),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-3 py-1.5 text-xs text-cyan-300 mb-6"><span className="h-1.5 w-1.5 bg-cyan-400 rounded-full animate-pulse" />847 replies sent in the last hour</div>
            <h1 className="font-bold text-5xl md:text-7xl leading-[1.05]">Never miss<br/>another <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">lead.</span></h1>
            <p className="mt-7 text-xl text-white/70 max-w-lg">Replywise answers every form, missed call, and live chat in under 12 seconds. Books the appointment. Confirms the address. Adds them to your CRM. Even at 2am.</p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <button className="bg-cyan-400 hover:bg-cyan-300 text-[#020817] px-7 py-4 rounded-full font-bold">Try it on your site — free</button>
              <button className="border border-white/20 text-white px-7 py-4 rounded-full font-semibold hover:bg-white/5">Watch 2-min demo</button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/50">
              <div className="flex items-center gap-1.5"><span className="text-cyan-400">✓</span>12-second reply time</div>
              <div className="flex items-center gap-1.5"><span className="text-cyan-400">✓</span>Books on Calendly + Acuity</div>
              <div className="flex items-center gap-1.5"><span className="text-cyan-400">✓</span>HIPAA-ready</div>
              <div className="flex items-center gap-1.5"><span className="text-cyan-400">✓</span>Cancel anytime</div>
            </div>
          </div>
          <div className="bg-white/5 border border-cyan-400/20 rounded-2xl backdrop-blur p-6 shadow-[0_30px_120px_-20px_rgba(34,211,238,0.4)]">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3"><div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center text-sm font-bold">R</div><div><div className="text-sm font-semibold">Replywise · Live</div><div className="text-xs text-emerald-400">Active · Auto-reply on</div></div></div>
              <div className="text-xs text-white/40">12:04 AM</div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-end"><div className="bg-cyan-400/10 border border-cyan-400/20 rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%] text-sm">Hi — I need someone to look at our AC, it's not cooling in the upstairs office.</div></div>
              <div className="flex justify-start"><div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%] text-sm">Sorry to hear it. I can have a tech at your office between 7–9am tomorrow. Want me to lock in 7:30?</div></div>
              <div className="flex justify-end"><div className="bg-cyan-400/10 border border-cyan-400/20 rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%] text-sm">Yes 7:30 works. Address is 1402 Magnolia, suite 4.</div></div>
              <div className="flex justify-start"><div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%] text-sm">Booked. You'll get a text confirmation at this number in 30 seconds. Anything else I can answer about pricing or our service area?</div></div>
            </div>
            <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-emerald-400/10 border border-emerald-400/20 rounded-lg p-2"><div className="text-emerald-400 font-bold">8s</div><div className="text-white/50 mt-0.5">First reply</div></div>
              <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-2"><div className="text-cyan-300 font-bold">Booked</div><div className="text-white/50 mt-0.5">Calendar synced</div></div>
              <div className="bg-blue-400/10 border border-blue-400/20 rounded-lg p-2"><div className="text-blue-300 font-bold">CRM ✓</div><div className="text-white/50 mt-0.5">Logged</div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-bold text-4xl md:text-5xl">Three channels. One agent.</h2>
          <p className="mt-4 text-white/60 text-lg">Replywise speaks chat, SMS, and voice. Same brain. Same playbook.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[{t:"Web Chat",d:"Sits on your site. Replies in 8 seconds. Books in under a minute. Hands off to a human anytime.",i:"💬"},{t:"SMS + Missed Call",d:"Every missed call gets a text within 30 seconds. Most leads convert because you answered fast.",i:"📱"},{t:"Voice Agent",d:"Picks up after one ring. Sounds human. Handles intake, scheduling, even handoff to your line.",i:"🎙️"}].map(x=>(
            <div key={x.t} className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:border-cyan-400/40 transition">
              <div className="text-4xl mb-4">{x.i}</div>
              <div className="font-bold text-xl mb-2">{x.t}</div>
              <p className="text-white/65 text-sm leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 border-y border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-bold text-4xl md:text-5xl mb-12">Pricing that pays for itself in one booking.</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[{t:"Starter",p:"$97",sub:"per month",f:["1 channel","200 conversations","Calendly + Acuity","Email + SMS handoff"]},{t:"Pro",p:"$297",sub:"per month",f:["All 3 channels","Unlimited conversations","Voice agent included","CRM sync","White-label option"],hot:true},{t:"Agency",p:"$697",sub:"per month",f:["Manage 10 clients","White-labeled","Dedicated phone numbers","Priority support"]}].map(p=>(
              <div key={p.t} className={`rounded-2xl p-7 text-left ${p.hot?"bg-cyan-400 text-[#020817] ring-4 ring-cyan-400/30":"bg-white/[0.04] border border-white/10"}`}>
                {p.hot && <div className="inline-block bg-[#020817] text-cyan-300 text-xs font-bold px-3 py-1 rounded-full mb-3">Most popular</div>}
                <div className="font-bold text-xl">{p.t}</div>
                <div className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-bold">{p.p}</span><span className={p.hot?"text-[#020817]/70 text-sm":"text-white/50 text-sm"}>{p.sub}</span></div>
                <ul className="mt-6 space-y-2 text-sm">{p.f.map(x=><li key={x} className="flex items-start gap-2"><span className={p.hot?"text-[#020817]":"text-cyan-400"}>✓</span>{x}</li>)}</ul>
                <button className={`mt-8 w-full py-3 rounded-full font-bold ${p.hot?"bg-[#020817] text-cyan-300":"bg-white/10 hover:bg-white/15"}`}>Try free</button>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-white/50">14-day free trial · No card · Cancel anytime</div>
        </div>
      </section>
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="font-bold text-4xl md:text-5xl">Talk to the agent.</h2>
        <p className="mt-4 text-white/65 text-lg">Hit the chat in the corner of your site — Replywise will answer like she works for you.</p>
        <button className="mt-9 bg-cyan-400 hover:bg-cyan-300 text-[#020817] px-10 py-4 rounded-full font-bold text-lg">Start your 14-day trial</button>
      </section>
      <footer className="border-t border-white/5 py-8 px-6 text-sm text-white/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-3">
          <div>© 2026 Replywise, Inc.</div>
          <div>hello@replywise.ai · SOC 2 · HIPAA-ready · Built for ops</div>
        </div>
      </footer>
      <SampleRibbon />
    </main>
  );
}
