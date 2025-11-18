export default function About() {
  return (
    <section id="ueber-uns" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Wir sind Flowlabs.Partners</h2>
            <p className="mt-4 text-slate-300">
              Ein Zwei-Partner-Team mit Leidenschaft für klare Strategien und schnelle Umsetzung. Unsere Mission: Lokalen Unternehmen zu messbarer Sichtbarkeit und echten Ergebnissen zu verhelfen.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
                <p className="text-white font-semibold">Warum wir?</p>
                <p className="mt-2 text-slate-300 text-sm">Kurze Wege, direkte Ansprechpartner und Transparenz von Anfang an.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
                <p className="text-white font-semibold">Unsere Mission</p>
                <p className="mt-2 text-slate-300 text-sm">Digitale Lösungen, die lokal wirken – ohne Fachchinesisch.</p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/30 to-indigo-500/30 ring-1 ring-white/10" />
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500/30 to-blue-500/30 ring-1 ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
