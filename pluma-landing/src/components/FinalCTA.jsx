import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const benefits = [
  '14 dias grátis — cancele quando quiser',
  'Conecte suas contas em 2 minutos via Open Finance',
  'Sem pegadinhas — preço fixo após o trial',
]

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="relative overflow-hidden py-28 md:py-40"
      style={{ background: '#1C3F3A' }}
    >
      {/* Cinematic radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px]"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(235,232,216,0.06) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Subtle top divider line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }}
      />

      <div ref={ref} className="relative mx-auto max-w-content px-6 md:px-8 lg:px-12 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[12px] font-medium tracking-[0.12em] uppercase text-white/30 mb-6"
        >
          Comece hoje
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.07 }}
          className="font-semibold text-white mx-auto mb-10"
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            lineHeight: '1.05',
            letterSpacing: '-0.035em',
            maxWidth: '640px',
          }}
        >
          Retome o controle da sua vida financeira
        </motion.h2>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12"
        >
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-2.5">
              <CheckCircle2 size={15} color="rgba(255,255,255,0.45)" strokeWidth={1.5} />
              <span className="text-[14px] text-white/60">{b}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.21 }}
        >
          <button
            className="group inline-flex items-center gap-3 font-medium rounded-full px-8 py-4.5 text-[15px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            style={{
              background: '#F7F7F3',
              color: '#111513',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            }}
          >
            Teste grátis agora
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Small UI preview strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="mt-20 mx-auto max-w-2xl"
        >
          <div
            className="rounded-[20px] p-5 grid grid-cols-3 gap-3"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {[
              { label: 'Saldo total', value: 'R$ 24.380', change: '+8.2%' },
              { label: 'Meta de reserva', value: '72% atingido', change: 'No caminho certo' },
              { label: 'Economia mensal', value: 'R$ 1.840', change: '↑ vs. mês anterior' },
            ].map(({ label, value, change }) => (
              <div
                key={label}
                className="rounded-[14px] px-4 py-3.5 text-center"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-[10px] text-white/30 mb-1.5">{label}</p>
                <p className="text-[14px] font-semibold text-white/80 mb-1">{value}</p>
                <p className="text-[10px] text-emerald-400/60">{change}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
