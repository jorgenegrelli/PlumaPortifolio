export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-12 md:py-16"
      style={{
        background: '#111513',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-md bg-forest flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1.5C4 1.5 1.5 4 1.5 7C1.5 10 4 12.5 7 12.5C10 12.5 12.5 10 12.5 7" stroke="#EBE8D8" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M7 4.5V7L9 9" stroke="#EBE8D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-white/80 font-semibold text-[14px] tracking-tight">Pluma</span>
            </div>
            <p className="text-[12px] text-white/25">Finanças inteligentes para o Brasil</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              ['Funcionalidades', '#'],
              ['Segurança', '#'],
              ['Preços', '#'],
              ['Blog', '#'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[13px] text-white/35 hover:text-white/65 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Legal links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              ['Privacidade', '#'],
              ['Termos', '#'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[12px] text-white/25 hover:text-white/45 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-[11px] text-white/20">
            © {year} Pluma Tecnologia Financeira LTDA. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-white/15">
            CNPJ 00.000.000/0001-00 · São Paulo, SP
          </p>
        </div>
      </div>
    </footer>
  )
}
