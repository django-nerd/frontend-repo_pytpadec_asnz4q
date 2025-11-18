import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white ring-1 ring-white/20 backdrop-blur">
            Digital-Agentur für lokale Sichtbarkeit
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Ihr lokales Business. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Digital sichtbar.</span>
          </h1>
          <p className="mt-4 text-lg text-slate-200">
            Wir helfen Restaurants, Friseuren, Einzelhändlern und Handwerksbetrieben, online gefunden zu werden – klar, messbar und bezahlbar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#kontakt" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition">
              Kostenlose Beratung vereinbaren
            </a>
            <a href="#leistungen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white ring-1 ring-white/20 backdrop-blur transition">
              Leistungen ansehen
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950" />
    </section>
  )
}
