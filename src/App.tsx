import { useEffect, useRef, useState } from 'react'
import './App.css'

// ── Configure these two before shipping ──────────────────────────────
const APK_PATH = '/assets/inventarioaxelapp/apk/inventariov2.apk'
const APP_VERSION = 'v2'
const SYSTEM_URL = 'https://inventario-electronic-w7mn.vercel.app/app' // ← replace with your real system URL
// ───────────────────────────────────────────────────────────────────

const PANELS = [
  { id: 'sistema', label: 'Sistema' },
  { id: 'app', label: 'App' },
]

function App() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const goTo = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(PANELS.length - 1, index))
    track.scrollTo({ left: clamped * track.clientWidth, behavior: 'smooth' })
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onScroll = () => {
      const index = Math.round(track.scrollLeft / track.clientWidth)
      setActive(index)
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goTo(active + 1)
      if (e.key === 'ArrowLeft') goTo(active - 1)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      track.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = APK_PATH
    link.download = `InventarioAxel-${APP_VERSION}.apk`
    link.click()
  }

  return (
    <div className="stage">
      <header className="stage-brand">
        <span className="brand-mark" aria-hidden="true" />
        Axel
      </header>

      <button
        className="stage-nav stage-nav--prev"
        onClick={() => goTo(active - 1)}
        disabled={active === 0}
        aria-label="Panel anterior"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className="stage-nav stage-nav--next"
        onClick={() => goTo(active + 1)}
        disabled={active === PANELS.length - 1}
        aria-label="Siguiente panel"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="stage-track" ref={trackRef}>
        {/* ── Panel 1 — Visit the web system ── */}
        <section className="panel panel--sistema">
          <div className="panel-content">
            <p className="panel-kicker">01 — Panel web</p>
            <h1 className="panel-title">
              Tu inventario,
              <br />
              en un solo panel.
            </h1>
            <p className="panel-copy">
              Controla stock, ventas y comprobantes SUNAT desde cualquier
              navegador. Sin instalar nada, siempre actualizado.
            </p>
            <a className="cta" href={SYSTEM_URL} target="_blank" rel="noreferrer">
              Visitar mi sistema
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
          <div className="panel-visual" aria-hidden="true">
            <div className="scene-window">
              <div className="scene-bar">
                <span /><span /><span />
              </div>
              <div className="scene-rows">
                <div className="scene-row"><span className="dot" />Stock actualizado<b>1,204</b></div>
                <div className="scene-row"><span className="dot" />Ventas hoy<b>S/ 3,850</b></div>
                <div className="scene-row"><span className="dot" />Comprobantes SUNAT<b>32</b></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Panel 2 — Download the APK ── */}
        <section className="panel panel--app">
          <div className="panel-content">
            <p className="panel-kicker">02 — Aplicación móvil</p>
            <h1 className="panel-title">
              Llévalo
              <br />
              en tu bolsillo.
            </h1>
            <p className="panel-copy">
              La misma gestión, ahora desde tu teléfono Android. Registra
              ventas y consulta tu stock estés donde estés.
            </p>
            <button className="cta cta--solid" onClick={handleDownload}>
              Descargar APK — {APP_VERSION}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
            <p className="panel-note">Android 11.0+ · sin anuncios · sin virus</p>
          </div>
          <div className="panel-visual" aria-hidden="true">
            <div className="scene-phone">
              <div className="scene-phone-notch" />
              <div className="scene-phone-icon">A</div>
              <div className="scene-phone-label">InventarioAxel</div>
              <div className="scene-phone-track">
                <div className="scene-phone-fill" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="stage-indicators" role="tablist" aria-label="Paneles">
        {PANELS.map((p, i) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={active === i}
            aria-label={p.label}
            className={`indicator ${active === i ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default App