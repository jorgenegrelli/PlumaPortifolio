import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  CreditCard,
  PiggyBank,
  TrendingUp,
  BarChart2,
} from 'lucide-react'

// ── Smooth sparkline ──────────────────────────────────────────────────────────
function Sparkline({ w = 100, h = 36 }) {
  const pts = [38, 52, 44, 58, 51, 67, 62, 73, 68, 82]
  const max = 100
  const coords = pts.map((p, i) => [
    (i / (pts.length - 1)) * w,
    h - (p / max) * h,
  ])
  let d = `M ${coords[0][0].toFixed(1)} ${coords[0][1].toFixed(1)}`
  for (let i = 1; i < coords.length - 1; i++) {
    const x2 = (coords[i][0] + coords[i + 1][0]) / 2
    const y2 = (coords[i][1] + coords[i + 1][1]) / 2
    d += ` Q ${coords[i][0].toFixed(1)} ${coords[i][1].toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`
  }
  d += ` L ${coords[coords.length - 1][0]} ${coords[coords.length - 1][1]}`
  const fill = d + ` L ${w} ${h} L 0 ${h} Z`
  const [lx, ly] = coords[coords.length - 1]

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" className="overflow-visible">
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3DA882" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#3DA882" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill="url(#sg)" />
      <path d={d} stroke="#3DA882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={lx} cy={ly} r="2.5" fill="#4ade80" />
      <circle cx={lx} cy={ly} r="5" fill="#4ade80" fillOpacity="0.2" />
    </svg>
  )
}

// ── Mini bar ─────────────────────────────────────────────────────────────────
function Bar({ label, pct, color }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] w-16 shrink-0" style={{ color: 'rgba(17,21,19,0.45)' }}>{label}</span>
      <div className="flex-1 h-[3px] rounded-full" style={{ background: 'rgba(17,21,19,0.08)' }}>
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="text-[10px]" style={{ color: 'rgba(17,21,19,0.4)' }}>{pct}%</span>
    </div>
  )
}

// ── White card surface ────────────────────────────────────────────────────────
const whiteCard = {
  background: '#FFFFFF',
  border: '1px solid rgba(17,21,19,0.07)',
  boxShadow: '0 24px 56px rgba(0,0,0,0.22), 0 6px 16px rgba(0,0,0,0.1)',
}

// ── Dark card surface ─────────────────────────────────────────────────────────
const darkCard = {
  background: 'linear-gradient(150deg, #1A2820 0%, #121917 100%)',
  border: '1px solid rgba(255,255,255,0.09)',
  boxShadow: '0 24px 56px rgba(0,0,0,0.45), 0 6px 16px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.07)',
}

export default function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full"
      style={{ maxWidth: '1200px', height: '500px', padding: '0 24px' }}
    >

      {/* ── Card A — Patrimônio total (white, left) ── */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -2.5 }}
        animate={{ opacity: 1, y: 0, rotate: -2.5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="absolute rounded-[22px] p-5"
        style={{ ...whiteCard, width: '230px', top: '2%', left: '2%' }}
      >
        <div className="flex items-center gap-1.5 mb-4">
          <TrendingUp size={11} color="rgba(17,21,19,0.4)" />
          <span className="text-[10px] font-medium tracking-wide uppercase" style={{ color: 'rgba(17,21,19,0.4)' }}>
            Patrimônio total
          </span>
        </div>
        <p className="font-semibold text-graphite mb-1" style={{ fontSize: '26px', letterSpacing: '-0.03em', lineHeight: 1 }}>
          R$ 24.380
        </p>
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex items-center gap-0.5 rounded-full px-1.5 py-0.5" style={{ background: 'rgba(74,222,128,0.1)' }}>
            <ArrowUpRight size={9} color="#16a34a" />
            <span className="text-[10px] font-medium text-green-700">+R$ 1.240</span>
          </div>
          <span className="text-[10px]" style={{ color: 'rgba(17,21,19,0.35)' }}>este mês</span>
        </div>
        <Sparkline w={180} h={38} />
      </motion.div>

      {/* ── Card B — AI insight (dark, center-left) ── */}
      <motion.div
        initial={{ opacity: 0, y: 28, rotate: 1.5 }}
        animate={{ opacity: 1, y: 0, rotate: 1.5 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.62 }}
        className="absolute rounded-[22px] p-5"
        style={{ ...darkCard, width: '288px', top: '4%', left: '50%', transform: 'translateX(-58%) rotate(1.5deg)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(28,63,58,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <Sparkles size={11} color="#EBE8D8" />
            </div>
            <span className="text-[11px] font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Pluma AI</span>
          </div>
          <div className="flex items-center gap-1" style={{ background: 'rgba(74,222,128,0.08)', borderRadius: '999px', padding: '3px 8px', border: '1px solid rgba(74,222,128,0.18)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 4px rgba(74,222,128,0.8)' }} />
            <span className="text-[9px] font-medium" style={{ color: 'rgba(74,222,128,0.7)', letterSpacing: '0.08em' }}>ONLINE</span>
          </div>
        </div>

        {/* User message */}
        <div className="flex justify-end mb-3">
          <div
            className="rounded-[12px] rounded-tr-[4px] px-3.5 py-2.5"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.07)', maxWidth: '85%' }}
          >
            <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Consigo trocar de carro este ano?
            </p>
          </div>
        </div>

        {/* AI bubble */}
        <div
          className="rounded-[12px] rounded-tl-[4px] p-3.5"
          style={{ background: 'rgba(28,63,58,0.35)', border: '1px solid rgba(28,80,60,0.5)' }}
        >
          <div className="flex gap-2">
            <MessageSquare size={11} color="rgba(235,232,216,0.6)" className="mt-0.5 shrink-0" />
            <p className="text-[12px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Sim! Com entrada de{' '}
              <span className="font-semibold" style={{ color: 'rgba(74,222,128,0.9)' }}>R$ 12.400</span>
              {' '}e financiamento em 60x, as parcelas ficam confortáveis.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── Card C — Cartões (white, right) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 2.5 }}
        animate={{ opacity: 1, y: 0, rotate: 2.5 }}
        transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: 0.72 }}
        className="absolute rounded-[22px] p-5"
        style={{ ...whiteCard, width: '200px', top: '1%', right: '3%' }}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'rgba(28,63,58,0.08)' }}>
            <CreditCard size={14} color="#1C3F3A" />
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-wide font-medium" style={{ color: 'rgba(17,21,19,0.4)' }}>Cartão</p>
            <p className="text-[14px] font-semibold text-graphite leading-tight">R$ 3.200</p>
          </div>
        </div>
        <div
          className="flex items-center gap-2 rounded-[10px] p-2.5"
          style={{ background: 'rgba(28,63,58,0.05)', border: '1px solid rgba(28,63,58,0.08)' }}
        >
          <PiggyBank size={12} color="#1C3F3A" />
          <div>
            <p className="text-[9px]" style={{ color: 'rgba(17,21,19,0.4)' }}>Reserva</p>
            <p className="text-[12px] font-semibold text-graphite">R$ 8.500</p>
          </div>
          <span className="ml-auto text-[9px] font-medium text-green-700">71%</span>
        </div>
      </motion.div>

      {/* ── Card D — Gastos do mês (white, lower center-left) ── */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -1.5 }}
        animate={{ opacity: 1, y: 0, rotate: -1.5 }}
        transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
        className="absolute rounded-[22px] p-5"
        style={{ ...whiteCard, width: '220px', bottom: '8%', left: '16%' }}
      >
        <div className="flex items-center gap-1.5 mb-3">
          <BarChart2 size={11} color="rgba(17,21,19,0.4)" />
          <span className="text-[10px] font-medium uppercase tracking-wide" style={{ color: 'rgba(17,21,19,0.4)' }}>
            Gastos do mês
          </span>
        </div>
        <p className="text-[22px] font-semibold text-graphite mb-3" style={{ letterSpacing: '-0.025em', lineHeight: 1 }}>
          R$ 4.120
        </p>
        <div className="space-y-2">
          <Bar label="Moradia" pct={38} color="#1C3F3A" />
          <Bar label="Alimentação" pct={24} color="rgba(28,63,58,0.5)" />
          <Bar label="Transporte" pct={16} color="rgba(28,63,58,0.28)" />
        </div>
      </motion.div>

      {/* ── Card E — Saldo disponível (dark, lower right) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 2 }}
        transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: 0.88 }}
        className="absolute rounded-[20px] px-5 py-4"
        style={{ ...darkCard, width: '192px', bottom: '12%', right: '14%' }}
      >
        <p className="text-[9px] font-medium uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Saldo disponível
        </p>
        <p className="font-semibold text-white mb-2" style={{ fontSize: '20px', letterSpacing: '-0.025em', lineHeight: 1 }}>
          R$ 2.840
        </p>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-0.5 rounded-full px-1.5 py-0.5" style={{ background: 'rgba(74,222,128,0.1)' }}>
            <ArrowUpRight size={8} color="#4ade80" />
            <span className="text-[9px] font-medium text-emerald-400">+12%</span>
          </div>
          <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.28)' }}>vs. mês passado</span>
        </div>
      </motion.div>

      {/* ── Open Finance pill (center bottom) ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
        className="absolute rounded-full px-5 py-2.5"
        style={{
          bottom: '4%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(28,63,58,0.92)',
          border: '1px solid rgba(255,255,255,0.16)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.35), 0 0 28px rgba(28,63,58,0.6)',
          whiteSpace: 'nowrap',
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 5px rgba(74,222,128,0.9)' }} />
          <span className="text-[12px] font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Open Finance certificado pelo Banco Central
          </span>
        </div>
      </motion.div>

      {/* ── Bottom section fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #1C3F3A 100%)' }}
      />
    </div>
  )
}
