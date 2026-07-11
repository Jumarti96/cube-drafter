const COLOR_SYMBOLS = new Set(['W', 'U', 'B', 'R', 'G'])
const GENERIC_PATTERN = /^(\d+|X)$/

function scryfallSymbolKey(inner) {
  return inner.replace(/\//g, '')
}

function ManaSymbol({ symbol, size = 'md' }) {
  const inner = symbol
  const className = size === 'sm' ? 'mana-pip mana-pip-sm' : 'mana-pip'

  if (COLOR_SYMBOLS.has(inner)) {
    return (
      <img
        src={`/mana/${inner}.svg`}
        alt={`{${inner}}`}
        title={`{${inner}}`}
        className={className}
      />
    )
  }

  if (GENERIC_PATTERN.test(inner)) {
    return (
      <span className={`${className} mana-pip-generic`} aria-label={`{${inner}}`} title={`{${inner}}`}>
        {inner}
      </span>
    )
  }

  return (
    <img
      src={`https://svgs.scryfall.io/card-symbols/${scryfallSymbolKey(inner)}.svg`}
      alt={`{${inner}}`}
      title={`{${inner}}`}
      className={className}
    />
  )
}

function parseManaParts(text) {
  const parts = []
  const regex = /\{([^}]+)\}/g
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: text.slice(lastIndex, match.index) })
    }
    parts.push({ type: 'symbol', value: match[1] })
    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push({ type: 'text', value: text.slice(lastIndex) })
  }

  return parts
}

export function ManaText({ text, size = 'md', className = '' }) {
  if (!text) return null

  const parts = parseManaParts(text)
  if (!parts.some(p => p.type === 'symbol')) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={`mana-text ${className}`.trim()}>
      {parts.map((part, i) =>
        part.type === 'text'
          ? <span key={i}>{part.value}</span>
          : <ManaSymbol key={i} symbol={part.value} size={size} />
      )}
    </span>
  )
}

export function ManaCost({ cost, size = 'md', className = '' }) {
  if (!cost) return null
  return <ManaText text={cost} size={size} className={`mana-cost ${className}`.trim()} />
}
