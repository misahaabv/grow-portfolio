import { useState } from 'react';
import growwLogo from '../../assets/groww-logo.png';

const SIDEBAR_ITEMS = [
  { id: 'basic', label: 'Basic Details' },
  { id: 'reports', label: 'Reports' },
  { id: 'password', label: 'Change Password' },
  { id: 'pin', label: 'Change Groww PIN' },
  { id: 'controls', label: 'Trading controls' },
  { id: 'apis', label: 'Trading APIs' },
  { id: 'auth', label: 'Sell authorisation mode' },
  { id: 'details', label: 'Trading Details' },
  { id: 'forms', label: 'Account Related Forms' },
  { id: 'nominee', label: 'Nominee Details' },
  { id: 'devices', label: 'Active Devices' },
  { id: 'suspicious', label: 'Report suspicious activity' },
];

const PL_REPORTS = [
  { id: 'stocks', label: 'Stocks P&L' },
  { id: 'fno', label: 'F&O P&L' },
  { id: 'div', label: 'Dividend report' },
];

const TAX_REPORTS = [
  { id: 'elss', label: 'Mutual Funds - ELSS statement' },
  { id: 'mf_cap', label: 'Mutual Funds - Capital gains' },
  { id: 'st_cap', label: 'Stocks - Capital gains' },
  { id: 'fno_tax', label: 'F&O - Tax report' },
  { id: 'comm_tax', label: 'Commodities - Tax report' },
  { id: 'gst', label: 'GST invoice' },
];

const HOLDINGS_REPORTS = [
  { id: 'mf_hold', label: 'Mutual Funds - Holdings statement' },
  { id: 'st_hold', label: 'Stocks - Holdings statement' },
  { id: 'demat', label: 'Demat report' },
  { id: 'cmr', label: 'CMR copy' },
];

const TRANSACTION_REPORTS = [
  { id: 'mf_orders', label: 'Mutual Funds - Order history' },
  { id: 'st_orders', label: 'Stocks - Order history' },
  { id: 'balance', label: 'Groww Balance statement' },
  { id: 'contract', label: 'Contract note' },
];

const FINANCIAL_YEARS = [
  { label: 'Current financial year (2026 - 2027)', period: "01 Apr '26 to 15 Apr '26" },
  { label: 'Previous financial year (2025 - 2026)', period: null },
  { label: 'Last quarter', period: null },
  { label: 'Last 30 days', period: null },
  { label: 'Last trading day', period: null },
  { label: 'Custom', period: null },
];

function ReportRow({ label }) {
  return (
    <div className="report-row">
      <span>{label}</span>
      <span className="material-icons" style={{ fontSize: 18, color: '#aaa' }}>chevron_right</span>
    </div>
  );
}

export default function SettingsTab() {
  const [activeSidebar, setActiveSidebar] = useState('reports');
  const [selectedReport, setSelectedReport] = useState('Stocks P&L');
  const [selectedYear, setSelectedYear] = useState('Current financial year (2026 - 2027)');

  return (
    <div className="settings-container">

      {/* ── Left Sidebar ── */}
      <aside className="settings-sidebar">
        <div className="sidebar-user">
          <img
            src="https://ui-avatars.com/api/?name=Aakash+Mehta&background=6C63FF&color=fff"
            alt="Aakash Mehta"
          />
          <h3>Aakash Mehta</h3>
        </div>
        <nav className="sidebar-nav">
          {SIDEBAR_ITEMS.map(item => (
            <a
              key={item.id}
              href="#"
              className={`sidebar-item ${activeSidebar === item.id ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); setActiveSidebar(item.id); }}
            >
              <span>{item.label}</span>
              <span className="material-icons">chevron_right</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* ── Main Content ── */}
      <main className="settings-main">

        {/* Profit & Loss */}
        <section className="settings-section-card">
          <div className="section-header-row">
            <img
              src={growwLogo}
              alt=""
              style={{ width: 22 }}
            />
            <h3>Profit &amp; Loss</h3>
          </div>
          {PL_REPORTS.map(r => (
            <div
              key={r.id}
              className={`report-row ${selectedReport === r.label ? 'active' : ''}`}
              onClick={() => setSelectedReport(r.label)}
            >
              <span>{r.label}</span>
              <span className="material-icons" style={{ fontSize: 18, color: '#aaa' }}>chevron_right</span>
            </div>
          ))}
        </section>

        {/* Tax */}
        <section className="settings-section-card">
          <div className="section-header-row">
            <span className="material-icons" style={{ color: '#20b08e', fontSize: 22 }}>receipt</span>
            <h3>Tax</h3>
          </div>
          {TAX_REPORTS.map(r => (
            <div
              key={r.id}
              className={`report-row ${selectedReport === r.label ? 'active' : ''}`}
              onClick={() => setSelectedReport(r.label)}
            >
              <span>{r.label}</span>
              <span className="material-icons" style={{ fontSize: 18, color: '#aaa' }}>chevron_right</span>
            </div>
          ))}
        </section>

        {/* Holdings */}
        <section className="settings-section-card">
          <div className="section-header-row">
            <span className="material-icons" style={{ color: '#20b08e', fontSize: 22 }}>pie_chart</span>
            <h3>Holdings</h3>
          </div>
          {HOLDINGS_REPORTS.map(r => (
            <div key={r.id} className="report-row">
              <span>{r.label}</span>
              <span className="material-icons" style={{ fontSize: 18, color: '#aaa' }}>chevron_right</span>
            </div>
          ))}
        </section>

        {/* Transactions */}
        <section className="settings-section-card">
          <div className="section-header-row">
            <span className="material-icons" style={{ color: '#20b08e', fontSize: 22 }}>receipt_long</span>
            <h3>Transactions</h3>
          </div>
          {TRANSACTION_REPORTS.map(r => (
            <div key={r.id} className="report-row">
              <span>{r.label}</span>
              <span className="material-icons" style={{ fontSize: 18, color: '#aaa' }}>chevron_right</span>
            </div>
          ))}
        </section>

        {/* Need help */}
        <div className="need-help-card">
          <span className="material-icons">help_outline</span>
          <span>Need help?</span>
          <span className="material-icons" style={{ marginLeft: 'auto', color: '#aaa' }}>chevron_right</span>
        </div>
      </main>

      {/* ── Right Panel ── */}
      <aside className="settings-right-panel">
        <div className="pl-selector">
          <h4>{selectedReport}</h4>
          <div className="radio-group">
            {FINANCIAL_YEARS.map(fy => (
              <div
                key={fy.label}
                className="radio-item"
                onClick={() => setSelectedYear(fy.label)}
              >
                <span className="material-icons" style={{ color: selectedYear === fy.label ? '#20b08e' : '#ccc', fontSize: 20 }}>
                  {selectedYear === fy.label ? 'radio_button_checked' : 'radio_button_unchecked'}
                </span>
                <div className="label-group">
                  <span className="main-label">{fy.label}</span>
                  {fy.period && <span className="sub-label">{fy.period}</span>}
                </div>
              </div>
            ))}
          </div>
          <button className="view-btn">View</button>
        </div>
      </aside>

    </div>
  );
}
