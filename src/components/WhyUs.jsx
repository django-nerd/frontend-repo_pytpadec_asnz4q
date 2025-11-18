import { MapPin, Handshake, BadgeCheck, Zap } from 'lucide-react'

const points = [
  { icon: MapPin, title: 'Lokale Expertise', desc: 'Wir kennen die Region und die Bedürfnisse lokaler Kunden.' },
  { icon: Handshake, title: 'Persönlicher Support', desc: 'Direkter Kontakt statt Hotline – wir sind für Sie da.' },
  { icon: BadgeCheck, title: 'Transparente Preise', desc: 'Klare Pakete ohne versteckte Kosten.' },
  { icon: Zap, title: 'Schnelle Umsetzung', desc: 'Vom Erstgespräch zur Live-Schaltung in wenigen Tagen.' },
]

export default function WhyUs() {
  return (
    <section id="warum" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Warum Flowlabs.Partners?</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center"><Icon /></div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
