import { useEffect, useState } from 'react'
import './GitHubStats.css'

const REPOS = ['ARIA-AI-Assistant', 'Aurora-Chatbot', 'Particle-Physics-Simulator', 'n8n-workflows']

function GitHubStats() {
  const [stats, setStats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // fetch each repo from GitHub public API
    Promise.all(
      REPOS.map((repo) =>
        fetch(`https://api.github.com/repos/0xLostname/${repo}`)
          .then((res) => res.json())
      )
    )
      .then((data) => {
        setStats(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="gh-loading">> fetching github stats...</p>
  if (error)   return <p className="gh-loading">> could not reach github api.</p>

  return (
    <div className="gh-grid">
      {stats.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="gh-card"
        >
          <p className="gh-name">{repo.name}</p>
          <p className="gh-desc">{repo.description || 'No description'}</p>
          <div className="gh-meta">
            {repo.language && <span className="gh-lang">{repo.language}</span>}
            <span className="gh-stat">★ {repo.stargazers_count}</span>
            <span className="gh-stat">⑂ {repo.forks_count}</span>
          </div>
        </a>
      ))}
    </div>
  )
}

export default GitHubStats
