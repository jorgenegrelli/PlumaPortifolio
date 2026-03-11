import { motion } from 'framer-motion'
import { TrendingUp, ArrowUpRight, MessageSquare, Sparkles, CreditCard, PiggyBank } from 'lucide-react'

function MiniChart() {
  const points = [40, 55, 45, 62, 58, 72, 68, 80, 75, 88]
  const max = 100
  const w = 120
  const h = 44

  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w
      const y = h - (p / max) * h
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
    })
    .join(' ')

  const areaPath =
    path + ` L ${w} ${h} L 0 ${h} Z`

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" className="overflow-visible">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1C3F3A" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1C3F3A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#chartGrad)" />
      <path d={path} stroke="#1C3F3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #1C3F3A 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
      </div>

      {/* Main panel */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="relative w-full max-w-[440px]"
        style={{ animation: 'float 7s ease-in-out infinite' }}
      >
        {/* Dashboard panel */}
        <div
          className="rounded-[28px] overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #151A18 0%, #0F1312 100%)',
            border: '1px solid rgba(255,255,255,0.09)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
          }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-forest/40 flex items-center justify-center">
                <Sparkles size={10} color="#EBE8D8" />
              </div>
              <span className="text-[11px] font-medium text-white/50 tracking-wide uppercase">Pluma AI</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
              <span className="text-[10px] text-white/30">Online</span>
            </div>
          </div>

          {/* Balance card */}
          <div className="mx-4 mb-3 rounded-[18px] p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] text-white/40 mb-1">Saldo total</p>
                <p className="text-[22px] font-semibold text-white/90 tracking-tight">R$ 24.380</p>
                <div className="flex items-center gap-1 mt-1">
                  <ArrowUpRight size={11} color="#4ade80" />
                  <span className="text-[11px] text-emerald-400/80">+R$ 1.240 este mês</span>
                </div>
              </div>
              <div className="pt-1">
                <MiniChart />
              </div>
            </div>
          </div>

          {/* Cards row */}
          <div className="mx-4 grid grid-cols-2 gap-2 mb-3">
            {[
              { icon: CreditCard, label: 'Cartão', value: 'R$ 3.200', sub: 'limite disponível', color: 'rgba(28,63,58,0.5)' },
              { icon: PiggyBank, label: 'Reserva', value: 'R$ 8.500', sub: 'meta: R$ 12k', color: 'rgba(215,209,187,0.12)' },
            ].map(({ icon: Icon, label, value, sub, color }) => (
              <div
                key={label}
                className="rounded-[14px] p-3"
                style={{ background: color, border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <Icon size={13} color="rgba(255,255,255,0.5)" className="mb-2" />
                <p className="text-[10px] text-white/40 mb-0.5">{label}</p>
                <p className="text-[13px] font-semibold text-white/85">{value}</p>
                <p className="text-[9px] text-white/30 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>

          {/* AI Chat bubble */}
          <div className="mx-4 mb-4 rounded-[16px] p-3.5" style={{ background: 'rgba(28,63,58,0.25)', border: '1px solid rgba(28,63,58,0.4)' }}>
            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-full bg-forest/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MessageSquare size={10} color="#EBE8D8" />
              </div>
              <div>
                <p className="text-[11px] text-white/75 leading-relaxed">
                  Com base nos seus padrões de gasto, você pode <span className="text-emerald-400/90 font-medium">poupar R$ 680</span> este mês reduzindo refeições fora de casa em 30%.
                </p>
              </div>
            </div>
          </div>

          {/* Input area */}
          <div
            className="mx-4 mb-5 rounded-[14px] px-4 py-3 flex items-center gap-3"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <span className="text-[12px] text-white/30 flex-1">Pergunte sobre suas finanças...</span>
            <div className="w-6 h-6 rounded-full bg-forest/70 flex items-center justify-center flex-shrink-0">
              <TrendingUp size={11} color="#EBE8D8" />
            </div>
          </div>
        </div>

        {/* Floating accent card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="absolute -right-8 top-16 rounded-[16px] px-4 py-3"
          style={{
            background: 'rgba(235,232,216,0.95)',
            border: '1px solid rgba(17,21,19,0.08)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-forest/10 flex items-center justify-center">
              <TrendingUp size={13} color="#1C3F3A" />
            </div>
            <div>
              <p className="text-[10px] text-graphite/50 mb-0.5">Investimento sugerido</p>
              <p className="text-[13px] font-semibold text-graphite">R$ 1.200/mês</p>
            </div>
          </div>
        </motion.div>

        {/* Floating tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="absolute -left-6 bottom-20 rounded-full px-3.5 py-2"
          style={{
            background: 'rgba(28,63,58,0.9)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          }}
        >
          <p className="text-[11px] text-white/80 font-medium">Open Finance ✓</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
