import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#warum', label: 'Warum wir' },
  { href: '#referenzen', label: 'Referenzen' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30" />
          <span className="font-semibold text-white">Flowlabs.Partners</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#kontakt" className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
            Kostenlose Beratung
          </a>
        </nav>

        <button className="md:hidden text-white" aria-label="Menü" onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-slate-200 hover:text-white">
                {l.label}
              </a>
            ))}
            <a href="#kontakt" onClick={() => setOpen(false)} className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              Beratung vereinbaren
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
