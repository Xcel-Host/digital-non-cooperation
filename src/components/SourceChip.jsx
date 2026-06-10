// Small citation chips. Pass sources: [{ label, url }].
// Empty array renders a "source pending" chip so missing
// research is visible instead of silently unsourced.
export default function SourceChip({ sources = [], isDark = true }) {
  const base = {
    fontSize: 10,
    fontWeight: 600,
    padding: '2px 8px',
    borderRadius: 5,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    whiteSpace: 'nowrap',
  }
  if (!sources.length) {
    return (
      <span style={{ ...base, background: isDark ? '#1f1503' : '#fff7e0', color: '#b8860b', border: '0.5px solid #4a3a10' }}>
        ⏳ source pending
      </span>
    )
  }
  return (
    <span style={{ display: 'inline-flex', gap: 6, flexWrap: 'wrap' }}>
      {sources.map((s, i) => (
        <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
          style={{ ...base, background: isDark ? '#16161a' : '#f4f4f0', color: isDark ? '#9aa4b2' : '#555', border: `0.5px solid ${isDark ? '#2a2a2a' : '#ddd'}` }}>
          🔗 {s.label}
        </a>
      ))}
    </span>
  )
}
