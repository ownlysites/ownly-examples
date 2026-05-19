import { SampleRibbon } from "@/components/SampleRibbon";
export const metadata = { title: "Quanta — Ops Analytics", description: "Real-time analytics for ops teams. Plug in your tools. See what's slowing the team. Fix it Monday." };
export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0617] text-white font-sans">
      <header className="sticky top-0 z-30 bg-[#0a0617]/90 backdrop-blur border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3"><div className="h-9 w-9 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-400 grid place-items-center text-white font-bold">Q</div><div className="font-bold text-lg">Quanta</div></div>
        <nav className="hidden md:flex gap-7 text-sm text-white/70"><a>Product</a><a>Integrations</a><a>Pricing</a><a>Docs</a><a>Customers</a></nav>
        <div className="flex gap-3"><a className="text-sm text-white/70 hover:text-white">Sign in</a><button className="bg-gradient-to-r from-violet-500 to-fuchsia-400 text-white px-5 py-2.5 rounded-lg text-sm font-semibold">Start free</button></div>
      </header>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(232,121,249,0.2),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/80 mb-8"><span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-pulse" />Live now · 14,200 teams synced this week</div>
          <h1 className="font-bold text-5xl md:text-7xl leading-[1.05] max-w-4xl mx-auto">See what's slowing your<br/><span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-300 bg-clip-text text-transparent">ops team down.</span></h1>
          <p className="mt-8 text-xl text-white/70 max-w-2xl mx-auto">Quanta plugs into Slack, Linear, GitHub, Notion, and your data warehouse. Surfaces the bottleneck. Tells you who's blocked. You fix it Monday.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-white text-[#0a0617] px-7 py-3.5 rounded-lg font-semibold hover:bg-white/90">Start free — 14 days</button>
            <button className="border border-white/20 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/5">See live demo</button>
          </div>
          <div className="mt-4 text-xs text-white/40">No credit card · Connect 5 tools in under 2 minutes</div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pb-16">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-2 shadow-[0_40px_120px_-20px_rgba(139,92,246,0.4)]">
            <div className="rounded-xl bg-[#0a0617] border border-white/5 p-5">
              <div className="flex items-center justify-between mb-5">
                <div className="text-sm font-medium text-white/80">Ops Health · Sprint 47</div>
                <div className="flex gap-2"><span className="h-2 w-2 bg-emerald-400 rounded-full" /><span className="text-xs text-white/60">Live</span></div>
              </div>
              <div className="grid md:grid-cols-4 gap-3">
                {[{l:"Cycle time",v:"2.4d",d:"↓ 0.6d",g:"text-emerald-400"},{l:"Blocked tickets",v:"7",d:"↑ 3",g:"text-amber-400"},{l:"PR review queue",v:"14",d:"↓ 8",g:"text-emerald-400"},{l:"Active deploys",v:"21",d:"this week",g:"text-violet-300"}].map(m=>(
                  <div key={m.l} className="bg-white/[0.03] border border-white/5 rounded-lg p-4"><div className="text-xs text-white/50">{m.l}</div><div className="text-2xl font-bold mt-1">{m.v}</div><div className={`text-xs mt-1 ${m.g}`}>{m.d}</div></div>
                ))}
              </div>
              <div className="mt-4 bg-white/[0.03] border border-white/5 rounded-lg p-4">
                <div className="text-xs text-white/60 mb-2">Bottleneck detected</div>
                <div className="text-sm">3 PRs sitting on @miles for 2+ days — that's 67% of your blocked queue. <span className="text-violet-300">Nudge him on Slack? →</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-bold text-4xl md:text-5xl">Plug it in. See it in 90 seconds.</h2>
          <p className="text-white/60 mt-4 text-lg">23 integrations live, more shipping every month.</p>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {["Slack","Linear","GitHub","Notion","Jira","Datadog","Snowflake","BigQuery","Postgres","HubSpot","Stripe","Segment","Mixpanel","Looker","Tableau","Asana"].map(t=>(
            <div key={t} className="aspect-square bg-white/[0.03] border border-white/10 rounded-xl grid place-items-center text-xs font-medium text-white/80 hover:bg-white/10 hover:border-violet-400/40 transition">{t}</div>
          ))}
        </div>
      </section>
      <section className="py-20 px-6 bg-gradient-to-br from-violet-900/40 to-fuchsia-900/40 border-y border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-bold text-4xl md:text-5xl">Pricing that fits the team.</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[{t:"Starter",p:"$49",sub:"per month",f:["Up to 10 seats","5 integrations","Weekly digest"],cta:"Start free"},{t:"Team",p:"$149",sub:"per month",f:["Up to 40 seats","Unlimited integrations","Slack nudges + custom alerts","Sprint health board"],cta:"Start free",hot:true},{t:"Scale",p:"Custom",sub:"talk to us",f:["Unlimited seats","SSO + SCIM","Dedicated CSM","Custom dashboards"],cta:"Book a call"}].map(p=>(
              <div key={p.t} className={`rounded-2xl p-7 text-left ${p.hot?"bg-white text-[#0a0617] ring-2 ring-fuchsia-400":"bg-white/5 border border-white/10"}`}>
                {p.hot && <div className="inline-block bg-gradient-to-r from-violet-500 to-fuchsia-400 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Most popular</div>}
                <div className="font-bold text-xl">{p.t}</div>
                <div className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-bold">{p.p}</span><span className={p.hot?"text-[#0a0617]/60 text-sm":"text-white/50 text-sm"}>{p.sub}</span></div>
                <ul className="mt-6 space-y-2 text-sm">{p.f.map(x=><li key={x} className="flex items-start gap-2"><span className={p.hot?"text-violet-500":"text-emerald-400"}>✓</span>{x}</li>)}</ul>
                <button className={`mt-8 w-full py-3 rounded-lg font-semibold ${p.hot?"bg-gradient-to-r from-violet-500 to-fuchsia-400 text-white":"bg-white/10 hover:bg-white/15"}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-sm text-white/40">
          <div>© 2026 Quanta Labs Inc.</div>
          <div>San Francisco · hello@quanta.app · SOC 2 Type II</div>
        </div>
      </footer>
      <SampleRibbon />
    </main>
  );
}
