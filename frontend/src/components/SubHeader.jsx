const TABS = [
  { id: 'explore',   label: 'Explore' },
  { id: 'holdings',  label: 'Holdings' },
  { id: 'positions', label: 'Positions' },
  { id: 'orders',    label: 'Orders' },
  { id: 'watchlist', label: 'Watchlist' },
];

export default function SubHeader({ activeTab, onTabChange }) {
  return (
    <div className="sub-header-container">
      <div className="sub-header">
        <nav className="sub-nav" id="main-tabs">
          {TABS.map(tab => (
            <a
              key={tab.id}
              href="#"
              className={activeTab === tab.id ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); onTabChange(tab.id); }}
            >
              {tab.label}
            </a>
          ))}
        </nav>
        <div className="sub-actions">
          <button className="terminal-btn" id="terminal-btn">
            <span className="material-icons">terminal</span>
            Terminal
          </button>
          <div className="wallet-balance">₹915</div>
        </div>
      </div>
    </div>
  );
}
