import { motion } from 'framer-motion'
import HeroVisual from './HeroVisual'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col overflow-hidden">
      {/* Subtle radial wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(28,63,58,0.05) 0%, transparent 65%)',
        }}
      />

      <div className="mx-auto max-w-content w-full px-6 md:px-8 lg:px-12 flex-1 flex flex-col">
        {/* Main content */}
        <div className="flex-1 flex items-center pt-24 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
            {/* Text column */}
            <div className="max-w-xl">
              {/* Badge */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0}
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-8"
                style={{ background: 'rgba(28,63,58,0.06)', border: '1px solid rgba(28,63,58,0.12)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-forest" />
                <span className="text-[12px] font-medium text-forest tracking-wide">Open Finance × IA Conversacional</span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={1}
                className="text-balance font-semibold text-graphite mb-6"
                style={{
                  fontSize: 'clamp(38px, 5.5vw, 64px)',
                  lineHeight: '1.0',
                  letterSpacing: '-0.035em',
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
                className="text-smoke mb-10"
                style={{ fontSize: '18px', lineHeight: '1.65', maxWidth: '480px' }}
              >
                O Pluma é o único app que combina Open Finance com IA conversacional para dar respostas instantâneas sobre suas finanças — sem gráficos complicados ou cálculos manuais.
              </motion.p>

              {/* CTA block */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={3}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <button
                  className="group bg-graphite text-white font-medium rounded-full px-7 py-4 text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:shadow-btn"
                >
                  Teste grátis por 14 dias
                </button>

                <div className="flex flex-col">
                  <span className="text-[13px] text-mist">Sem cartão de crédito</span>
                  <span className="text-[13px] text-mist">Cancele quando quiser</span>
                </div>
              </motion.div>

              {/* Social proof */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={4}
                className="flex items-center gap-3 mt-10 pt-8"
                style={{ borderTop: '1px solid rgba(17,21,19,0.07)' }}
              >
                <div className="flex -space-x-2">
                  {['#2D5E58', '#3A6B65', '#1C3F3A', '#4A7A74'].map((c, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] font-semibold"
                      style={{ background: c }}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-graphite">+2.400 pessoas já usam</p>
                  <p className="text-[12px] text-mist">no período de acesso antecipado</p>
                </div>
              </motion.div>
            </div>

            {/* Visual column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative h-[520px] lg:h-[600px] hidden lg:flex items-center justify-center"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
