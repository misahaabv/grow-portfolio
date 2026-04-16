import { useState } from 'react';
import { SECTORS } from '../../data/staticData';

const TABS = ['Gainers', 'Losers', 'Volume shockers'];
const INDICES = ['NIFTY 100', 'NIFTY 50', 'NIFTY 500', 'NIFTY MIDCAP'];

export default function SectorMovers() {
  const [activeTab, setActiveTab] = useState('Gainers');
  const [indexOpen, setIndexOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState('NIFTY 100');

  const sorted = activeTab === 'Gainers'
    ? [...SECTORS].sort((a, b) => parseFloat(b.change) - parseFloat(a.change))
    : activeTab === 'Losers'
      ? [...SECTORS].sort((a, b) => parseFloat(a.change) - parseFloat(b.change))
      : [...SECTORS].sort((a, b) => (b.gainers + b.losers) - (a.gainers + a.losers));

  return (
    <section className="explore-section">
      <h2 className="section-title">Top movers today</h2>

      {/* Tab pills */}
      <div className="movers-tabs">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`movers-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
        <div className="index-dropdown-wrap">
          <button
            className={`movers-tab index-tab ${indexOpen ? 'active' : ''}`}
            onClick={() => setIndexOpen(o => !o)}
          >
            {selectedIndex}
            <span className="material-icons" style={{ fontSize: 14, marginLeft: 4 }}>expand_more</span>
          </button>
          {indexOpen && (
            <div className="index-dropdown">
              {INDICES.map(idx => (
                <div
                  key={idx}
                  className={`index-option ${selectedIndex === idx ? 'selected' : ''}`}
                  onClick={() => { setSelectedIndex(idx); setIndexOpen(false); }}
                >
                  {idx}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sector table */}
      <div className="sector-table">
        <div className="sector-thead">
          <span>Sector</span>
          <span>Gainers / Losers</span>
          <span style={{ textAlign: 'right' }}>1D price change</span>
        </div>
        {sorted.slice(0, 6).map(sector => {
          const isPos = parseFloat(sector.change) >= 0;
          const total = sector.gainers + sector.losers;
          const gainW = Math.round((sector.gainers / total) * 100);
          return (
            <div className="sector-row" key={sector.name}>
              <span className="sector-name">{sector.name}</span>
              <div className="sector-bar-wrap">
                <span className="sector-count">{sector.gainers}</span>
                <div className="sector-bar">
                  <div className="bar-gain" style={{ width: `${gainW}%` }} />
                  <div className="bar-loss" style={{ width: `${100 - gainW}%` }} />
                </div>
                <span className="sector-count">{sector.losers}</span>
              </div>
              <span className={`sector-change ${isPos ? 'positive' : 'negative'}`}>
                {isPos ? '+' : ''}{sector.change}%
              </span>
            </div>
          );
        })}
      </div>
      <a className="see-more-link" href="#">See all sectors &gt;</a>
    </section>
  );
}
