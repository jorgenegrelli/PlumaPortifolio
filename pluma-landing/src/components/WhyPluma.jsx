import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, MessageSquare, RefreshCcw } from 'lucide-react'

const features = [
  {
    num: '01',
    icon: Building2,
    title: 'Conecta automaticamente',
    description:
      'Conecta todas as suas contas via Open Finance do Banco Central — sem digitar extratos, sem planilhas, sem esforço.',
    hoverBg: 'rgba(28,63,58,0.055)',
    iconBg: 'rgba(28,63,58,0.09)',
    iconColor: '#1C3F3A',
    numColor: 'rgba(28,63,58,0.07)',
    accentLine: '#1C3F3A',
  },
  {
    num: '02',
    icon: MessageSquare,
    title: 'Experiência personalizada',
    description:
      'Responde suas dúvidas em linguagem humana e sugere ações concretas para a sua situação financeira real.',
    hoverBg: 'rgba(17,21,19,0.038)',
    iconBg: 'rgba(17,21,19,0.07)',
    iconColor: '#52605A',
    numColor: 'rgba(17,21,19,0.05)',
    accentLine: '#52605A',
  },
  {
    num: '03',
    icon: RefreshCcw,
    title: 'Atualiza sozinho',
    description:
      'Não precisa inserir nenhuma informação manualmente. Você só conversa e toma decisões com clareza.',
    hoverBg: 'rgba(28,63,58,0.055)',
    iconBg: 'rgba(28,63,58,0.09)',
    iconColor: '#1C3F3A',
    numColor: 'rgba(28,63,58,0.07)',
    accentLine: '#1C3F3A',
  },
]

function FeatureCard({ num, icon: Icon, title, description, hoverBg, iconBg, iconColor, numColor, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
      className="group relative rounded-card p-8 cursor-default overflow-hidden"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(17,21,19,0.08)',
        boxShadow: '0 8px 28px rgba(15,18,17,0.05)',
      }}
    >
      {/* Hover fill */}
      <div
        className="absolute inset-0 rounded-card opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{ background: hoverBg, transition: 'opacity 0.3s ease' }}
      />

      {/* Large background number — decorative */}
      <div
        className="absolute top-4 right-5 font-semibold pointer-events-none select-none leading-none"
        style={{ fontSize: '80px', letterSpacing: '-0.06em', color: numColor }}
      >
        {num}
      </div>

      {/* Hover border highlight */}
      <div
        className="absolute inset-0 rounded-card opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: 'transparent',
          border: '1px solid rgba(17,21,19,0.12)',
          transition: 'opacity 0.25s ease',
          borderRadius: '24px',
        }}
      />

      <div className="relative">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-[14px] flex items-center justify-center mb-7"
          style={{ background: iconBg }}
        >
          <Icon size={19} color={iconColor} strokeWidth={1.5} />
        </div>

        {/* Number label — small, positioned above title */}
        <p
          className="font-medium mb-2"
          style={{ fontSize: '11px', letterSpacing: '0.08em', color: 'rgba(17,21,19,0.3)' }}
        >
          {num}
        </p>

        {/* Title */}
        <h3
          className="font-semibold text-graphite mb-3"
          style={{ fontSize: '19px', lineHeight: '1.25', letterSpacing: '-0.015em' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-smoke" style={{ fontSize: '15px', lineHeight: '1.72' }}>
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default function WhyPluma() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-white py-28 md:py-36 relative overflow-hidden">
      {/* Subtle top radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(28,63,58,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12 relative">
        {/* Section header */}
        <div ref={ref} className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12px] font-medium tracking-[0.12em] uppercase text-mist mb-4"
          >
            Por que Pluma
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.07 }}
              className="font-semibold text-graphite"
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                lineHeight: '1.08',
                letterSpacing: '-0.03em',
                maxWidth: '500px',
              }}
            >
              Por que Pluma?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
              className="text-mist"
              style={{ fontSize: '14px', maxWidth: '260px', lineHeight: '1.6' }}
            >
              Três razões pelas quais o Pluma é diferente de tudo que você já usou.
            </motion.p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
