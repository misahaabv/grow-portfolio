import { useState, useEffect, useRef } from 'react';

export default function Header() {
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

  return (
    <header className="top-header">
      <div className="header-left">
        <a href="/" className="logo">
          <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/_next/static/media/growwLogo.8624b069.svg"
               alt="Groww" width="40" height="40"
               onError={(e) => { e.target.src = 'https://groww.in/favicon.ico'; }} />
        </a>
        <nav className="main-nav">
          <a href="#" className="active">Stocks</a>
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
        <span className="material-icons icon-btn">notifications_none</span>
        <div className="profile-container" ref={profileRef}>
          <div
            className="profile-icon"
            id="profile-toggle"
            onClick={(e) => { e.stopPropagation(); setDropdownOpen(o => !o); }}
          >
            <img
              src="https://ui-avatars.com/api/?name=Aakash+Mehta&background=6C63FF&color=fff"
              alt="Aakash Mehta"
            />
          </div>

          {/* Profile Dropdown */}
          <div className={`profile-dropdown ${dropdownOpen ? 'active' : ''}`} id="profile-dropdown">
            <div className="profile-header">
              <img
                src="https://ui-avatars.com/api/?name=Aakash+Mehta&background=6C63FF&color=fff"
                alt="Profile"
                width="45"
              />
              <div className="profile-info">
                <h4>Aakash Mehta</h4>
                <p>NSE-registered Retail Investor</p>
                <span className="sebi-tag">SEBI Reg. INZ000XXXXX</span>
              </div>
            </div>
            <div className="profile-menu">
              <a href="#"><span className="material-icons">account_balance_wallet</span> Total Capital: ₹40,00,000</a>
              <a href="#"><span className="material-icons">trending_up</span> Overall ROI: ~219%</a>
              <a href="#"><span className="material-icons">settings</span> Settings</a>
              <a href="#"><span className="material-icons">help_outline</span> Help &amp; Support</a>
            </div>
            <div className="profile-logout">
              <a href="#" id="logout-btn"><span className="material-icons">logout</span> Log Out</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
