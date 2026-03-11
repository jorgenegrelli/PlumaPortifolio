import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Lock, ShieldCheck, Globe, Server } from 'lucide-react'

const assurances = [
  {
    icon: ShieldCheck,
    text: 'Open Finance certificado pelo Banco Central',
  },
  {
    icon: Lock,
    text: 'Mesma segurança que seu internet banking',
  },
  {
    icon: Globe,
    text: 'Seus dados nunca saem do Brasil',
  },
  {
    icon: Server,
    text: 'Criptografia de ponta a ponta',
  },
]

function AssuranceCard({ icon: Icon, text, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 + index * 0.1 }}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
      className="flex items-center gap-4 rounded-[18px] px-6 py-5 cursor-default"
      style={{
        background: 'rgba(255,255,255,0.72)',
        border: '1px solid rgba(17,21,19,0.07)',
        boxShadow: '0 8px 24px rgba(15,18,17,0.05)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(28,63,58,0.1)' }}
      >
        <Icon size={18} color="#1C3F3A" strokeWidth={1.5} />
      </div>
      <p className="text-graphite font-medium" style={{ fontSize: '15px', lineHeight: '1.4' }}>
        {text}
      </p>
    </motion.div>
  )
}

export default function Safety() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="relative overflow-hidden py-28 md:py-36"
      style={{
        background: 'linear-gradient(135deg, #F5F3E8 0%, #EBE8D8 35%, #E0DCC8 65%, #EBE8D8 100%)',
      }}
    >
      {/* Grain texture */}
      <div className="absolute inset-0 grain-overlay" />

      {/* Warm radial glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.6) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 100%, rgba(215,209,187,0.5) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[12px] font-medium tracking-[0.12em] uppercase text-smoke mb-6"
            >
              Privacidade & Segurança
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.07 }}
              className="font-semibold text-graphite mb-6"
              style={{
                fontSize: 'clamp(30px, 4vw, 48px)',
                lineHeight: '1.1',
                letterSpacing: '-0.03em',
              }}
            >
              Seus dados estão seguros conosco
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
              className="text-smoke leading-relaxed mb-10"
              style={{ fontSize: '17px', lineHeight: '1.7', maxWidth: '420px' }}
            >
              Construído sobre os padrões do Open Finance brasileiro, com segurança de nível bancário e infraestrutura 100% local.
            </motion.p>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.21 }}
              className="flex items-center gap-8"
            >
              {['Banco Central', 'LGPD', 'ISO 27001'].map((badge) => (
                <div key={badge} className="flex flex-col items-center gap-1">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(28,63,58,0.1)', border: '1px solid rgba(28,63,58,0.15)' }}
                  >
                    <CheckCircle2 size={16} color="#1C3F3A" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-medium text-smoke">{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column: assurance cards */}
          <div className="space-y-3">
            {assurances.map((a, i) => (
              <AssuranceCard key={a.text} {...a} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
