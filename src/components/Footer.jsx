export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-white font-semibold">Flowlabs.Partners</p>
            <p className="mt-2 text-slate-400 text-sm">Digitale Sichtbarkeit für lokale Unternehmen.</p>
          </div>
          <div>
            <p className="text-white font-semibold">Kontakt</p>
            <p className="mt-2 text-slate-400 text-sm">E-Mail: hallo@flowlabs.partners</p>
            <p className="text-slate-400 text-sm">Telefon: 01234 567890</p>
          </div>
          <div>
            <p className="text-white font-semibold">Rechtliches</p>
            <div className="mt-2 flex flex-col gap-1 text-slate-400 text-sm">
              <a href="#" className="hover:text-slate-200">Impressum</a>
              <a href="#" className="hover:text-slate-200">Datenschutz</a>
            </div>
          </div>
          <div>
            <p className="text-white font-semibold">Folgen</p>
            <div className="mt-2 flex gap-3 text-slate-400 text-sm">
              <a href="#" className="hover:text-slate-200">Instagram</a>
              <a href="#" className="hover:text-slate-200">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-slate-500 text-xs">© {new Date().getFullYear()} Flowlabs.Partners – Alle Rechte vorbehalten.</div>
      </div>
    </footer>
  )
}
