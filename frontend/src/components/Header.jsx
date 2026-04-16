import { useState, useEffect, useRef } from 'react';

export default function Header({ onTabChange }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const profileRef = useRef(null);
  const searchRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleOutsideClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  // Ctrl+K focuses search
  useEffect(() => {
    function handleKeydown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  const handleSettingsClick = (e) => {
    e.preventDefault();
    setDropdownOpen(false);
    onTabChange('settings');
  };

  return (
    <header className="top-header">
      <div className="header-left">
        <a href="/" className="logo">
          <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/_next/static/media/growwLogo.8624b069.svg"
               alt="Groww" width="40" height="40"
               onError={(e) => { e.target.src = 'https://groww.in/favicon.ico'; }} />
        </a>
        <nav className="main-nav">
          <a href="#" className="active" onClick={() => onTabChange('explore')}>Stocks</a>
          <a href="#">F&amp;O</a>
          <a href="#">Mutual Funds</a>
        </nav>
      </div>

      <div className="header-center">
        <div className="search-bar">
          <span className="material-icons search-icon">search</span>
          <input
            type="text"
            id="search-input"
            ref={searchRef}
            placeholder="Search Groww..."
          />
          <span className="search-shortcut">Ctrl+K</span>
        </div>
      </div>

      <div className="header-right">
        <button className="terminal-btn" style={{ border: 'none', background: '#f8f9fb', marginRight: 10 }}>
          <span className="material-icons">vibration</span> Terminal
        </button>
        <span className="wallet-balance" style={{ border: 'none', marginRight: 15 }}>915</span>
        <span className="material-icons icon-btn">search</span>
        <span className="material-icons icon-btn">notifications_none</span>
        
        <div className="profile-container" ref={profileRef}>
          <div
            className="profile-icon"
            onClick={(e) => { e.stopPropagation(); setDropdownOpen(o => !o); }}
          >
            <img
              src="https://ui-avatars.com/api/?name=Aakash+Mehta&background=6C63FF&color=fff"
              alt="Aakash Mehta"
            />
          </div>

          {/* New High-Fidelity Profile Dropdown */}
          <div className={`profile-dropdown ${dropdownOpen ? 'active' : ''}`}>
            <div className="profile-dropdown-header">
              <div className="user-meta">
                <h4>Aakash Mehta</h4>
                <p>aakashmehta@gmail.com</p>
              </div>
              <span className="material-icons drop-settings-icon" onClick={handleSettingsClick}>settings</span>
            </div>

            <div className="drop-balance-section">
              <div className="balance-info">
                <div className="wallet-box">
                  <span className="material-icons">account_balance_wallet</span>
                </div>
                <div className="balance-text">
                  <div>₹0.00</div>
                  <div>Stocks, F&amp;O balance</div>
                </div>
              </div>
              <span className="material-icons chevron">chevron_right</span>
            </div>

            <div className="drop-menu-list">
              <a href="#" className="drop-menu-item">
                <div className="left">
                  <span className="material-icons">list_alt</span>
                  <span>All Orders</span>
                </div>
                <span className="material-icons chevron">chevron_right</span>
              </a>
              <a href="#" className="drop-menu-item">
                <div className="left">
                  <span className="material-icons">account_balance</span>
                  <span>Bank Details</span>
                </div>
                <span className="material-icons chevron">chevron_right</span>
              </a>
              <a href="#" className="drop-menu-item">
                <div className="left">
                  <span className="material-icons">support_agent</span>
                  <span>24 x 7 Customer Support</span>
                </div>
                <span className="material-icons chevron">chevron_right</span>
              </a>
              <a href="#" className="drop-menu-item" onClick={handleSettingsClick}>
                <div className="left">
                  <span className="material-icons">description</span>
                  <span>Reports</span>
                </div>
                <span className="material-icons chevron">chevron_right</span>
              </a>
            </div>

            <div className="drop-footer">
              <span className="material-icons theme-toggle-icon">light_mode</span>
              <a href="#" className="logout-link">Log out</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

