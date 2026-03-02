import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import './Admin.css'

export default function Admin() {
  const [messages, setMessages] = useState([])
  const [stats, setStats] = useState({ total: 0, unread: 0, today: 0 })
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('all') // all | unread
  const navigate = useNavigate()

  const token = localStorage.getItem('admin_token')

  const authFetch = useCallback(async (url, opts = {}) => {
    const res = await fetch(url, {
      ...opts,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...opts.headers,
      },
    })
    if (res.status === 401) {
      localStorage.removeItem('admin_token')
      navigate('/admin/login')
      return null
    }
    return res
  }, [token, navigate])

  const loadData = useCallback(async () => {
    try {
      const [msgRes, statsRes] = await Promise.all([
        authFetch('/api/admin/messages'),
        authFetch('/api/admin/stats'),
      ])
      if (msgRes && statsRes) {
        const msgData = await msgRes.json()
        const statsData = await statsRes.json()
        setMessages(msgData.messages)
        setStats(statsData)
      }
    } catch {
      console.error('Failed to load data')
    } finally {
      setLoading(false)
    }
  }, [authFetch])

  useEffect(() => {
    if (!token) {
      navigate('/admin/login')
      return
    }
    loadData()
  }, [token, navigate, loadData])

  const markAsRead = async (id) => {
    await authFetch(`/api/admin/messages/${id}/read`, { method: 'PATCH' })
    setMessages(msgs => msgs.map(m => m.id === id ? { ...m, read: 1 } : m))
    setStats(s => ({ ...s, unread: Math.max(0, s.unread - 1) }))
  }

  const deleteMessage = async (id) => {
    if (!window.confirm('Delete this message?')) return
    await authFetch(`/api/admin/messages/${id}`, { method: 'DELETE' })
    setMessages(msgs => msgs.filter(m => m.id !== id))
    setStats(s => ({ ...s, total: s.total - 1 }))
    if (selected?.id === id) setSelected(null)
  }

  const openMessage = (msg) => {
    setSelected(msg)
    if (!msg.read) markAsRead(msg.id)
  }

  const logout = () => {
    localStorage.removeItem('admin_token')
    navigate('/admin/login')
  }

  const filteredMessages = filter === 'unread'
    ? messages.filter(m => !m.read)
    : messages

  const formatDate = (dateStr) => {
    const d = new Date(dateStr + 'Z')
    const now = new Date()
    const diff = now - d
    if (diff < 60000) return 'Just now'
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="admin-loading__spinner" />
        <p>Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div className="admin">
      {/* Sidebar */}
      <aside className="admin__sidebar">
        <div className="admin__sidebar-header">
          <Logo size={28} />
          <span className="admin__sidebar-brand">Admin</span>
        </div>

        <nav className="admin__sidebar-nav">
          <a href="/admin" className="admin__sidebar-link admin__sidebar-link--active">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Messages
            {stats.unread > 0 && (
              <span className="admin__sidebar-badge">{stats.unread}</span>
            )}
          </a>
        </nav>

        <div className="admin__sidebar-footer">
          <a href="/" className="admin__sidebar-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to site
          </a>
          <button onClick={logout} className="admin__sidebar-link admin__sidebar-link--logout">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Log out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="admin__main">
        {/* Stats bar */}
        <div className="admin__stats">
          <div className="admin__stat">
            <span className="admin__stat-value">{stats.total}</span>
            <span className="admin__stat-label">Total Messages</span>
          </div>
          <div className="admin__stat">
            <span className="admin__stat-value admin__stat-value--primary">{stats.unread}</span>
            <span className="admin__stat-label">Unread</span>
          </div>
          <div className="admin__stat">
            <span className="admin__stat-value">{stats.today}</span>
            <span className="admin__stat-label">Today</span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="admin__toolbar">
          <h2 className="admin__toolbar-title">Inbox</h2>
          <div className="admin__toolbar-filters">
            <button
              className={`admin__filter-btn${filter === 'all' ? ' admin__filter-btn--active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({messages.length})
            </button>
            <button
              className={`admin__filter-btn${filter === 'unread' ? ' admin__filter-btn--active' : ''}`}
              onClick={() => setFilter('unread')}
            >
              Unread ({messages.filter(m => !m.read).length})
            </button>
          </div>
        </div>

        <div className="admin__content">
          {/* Message list */}
          <div className="admin__list">
            {filteredMessages.length === 0 ? (
              <div className="admin__empty">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <p>No {filter === 'unread' ? 'unread ' : ''}messages yet</p>
              </div>
            ) : (
              filteredMessages.map(msg => (
                <div
                  key={msg.id}
                  className={`admin__msg-row${!msg.read ? ' admin__msg-row--unread' : ''}${selected?.id === msg.id ? ' admin__msg-row--selected' : ''}`}
                  onClick={() => openMessage(msg)}
                >
                  <div className="admin__msg-indicator">
                    {!msg.read && <span className="admin__msg-dot" />}
                  </div>
                  <div className="admin__msg-preview">
                    <div className="admin__msg-top">
                      <span className="admin__msg-name">{msg.name}</span>
                      <span className="admin__msg-time">{formatDate(msg.created_at)}</span>
                    </div>
                    <p className="admin__msg-email">{msg.email}</p>
                    <p className="admin__msg-snippet">{msg.message.substring(0, 100)}{msg.message.length > 100 ? '...' : ''}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Message detail */}
          <div className={`admin__detail${selected ? ' admin__detail--open' : ''}`}>
            {selected ? (
              <>
                <div className="admin__detail-header">
                  <div>
                    <h3 className="admin__detail-name">{selected.name}</h3>
                    <a href={`mailto:${selected.email}`} className="admin__detail-email">{selected.email}</a>
                  </div>
                  <div className="admin__detail-actions">
                    <a href={`mailto:${selected.email}`} className="btn btn-primary admin__detail-btn">
                      Reply
                    </a>
                    <button
                      onClick={() => deleteMessage(selected.id)}
                      className="btn btn-secondary admin__detail-btn admin__detail-btn--delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <time className="admin__detail-date">{formatDate(selected.created_at)}</time>
                <div className="admin__detail-body">
                  {selected.message}
                </div>
                <button className="admin__detail-close" onClick={() => setSelected(null)}>
                  &times;
                </button>
              </>
            ) : (
              <div className="admin__detail-empty">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <p>Select a message to read</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
