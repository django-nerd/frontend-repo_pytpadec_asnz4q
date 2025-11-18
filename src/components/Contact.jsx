import { useState } from 'react'

const serviceOptions = [
  'Website-Erstellung',
  'Google My Business Optimierung',
  'Social Media Management',
  'Online-Buchungssysteme',
  'Digitale Speisekarten/Portfolios',
  'SEO für lokale Suche',
]

const businessTypes = ['Restaurant', 'Friseur', 'Einzelhandel', 'Handwerk', 'Sonstiges']

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', business_type: businessTypes[0], services: [], message: '', privacy: false
  })
  const [status, setStatus] = useState({ loading: false, success: null, message: '' })

  const backend = import.meta.env.VITE_BACKEND_URL || ''

  const toggleService = (s) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter(x => x !== s) : [...f.services, s]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.privacy) {
      setStatus({ loading: false, success: false, message: 'Bitte füllen Sie alle Pflichtfelder aus und akzeptieren Sie die Datenschutzbestimmungen.' })
      return
    }
    setStatus({ loading: true, success: null, message: '' })
    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          business_type: form.business_type,
          services: form.services,
          message: form.message || undefined,
          privacy: form.privacy
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Fehler beim Senden')
      setStatus({ loading: false, success: true, message: data.message || 'Gesendet!' })
      setForm({ name: '', email: '', phone: '', business_type: businessTypes[0], services: [], message: '', privacy: false })
    } catch (err) {
      setStatus({ loading: false, success: false, message: err.message })
    }
  }

  return (
    <section id="kontakt" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Kostenlose Beratung vereinbaren</h2>
            <p className="mt-3 text-slate-300">Teilen Sie uns kurz Ihr Vorhaben mit – wir melden uns innerhalb von 24 Stunden.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Name *</label>
                  <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Max Mustermann" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">E-Mail *</label>
                  <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="name@beispiel.de" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Telefon</label>
                  <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="0151 23456789" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Art des Geschäfts</label>
                  <select value={form.business_type} onChange={e => setForm(f => ({ ...f, business_type: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                    {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Gewünschte Dienstleistung</label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {serviceOptions.map(s => (
                    <label key={s} className="inline-flex items-center gap-2 p-3 rounded-xl bg-white/5 ring-1 ring-white/10 text-slate-200 cursor-pointer select-none">
                      <input type="checkbox" checked={form.services.includes(s)} onChange={() => toggleService(s)} />
                      <span className="text-sm">{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Nachricht / Projektbeschreibung</label>
                <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={5} className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Worum geht es?" />
              </div>

              <label className="flex items-start gap-2 text-slate-300 text-sm">
                <input type="checkbox" checked={form.privacy} onChange={e => setForm(f => ({ ...f, privacy: e.target.checked }))} />
                <span>Ich habe die Datenschutzbestimmungen gelesen und akzeptiere sie.</span>
              </label>

              <div className="flex items-center gap-3">
                <button disabled={status.loading} className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white shadow-lg shadow-blue-500/30 transition">
                  {status.loading ? 'Senden…' : 'Anfrage senden'}
                </button>
                {status.message && (
                  <span className={`${status.success ? 'text-green-400' : 'text-red-400'} text-sm`}>{status.message}</span>
                )}
              </div>
            </form>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 h-fit">
            <p className="text-white font-semibold">Direkter Kontakt</p>
            <p className="mt-2 text-slate-300 text-sm">E-Mail: hallo@flowlabs.partners</p>
            <p className="text-slate-300 text-sm">Telefon: 01234 567890</p>
            <a href="https://wa.me/4915123456789" target="_blank" className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-green-500/90 hover:bg-green-600 text-white">WhatsApp schreiben</a>
            <div className="mt-6 text-slate-400 text-sm">Wir melden uns werktags innerhalb von 24 Stunden.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
