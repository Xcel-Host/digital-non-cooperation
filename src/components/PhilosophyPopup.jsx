import { useEffect } from 'react'

const pillars = [
  {
    color: 'bg-red',
    title: 'Non-violence',
    desc: 'We don\'t hate. We resist through awareness. No violence, only clarity.',
  },
  {
    color: 'bg-amber',
    title: 'Non-cooperation',
    desc: 'We withdraw economic support from monopoly. Silently. Consistently.',
  },
  {
    color: 'bg-green-600',
    title: 'Truth & Awareness',
    desc: 'We expose control. We spread truth. We educate before we act.',
  },
  {
    color: 'bg-blue-600',
    title: 'Self-Respect',
    desc: 'We choose freedom over convenience. India First. People First.',
  },
]

export default function PhilosophyPopup({ open, onClose }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.88)' }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl p-6 overflow-y-auto"
        style={{
          background: '#0d0900',
          border: '0.5px solid #2a1800',
          maxHeight: '85vh',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-muted hover:text-offwhite transition-colors"
          style={{ background: '#1a1200', border: '0.5px solid #2a1800' }}
          aria-label="Close"
        >
          ✕
        </button>

        <p className="text-xs font-bold tracking-widest text-amber uppercase mb-2">
          Our Philosophy · Our Method · Our Movement
        </p>
        <h2 className="text-2xl font-black tracking-tight text-offwhite mb-1">
          Digital Satyagraha
        </h2>
        <p className="text-xs text-muted italic mb-5">
          "Digital Satyagraha is the modern path of non-violent resistance."
        </p>

        {/* 4 pillars */}
        <div className="flex flex-col gap-3 mb-5">
          {pillars.map(p => (
            <div key={p.title} className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full ${p.color} flex-shrink-0 mt-1.5`} />
              <div>
                <div className="text-sm font-bold text-offwhite mb-0.5">{p.title}</div>
                <div className="text-xs text-amber/60 leading-relaxed">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="flex gap-3 text-xs text-muted mb-5 flex-wrap">
          <span>Withdraw →</span>
          <span>Reduce →</span>
          <span>Replace →</span>
          <span>Transform</span>
        </div>

        {/* Hashtags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {['#DigitalNonCooperation', '#DigitalBoycott', '#NonViolentNonCooperation', '#EconomicNonCooperation'].map(t => (
            <span key={t} className="text-xs font-bold text-amber/50">{t}</span>
          ))}
        </div>

        {/* Quote */}
        <div
          className="p-3 rounded-r-lg text-xs leading-relaxed italic"
          style={{
            background: '#0a0800',
            borderLeft: '2px solid #F59E0B',
            color: '#8a7a50',
          }}
        >
          "Be the change without shouting.<br />
          This is how India wins back its future.<br />
          <strong className="text-amber">One choice at a time.</strong>
        </div>
      </div>
    </div>
  )
}
