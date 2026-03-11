import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

const NAV_LINKS = ['Funcionalidades', 'Segurança', 'Preços']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  // true once scrolled past the dark hero into white sections
  const [onLight, setOnLight] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      // Hero is ~100vh; switch to light mode at 80% of viewport height
      setOnLight(y > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // ── Dynamic tokens ──────────────────────────────────────────────────────────
  const navBg = onLight
    ? scrolled ? 'rgba(255,255,255,0.76)' : 'rgba(255,255,255,0.52)'
    : scrolled ? 'rgba(12,24,20,0.55)'    : 'rgba(12,24,20,0.30)'

  const navBlur = onLight
    ? scrolled ? 'blur(20px) saturate(180%)' : 'blur(12px) saturate(150%)'
    : 'blur(16px) saturate(120%)'

  const navBorder = onLight
    ? scrolled ? '1px solid rgba(17,21,19,0.09)' : '1px solid rgba(17,21,19,0.04)'
    : '1px solid rgba(255,255,255,0.10)'

  const navShadow = scrolled
    ? onLight
      ? '0 4px 24px rgba(15,18,17,0.07)'
      : '0 4px 24px rgba(0,0,0,0.2)'
    : 'none'

  const linkColor   = onLight ? '#66706B' : 'rgba(255,255,255,0.6)'
  const linkHover   = onLight ? '#111513' : 'rgba(255,255,255,0.92)'
  const logoColor   = onLight ? '#111513' : '#FFFFFF'
  const enterColor  = onLight ? 'rgba(17,21,19,0.65)' : 'rgba(255,255,255,0.65)'
  const ctaBg       = onLight ? '#111513' : '#EBE8D8'
  const ctaText     = onLight ? '#FFFFFF' : '#111513'
  // ────────────────────────────────────────────────────────────────────────────

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backdropFilter: navBlur,
          WebkitBackdropFilter: navBlur,
          background: navBg,
          borderBottom: navBorder,
          boxShadow: navShadow,
          transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
        }}
      >
        <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
          <div className="relative flex items-center justify-between h-14">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2 shrink-0">
              <div className="w-7 h-7 rounded-lg bg-forest flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1.5C4 1.5 1.5 4 1.5 7C1.5 10 4 12.5 7 12.5C10 12.5 12.5 10 12.5 7" stroke="#EBE8D8" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M7 4.5V7L9 9" stroke="#EBE8D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span
                className="font-semibold text-[15px] tracking-tight"
                style={{ color: logoColor, transition: 'color 0.3s ease' }}
              >
                Pluma
              </span>
            </a>

            {/* Desktop nav links — absolutely centered */}
            <div className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative text-[14px] font-medium group"
                  style={{ color: linkColor, transition: 'color 0.2s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.color = linkHover }}
                  onMouseLeave={e => { e.currentTarget.style.color = linkColor }}
                >
                  {item}
                  <span
                    className="absolute -bottom-0.5 left-0 w-0 h-px rounded-full transition-all duration-200 group-hover:w-full"
                    style={{ background: onLight ? 'rgba(17,21,19,0.4)' : 'rgba(255,255,255,0.5)' }}
                  />
                </a>
              ))}
            </div>

            {/* Desktop right actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#"
                className="text-[14px] font-medium px-3 py-1.5 rounded-lg transition-all duration-200"
                style={{ color: enterColor }}
              >
                Entrar
              </a>
              <button
                className="text-[13px] font-medium px-4 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-px"
                style={{
                  background: ctaBg,
                  color: ctaText,
                  transition: 'background 0.3s ease, color 0.3s ease, transform 0.15s ease',
                }}
              >
                Começar grátis
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-150"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileOpen
                ? <X size={18} strokeWidth={2} color={onLight ? '#111513' : '#FFFFFF'} />
                : <Menu size={18} strokeWidth={2} color={onLight ? '#111513' : '#FFFFFF'} />
              }
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(11,13,12,0.3)', backdropFilter: 'blur(2px)' }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-16 left-3 right-3 z-50 rounded-[20px] overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.92)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                border: '1px solid rgba(17,21,19,0.08)',
                boxShadow: '0 16px 48px rgba(15,18,17,0.16)',
              }}
            >
              <div className="px-5 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((item, i) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                    className="flex items-center text-graphite text-[15px] font-medium px-3 py-3 rounded-xl transition-colors duration-150"
                    style={{ color: '#111513' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}

                <div className="my-2" style={{ height: '1px', background: 'rgba(17,21,19,0.07)' }} />

                <div className="flex flex-col gap-2 pb-1">
                  <a
                    href="#"
                    className="text-center text-[14px] font-medium py-2.5 rounded-xl transition-colors duration-150"
                    style={{ color: 'rgba(17,21,19,0.6)' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    Entrar
                  </a>
                  <button
                    className="bg-graphite text-white text-[14px] font-medium py-3 rounded-full transition-all duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    Começar grátis
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
