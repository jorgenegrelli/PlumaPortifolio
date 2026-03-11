import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, TrendingUp, PieChart, Wallet, AlertCircle, ShieldCheck, BarChart2 } from 'lucide-react'

const prompts = [
  'Quanto posso gastar neste fim de semana?',
  'Por que minha conta está sempre no vermelho?',
  'Consigo trocar de carro este ano?',
  'Onde estou gastando demais?',
  'Quanto preciso guardar para a reserva de emergência?',
]

const sampleCards = [
  {
    icon: TrendingUp,
    label: 'Saldo disponível',
    value: 'R$ 2.840',
    change: '+12%',
    positive: true,
  },
  {
    icon: PieChart,
    label: 'Gastos do mês',
    value: 'R$ 4.120',
    change: '-8% vs. média',
    positive: true,
  },
  {
    icon: Wallet,
    label: 'Para guardar',
    value: 'R$ 680',
    change: 'recomendado',
    positive: null,
  },
]

function SpendingBar({ label, pct, color }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] text-white/40 w-20 shrink-0">{label}</span>
      <div className="flex-1 h-1 rounded-full bg-white/05 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
      <span className="text-[11px] text-white/40 w-7 text-right">{pct}%</span>
    </div>
  )
}

export default function AIDemo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="relative overflow-hidden py-28 md:py-36"
      style={{ background: '#1C3F3A' }}
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at 80% 100%, rgba(215,209,187,0.06) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-content px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div ref={ref} className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12px] font-medium tracking-[0.12em] uppercase text-white/30 mb-4"
          >
            IA conversacional
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.07 }}
            className="font-semibold text-white"
            style={{
              fontSize: 'clamp(30px, 4vw, 48px)',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
            }}
          >
            Você tem perguntas,<br />a Pluma tem respostas
          </motion.h2>
        </div>

        {/* Main demo panel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="rounded-[28px] overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #151A18 0%, #0F1312 100%)',
            border: '1px solid rgba(255,255,255,0.09)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
          }}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
            </div>
            <div className="flex items-center gap-2 rounded-full px-3 py-1" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
              <span className="text-[11px] text-white/40">Pluma AI · Conectado ao Open Finance</span>
            </div>
            <div className="w-16" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Left: Chat + prompts */}
            <div className="lg:col-span-3 p-6 md:p-8" style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}>
              {/* Chat conversation */}
              <div className="space-y-4 mb-8">
                {/* User message */}
                <div className="flex justify-end">
                  <div
                    className="rounded-[14px] rounded-tr-[4px] px-4 py-3 max-w-[80%]"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <p className="text-[13px] text-white/80">Consigo trocar de carro este ano?</p>
                  </div>
                </div>

                {/* AI response */}
                <div className="flex gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(28,63,58,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <ShieldCheck size={13} color="#EBE8D8" />
                  </div>
                  <div
                    className="rounded-[14px] rounded-tl-[4px] px-5 py-4 flex-1"
                    style={{ background: 'rgba(28,63,58,0.3)', border: '1px solid rgba(28,63,58,0.5)' }}
                  >
                    <p className="text-[13px] text-white/80 leading-relaxed mb-3">
                      Com base nas suas finanças atuais: <span className="text-emerald-400/90 font-medium">sim, mas com condições</span>. Você tem capacidade de entrada de R$ 12.400 sem comprometer sua reserva de emergência.
                    </p>
                    <p className="text-[13px] text-white/60 leading-relaxed">
                      Para parcelas confortáveis (até 15% da renda), o ideal é um financiamento de até <span className="text-white/80 font-medium">60 meses</span> com entrada. Quer que eu simule as opções?
                    </p>
                  </div>
                </div>
              </div>

              {/* Input area */}
              <div
                className="rounded-[18px] px-5 py-4 flex items-center gap-4 mb-8"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span className="text-[13px] text-white/28 flex-1">Pergunte-me qualquer coisa sobre suas finanças</span>
                <button
                  className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <ArrowRight size={14} color="rgba(255,255,255,0.5)" />
                </button>
              </div>

              {/* Prompt chips */}
              <div>
                <p className="text-[11px] text-white/25 mb-3 tracking-wide uppercase">Sugestões</p>
                <div className="flex flex-wrap gap-2">
                  {prompts.map((p, i) => (
                    <motion.button
                      key={p}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                      whileHover={{
                        y: -2,
                        transition: { duration: 0.15 },
                      }}
                      className="rounded-full px-4 py-2.5 text-[12px] transition-all duration-200 cursor-pointer"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.09)',
                        color: 'rgba(247,247,243,0.75)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.09)'
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'
                      }}
                    >
                      {p}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Finance cards */}
            <div className="lg:col-span-2 p-6 md:p-8 space-y-4">
              <p className="text-[11px] text-white/30 tracking-wide uppercase mb-5">Visão financeira</p>

              {/* Summary cards */}
              {sampleCards.map(({ icon: Icon, label, value, change, positive }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
                  className="rounded-[16px] p-4"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={12} color="rgba(255,255,255,0.35)" />
                        <span className="text-[10px] text-white/35">{label}</span>
                      </div>
                      <p className="text-[17px] font-semibold text-white/85 tracking-tight">{value}</p>
                    </div>
                    <span
                      className="text-[10px] font-medium rounded-full px-2 py-1"
                      style={{
                        background: positive === true
                          ? 'rgba(74,222,128,0.12)'
                          : positive === false
                          ? 'rgba(248,113,113,0.12)'
                          : 'rgba(255,255,255,0.07)',
                        color: positive === true
                          ? 'rgba(74,222,128,0.85)'
                          : positive === false
                          ? 'rgba(248,113,113,0.85)'
                          : 'rgba(255,255,255,0.4)',
                      }}
                    >
                      {change}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Spending breakdown */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="rounded-[16px] p-4"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex items-center gap-1.5 mb-4">
                  <BarChart2 size={11} color="rgba(255,255,255,0.35)" />
                  <span className="text-[10px] text-white/35">Distribuição de gastos</span>
                </div>
                <div className="space-y-2.5">
                  <SpendingBar label="Moradia" pct={38} color="rgba(28,63,58,0.8)" />
                  <SpendingBar label="Alimentação" pct={24} color="rgba(215,209,187,0.6)" />
                  <SpendingBar label="Transporte" pct={16} color="rgba(255,255,255,0.25)" />
                  <SpendingBar label="Lazer" pct={14} color="rgba(28,63,58,0.4)" />
                  <SpendingBar label="Outros" pct={8} color="rgba(255,255,255,0.12)" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
