import { motion } from 'framer-motion'
import HeroVisual from './HeroVisual'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#1C3F3A' }}
    >
      {/* ── Atmospheric lighting ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top center beam */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.07) 0%, transparent 60%)' }}
        />
        {/* Left warm haze */}
        <div
          className="absolute top-[30%] left-[15%] w-[380px] h-[380px]"
          style={{
            background: 'radial-gradient(circle, rgba(235,232,216,0.07) 0%, transparent 70%)',
            filter: 'blur(48px)',
          }}
        />
        {/* Right green depth */}
        <div
          className="absolute top-[25%] right-[12%] w-[320px] h-[320px]"
          style={{
            background: 'radial-gradient(circle, rgba(28,80,60,0.45) 0%, transparent 70%)',
            filter: 'blur(56px)',
          }}
        />
      </div>

      {/* ── Centered copy ── */}
      <div className="relative mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div className="pt-36 pb-12 text-center" style={{ maxWidth: '720px', margin: '0 auto' }}>

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-8"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.14)',
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              style={{ boxShadow: '0 0 5px rgba(74,222,128,0.9)' }}
            />
            <span className="text-[12px] font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Open Finance × IA Conversacional
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-white font-semibold text-balance mb-6"
            style={{
              fontSize: 'clamp(40px, 5.8vw, 72px)',
              lineHeight: '1.0',
              letterSpacing: '-0.04em',
            }}
          >
            O primeiro assistente financeiro com IA que realmente entende seu dinheiro
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mx-auto mb-10"
            style={{
              fontSize: '18px',
              lineHeight: '1.65',
              maxWidth: '520px',
              color: 'rgba(255,255,255,0.52)',
            }}
          >
            O Pluma combina Open Finance com IA conversacional para dar respostas instantâneas
            sobre suas finanças — sem gráficos complicados ou cálculos manuais.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5"
          >
            <button
              className="font-semibold rounded-full px-8 text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]"
              style={{
                background: '#EBE8D8',
                color: '#111513',
                paddingTop: '15px',
                paddingBottom: '15px',
              }}
            >
              Começar grátis →
            </button>
            <button
              className="font-medium rounded-full px-8 text-[15px] transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.07)',
                color: 'rgba(255,255,255,0.8)',
                border: '1px solid rgba(255,255,255,0.16)',
                paddingTop: '15px',
                paddingBottom: '15px',
              }}
            >
              Ver demonstração
            </button>
          </motion.div>

          {/* Micro-text */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            style={{ fontSize: '12px', color: 'rgba(255,255,255,0.28)' }}
          >
            Sem cartão de crédito &nbsp;·&nbsp; Cancele quando quiser
          </motion.p>
        </div>
      </div>

      {/* ── Floating UI cards (full-width) ── */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        className="relative"
      >
        <HeroVisual />
      </motion.div>

      {/* ── Bottom fade to white ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(28,63,58,0.0) 100%)',
        }}
      />
    </section>
  )
}
