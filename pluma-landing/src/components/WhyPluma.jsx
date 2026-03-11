import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, MessageSquare, RefreshCcw } from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: 'Conecta automaticamente',
    description: 'Conecta todas as suas contas via Open Finance do Banco Central — sem digitar extratos, sem planilhas, sem esforço.',
    accent: 'rgba(28,63,58,0.07)',
    iconBg: 'rgba(28,63,58,0.1)',
    iconColor: '#1C3F3A',
  },
  {
    icon: MessageSquare,
    title: 'Experiência personalizada',
    description: 'Responde suas dúvidas em linguagem humana e sugere ações concretas para a sua situação financeira real.',
    accent: 'rgba(235,232,216,0.6)',
    iconBg: 'rgba(215,209,187,0.4)',
    iconColor: '#52605A',
  },
  {
    icon: RefreshCcw,
    title: 'Atualiza sozinho',
    description: 'Não precisa inserir nenhuma informação manualmente. Você só conversa e toma decisões com clareza.',
    accent: 'rgba(28,63,58,0.07)',
    iconBg: 'rgba(28,63,58,0.1)',
    iconColor: '#1C3F3A',
  },
]

function FeatureCard({ icon: Icon, title, description, accent, iconBg, iconColor, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative rounded-card p-8 cursor-default"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(17,21,19,0.08)',
        boxShadow: '0 10px 30px rgba(15,18,17,0.05)',
      }}
    >
      {/* Hover accent */}
      <div
        className="absolute inset-0 rounded-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: accent }}
      />

      <div className="relative">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
          style={{ background: iconBg }}
        >
          <Icon size={20} color={iconColor} strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3
          className="font-semibold text-graphite mb-3"
          style={{ fontSize: '20px', lineHeight: '1.25', letterSpacing: '-0.01em' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-smoke leading-relaxed" style={{ fontSize: '15px', lineHeight: '1.7' }}>
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
    <section className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div ref={ref} className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12px] font-medium tracking-[0.12em] uppercase text-mist mb-4"
          >
            Por que Pluma
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.07 }}
            className="font-semibold text-graphite"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              maxWidth: '520px',
            }}
          >
            Por que Pluma?
          </motion.h2>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
