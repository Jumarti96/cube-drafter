import { parseManaColors } from '../lib/cubeData.js'
import { useT } from '../i18n/useT.js'

const COLOR_ORDER = ['W', 'U', 'B', 'R', 'G']

export function ColorPips({ colors, className = '' }) {
  const t = useT()
  const sorted = parseManaColors(colors)
  if (!sorted.length) return null
  return (
    <span className={`color-pips ${className}`}>
      {sorted.map(c => {
        const name = t(`deck.color.${c}`) || c
        return (
          <img
            key={c}
            src={`/mana/${c}.svg`}
            alt={name}
            title={name}
            className="mana-pip"
          />
        )
      })}
    </span>
  )
}

export function colorToHex(color) {
  const map = { W: '#f9f5e3', U: '#4a90d9', B: '#1a1a1a', R: '#d94a3a', G: '#4a8c4a' }
  return map[color] || '#888'
}

export const COLOR_ORDER_VAL = COLOR_ORDER
