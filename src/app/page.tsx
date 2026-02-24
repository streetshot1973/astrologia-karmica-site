import Hero from '@/components/Hero';
import AstralMapGenerator from '@/components/AstralMapGenerator';
import Diagnosis from '@/components/Diagnosis';
import Transmutation from '@/components/Transmutation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <AstralMapGenerator />
      <Diagnosis />
      <Transmutation />

      {/* Premium Footer */}
      <footer className="w-full border-t border-purple-900/30 py-12 mt-20 relative z-20 bg-black/50 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 px-4">
          <div className="flex items-center gap-3 opacity-40">
            <span className="w-2 h-2 rotate-45 bg-yellow-600" />
            <span className="w-1.5 h-1.5 rotate-45 bg-yellow-600" />
            <span className="w-2 h-2 rotate-45 bg-yellow-600" />
          </div>
          <p className="text-sm text-stone-500 font-light tracking-[0.2em] text-center uppercase">
            &copy; {new Date().getFullYear()} Astrologia Kármica. A roda gira.
          </p>
        </div>
      </footer>
    </main>
  );
}
