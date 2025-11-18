import { Globe, MapPin, Share2, CalendarDays, FileText, Search } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website-Erstellung',
    desc: 'Moderne, responsive Websites, die Vertrauen schaffen und Kunden konvertieren.'
  },
  {
    icon: MapPin,
    title: 'Google My Business Optimierung',
    desc: 'Bessere lokale Auffindbarkeit mit optimiertem Profil und Bewertungen.'
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    desc: 'Instagram und Facebook, die wirklich Reichweite und Anfragen bringen.'
  },
  {
    icon: CalendarDays,
    title: 'Online-Buchungssysteme',
    desc: 'Digitale Terminvereinbarung – automatisiert, einfach, effizient.'
  },
  {
    icon: FileText,
    title: 'Digitale Speisekarten/Portfolios',
    desc: 'Für Restaurants und Dienstleister mit QR-Codes und mobiler Optimierung.'
  },
  {
    icon: Search,
    title: 'SEO für lokale Suche',
    desc: 'Werden Sie in Ihrer Region gefunden – dort, wo Kunden suchen.'
  },
]

export default function Services() {
  return (
    <section id="leistungen" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Unsere Dienstleistungen</h2>
        <p className="mt-3 text-slate-300 text-center max-w-2xl mx-auto">Klar strukturiert, transparent bepreist und auf Ihr Geschäft zugeschnitten.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-blue-400/40 transition relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 transition" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center">
                  <Icon />
                </div>
                <h3 className="mt-4 text-white font-semibold">{title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{desc}</p>
                <button className="mt-4 text-blue-300 hover:text-blue-200 text-sm">Mehr erfahren →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
