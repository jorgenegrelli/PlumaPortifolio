import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

const NAV_LINKS = ['Funcionalidades', 'Segurança', 'Preços']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out"
        style={{
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(12px) saturate(150%)',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(12px) saturate(150%)',
          background: scrolled
            ? 'rgba(255, 255, 255, 0.72)'
            : 'rgba(255, 255, 255, 0.50)',
          borderBottom: scrolled
            ? '1px solid rgba(17, 21, 19, 0.08)'
            : '1px solid rgba(17, 21, 19, 0.04)',
          boxShadow: scrolled
            ? '0 4px 24px rgba(15, 18, 17, 0.07)'
            : 'none',
        }}
      >
        <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2 shrink-0">
              <div className="w-7 h-7 rounded-lg bg-forest flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1.5C4 1.5 1.5 4 1.5 7C1.5 10 4 12.5 7 12.5C10 12.5 12.5 10 12.5 7" stroke="#EBE8D8" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M7 4.5V7L9 9" stroke="#EBE8D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-graphite font-semibold text-[15px] tracking-tight">Pluma</span>
            </a>

            {/* Desktop nav links — centered */}
            <div className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative text-smoke hover:text-graphite text-[14px] font-medium transition-colors duration-200 group"
                >
                  {item}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-graphite/40 transition-all duration-200 group-hover:w-full rounded-full" />
                </a>
              ))}
            </div>

            {/* Desktop right actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#"
                className="text-graphite/70 text-[14px] font-medium px-3 py-1.5 rounded-lg hover:bg-black/5 transition-all duration-200"
              >
                Entrar
              </a>
              <button className="bg-graphite text-white text-[13px] font-medium px-4 py-2.5 rounded-full hover:bg-ink transition-all duration-200 hover:shadow-btn hover:-translate-y-px">
                Começar grátis
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-150 hover:bg-black/05"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileOpen
                ? <X size={18} color="#111513" strokeWidth={2} />
                : <Menu size={18} color="#111513" strokeWidth={2} />
              }
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(11, 13, 12, 0.25)', backdropFilter: 'blur(2px)' }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-16 left-3 right-3 z-50 rounded-[20px] overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                border: '1px solid rgba(17, 21, 19, 0.08)',
                boxShadow: '0 16px 48px rgba(15, 18, 17, 0.14)',
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
                    className="flex items-center text-graphite text-[15px] font-medium px-3 py-3 rounded-xl hover:bg-black/05 transition-colors duration-150"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}

                <div
                  className="my-2"
                  style={{ height: '1px', background: 'rgba(17,21,19,0.07)' }}
                />

                <div className="flex flex-col gap-2 pb-1">
                  <a
                    href="#"
                    className="text-center text-graphite/70 text-[14px] font-medium py-2.5 rounded-xl hover:bg-black/05 transition-colors duration-150"
                    onClick={() => setMobileOpen(false)}
                  >
                    Entrar
                  </a>
                  <button
                    className="bg-graphite text-white text-[14px] font-medium py-3 rounded-full hover:bg-ink transition-all duration-200"
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
