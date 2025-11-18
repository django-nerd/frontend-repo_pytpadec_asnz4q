export default function References() {
  return (
    <section id="referenzen" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Erfolgsgeschichten</h2>
          <span className="text-sm text-slate-400">Ausgewählte Projekte</span>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
              <div className="aspect-[16/10] bg-gradient-to-br from-blue-500/20 to-indigo-500/20" />
              <div className="p-5">
                <p className="text-white font-semibold">Projekt {i}</p>
                <p className="mt-1 text-slate-300 text-sm">Vorher/Nachher: Mehr Sichtbarkeit, mehr Buchungen, mehr Umsatz.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
