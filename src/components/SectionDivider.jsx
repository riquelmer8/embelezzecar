export function DividerAngle({ from = '#f5f5f5', to = '#1A1A1A', flip = false }) {
  return (
    <div className={`relative h-20 md:h-32 -mt-1 ${flip ? 'rotate-180' : ''}`} style={{ background: from }}>
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill={to}
      >
        <path d="M0,0 L1440,80 L1440,120 L0,120 Z" />
      </svg>
    </div>
  )
}

export function DividerWave({ from = '#1A1A1A', to = '#f5f5f5' }) {
  return (
    <div className="relative h-20 md:h-28 -mt-1" style={{ background: from }}>
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill={to}
      >
        <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" />
      </svg>
    </div>
  )
}
