import { useEffect, useState } from 'react'
import './GitHubHeatmap.css'

const USERNAME = '0xLostname'
const WEEKS = 26 // last 6 months

function getDateGrid() {
  const today = new Date()
  const days = []
  // go back WEEKS*7 days
  const start = new Date(today)
  start.setDate(start.getDate() - WEEKS * 7 + 1)
  for (let d = new Date(start); d <= today; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d).toISOString().slice(0, 10))
  }
  return days
}

function GitHubHeatmap() {
  const [counts, setCounts] = useState({})
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // GitHub's public events API — gives last 300 events
    fetch(`https://api.github.com/users/${USERNAME}/events/public?per_page=100`)
      .then(r => r.json())
      .then(events => {
        const map = {}
        if (Array.isArray(events)) {
          events.forEach(ev => {
            const date = ev.created_at?.slice(0, 10)
            if (date) map[date] = (map[date] || 0) + 1
          })
        }
        setCounts(map)
        setTotal(Object.values(map).reduce((a, b) => a + b, 0))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const days = getDateGrid()

  // pad start so first column starts on Sunday
  const firstDay = new Date(days[0]).getDay() // 0=Sun
  const padded = [...Array(firstDay).fill(null), ...days]

  // chunk into weeks
  const weeks = []
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7))
  }

  function getLevel(date) {
    if (!date) return -1
    const c = counts[date] || 0
    if (c === 0) return 0
    if (c <= 2) return 1
    if (c <= 5) return 2
    if (c <= 9) return 3
    return 4
  }

  const monthLabels = []
  weeks.forEach((week, wi) => {
    const firstReal = week.find(d => d)
    if (firstReal) {
      const d = new Date(firstReal)
      if (d.getDate() <= 7) {
        monthLabels.push({ wi, label: d.toLocaleString('default', { month: 'short' }) })
      }
    }
  })

  if (loading) return <p className="gh-loading">> loading contributions...</p>

  return (
    <div className="heatmap-wrap">
      <div className="heatmap-header">
        <span className="heatmap-count">{total} contributions in the last 6 months</span>
        <div className="heatmap-legend">
          <span>less</span>
          {[0,1,2,3,4].map(l => <span key={l} className={`hm-cell level-${l}`} />)}
          <span>more</span>
        </div>
      </div>

      <div className="heatmap-scroll">
        <div className="heatmap-grid">
          {/* month labels row */}
          <div className="hm-months">
            {weeks.map((_, wi) => {
              const lbl = monthLabels.find(m => m.wi === wi)
              return <span key={wi} className="hm-month">{lbl ? lbl.label : ''}</span>
            })}
          </div>

          {/* day rows */}
          {[0,1,2,3,4,5,6].map(dayOfWeek => (
            <div key={dayOfWeek} className="hm-row">
              {weeks.map((week, wi) => {
                const date = week[dayOfWeek]
                const level = getLevel(date)
                if (level === -1) return <span key={wi} className="hm-cell hm-pad" />
                return (
                  <span
                    key={wi}
                    className={`hm-cell level-${level}`}
                    title={date ? `${date}: ${counts[date] || 0} events` : ''}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GitHubHeatmap
