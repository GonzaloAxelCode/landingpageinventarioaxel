import { useState } from 'react'

const APK_PATH = '/assets/inventarioaxelapp/0.4/apk/inventarioaxelapk.apk'
const APP_VERSION = '0.4'

const features = [
  {
    icon: '🧾',
    title: 'Punto de Venta (POS)',
    desc: 'Escaneo de código de barras, búsqueda rápida, cálculo automático de IGV y múltiples métodos de pago.',
  },
  {
    icon: '📦',
    title: 'Gestión de Inventario',
    desc: 'Control de stock por tienda, alertas de stock bajo, seguimiento de costos y importación masiva desde CSV.',
  },
  {
    icon: '📊',
    title: 'Dashboard y Reportes',
    desc: 'Gráficos interactivos de ventas, productos más vendidos, distribución de pagos y análisis por canal.',
  },
  {
    icon: '👥',
    title: 'Gestión de Clientes',
    desc: 'Registro completo con DNI/RUC, estadísticas de clientes frecuentes y rueda de sorteos.',
  },
  {
    icon: '🛒',
    title: 'Gestión de Compras',
    desc: 'Registro de compras e importación automática desde archivos XML de comprobantes electrónicos.',
  },
  {
    icon: '📋',
    title: 'Pedidos y Cotizaciones',
    desc: 'Creación de pedidos con estados, validación de stock e historial paginado.',
  },
  {
    icon: '💰',
    title: 'Caja Diaria',
    desc: 'Apertura, ingresos, gastos y cierre de caja con saldo final calculado automáticamente.',
  },
  {
    icon: '🚚',
    title: 'Guías de Remisión',
    desc: 'Registro de traslados con datos de remitente, destinatario y transportista.',
  },
  {
    icon: '🏪',
    title: 'Multi-Tienda',
    desc: 'Gestiona varias tiendas o sucursales desde una sola cuenta con inventarios independientes.',
  },
  {
    icon: '🔐',
    title: 'Permisos Granulares',
    desc: 'Más de 30 permisos por usuario para controlar acceso detallado a cada módulo.',
  },
  {
    icon: '🌙',
    title: 'Modo Oscuro',
    desc: 'Interfaz con modo oscuro y persistencia de preferencias del usuario.',
  },
  {
    icon: '📱',
    title: 'Multiplataforma',
    desc: 'Funciona como app web, móvil Android y app de escritorio. PWA con service worker.',
  },
]

const advantages = [
  { num: '01', title: 'Todo en uno', desc: 'Un solo sistema para ventas, inventario, compras, caja y comprobantes electrónicos.' },
  { num: '02', title: 'Integración SUNAT', desc: 'Emisión directa de boletas, facturas y notas de crédito. Consulta automática de DNI/RUC.' },
  { num: '03', title: 'Multiplataforma', desc: 'Web, Android y escritorio. Úsala desde cualquier dispositivo.' },
  { num: '04', title: 'Multi-tienda', desc: 'Varias sucursales con inventarios y cajas independientes.' },
  { num: '05', title: 'Automatización', desc: 'IGV automático, stock actualizado al vender, importación XML y CSV.' },
  { num: '06', title: 'Reportes visuales', desc: 'Dashboard con gráficos interactivos para decidir con datos.' },
  { num: '07', title: 'Experiencia moderna', desc: 'Modo oscuro, diseño responsivo, escáner de barras y WhatsApp integrado.' },
  { num: '08', title: 'Offline-ready', desc: 'Funciona sin conexión a internet con PWA y service worker.' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = APK_PATH
    link.download = 'InventarioAxel-v' + APP_VERSION + '.apk'
    link.click()
  }

  return (
    <div className="landing">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="#" className="logo">
            <span className="logo-icon">📊</span>
            <span className="logo-text">InventarioAxel</span>
          </a>
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Funcionalidades</a>
            <a href="#advantages" onClick={() => setMobileMenuOpen(false)}>Ventajas</a>
            <a href="#download" onClick={() => setMobileMenuOpen(false)}>Descargar</a>
          </div>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-badge">Versión {APP_VERSION}</div>
          <h1 className="hero-title">
            Sistema de Inventario
            <br />
            <span className="hero-highlight">para tu negocio</span>
          </h1>
          <p className="hero-subtitle">
            Gestión comercial e inventario integral para pequeñas y medianas empresas en Perú.
            Controla ventas, inventario, compras, caja y comprobantes electrónicos ante SUNAT
            desde una sola aplicación.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={handleDownload}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Descargar APK
            </button>
            <a href="#features" className="btn btn-outline btn-lg">Conocer más</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">12+</span>
              <span className="stat-label">Módulos</span>
            </div>
            <div className="stat">
              <span className="stat-num">30+</span>
              <span className="stat-label">Permisos</span>
            </div>
            <div className="stat">
              <span className="stat-num">3</span>
              <span className="stat-label">Plataformas</span>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview / Info Banner */}
      <section className="preview-banner">
        <div className="container">
          <div className="preview-card">
            <div className="preview-info">
              <h2>Punto de venta completo en tu bolsillo</h2>
              <p>
                Escanea productos, emite comprobantes electrónicos, controla tu inventario
                y envía recibos por WhatsApp. Todo desde tu celular o computadora.
              </p>
              <ul className="preview-list">
                <li>✓ Escáner de código de barras</li>
                <li>✓ Boletas y facturas electrónicas</li>
                <li>✓ Control de stock en tiempo real</li>
                <li>✓ Envío de recibos por WhatsApp</li>
              </ul>
            </div>
            <div className="preview-phone">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="phone-header">InventarioAxel POS</div>
                  <div className="phone-row"><span>Teclado Mecánico</span><span>S/. 189.90</span></div>
                  <div className="phone-row"><span>Mouse Inalámbrico</span><span>S/. 45.00</span></div>
                  <div className="phone-row"><span>Monitor 24"</span><span>S/. 750.00</span></div>
                  <div className="phone-divider"></div>
                  <div className="phone-row phone-total"><span>Total</span><span>S/. 984.90</span></div>
                  <div className="phone-row phone-igv"><span>IGV (18%)</span><span>S/. 150.50</span></div>
                  <button className="phone-btn">Cobrar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Funcionalidades</span>
            <h2>Todo lo que necesitas en un solo lugar</h2>
            <p>Módulos diseñados para gestionar cada aspecto de tu negocio de forma eficiente.</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="advantages" id="advantages">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Ventajas</span>
            <h2>¿Por qué InventarioAxel?</h2>
            <p>Más que una app, es tu sistema comercial completo.</p>
          </div>
          <div className="advantages-grid">
            {advantages.map((a, i) => (
              <div className="advantage-card" key={i}>
                <span className="advantage-num">{a.num}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="download-section" id="download">
        <div className="container download-inner">
          <h2>Descarga InventarioAxel ahora</h2>
          <p>
            Disponible para Android. Comienza a gestionar tu negocio de forma profesional
            con una aplicación moderna, rápida y con soporte SUNAT integrado.
          </p>
          <button className="btn btn-primary btn-xl" onClick={handleDownload}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Descargar APK — v{APP_VERSION}
          </button>
          <p className="download-note">Archivo APK • Android 5.0+ • Libre de virus</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="logo-icon">📊</span>
            <span className="logo-text">InventarioAxel</span>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} InventarioAxel. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
