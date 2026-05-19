import Link from "next/link";
export function SampleRibbon() {
  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-full bg-[#0B2545] text-white text-xs font-medium px-4 py-2 shadow-2xl ring-1 ring-white/10 flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-[#C5A05A]" />
      <span>Sample built by</span>
      <Link href="https://ownly-web-studio.vercel.app" className="underline underline-offset-2 hover:text-[#C5A05A]">Ownly Web Studio</Link>
    </div>
  );
}
