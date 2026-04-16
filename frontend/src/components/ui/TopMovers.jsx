import { useState } from 'react';
import { LOGO_MAP, FALLBACK_LOGO } from '../../data/stockSymbols';

const TABS = ['Gainers', 'Losers', 'Volume shockers'];
const INDICES = ['NIFTY 100', 'NIFTY 50', 'NIFTY 500', 'NIFTY MIDCAP 150'];

// ── Deterministic sparkline generator ────────────────
function Sparkline({ stockId, isPositive }) {
  const W = 88, H = 32;
  const color = isPositive ? '#20b08e' : '#eb5b3c';

  // Pseudo-random walk seeded by stockId string
  let seed = stockId.split('').reduce((a, c) => a + c.charCodeAt(0), 0) * 9301;
  const N = 16;
  const pts = [];
  let val = 50;

  for (let i = 0; i < N; i++) {
    seed = (seed * 9301 + 49297) % 233280;
    const r = (seed / 233280) - 0.5;
    const trend = isPositive ? 0.6 : -0.6;
    val += r * 6 + trend * (i / N) * 8;
    val = Math.max(5, Math.min(95, val));
    pts.push(val);
  }

  const minV = Math.min(...pts), maxV = Math.max(...pts);
  const range = maxV - minV || 1;

  const coords = pts.map((p, i) => {
    const x = (i / (N - 1)) * W;
    const y = H - 2 - ((p - minV) / range) * (H - 4);
    return [x, y];
  });

  // Smooth polyline using midpoints (Chaikin-like)
  let d = `M ${coords[0][0]} ${coords[0][1]}`;
  for (let i = 1; i < coords.length; i++) {
    const [x0, y0] = coords[i - 1], [x1, y1] = coords[i];
    const mx = (x0 + x1) / 2, my = (y0 + y1) / 2;
    d += ` Q ${x0} ${y0} ${mx} ${my}`;
  }
  d += ` L ${coords[coords.length - 1][0]} ${coords[coords.length - 1][1]}`;

  return (
    <svg width={W} height={H} style={{ display: 'block', flexShrink: 0 }}>
      <path d={d} stroke={color} strokeWidth="1.8" fill="none"
            strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

// ── Volume formatter ───────────────────────────────────
function fmtVol(v) {
  if (!v || v === 0) return '—';
  return parseInt(v).toLocaleString('en-IN');
}

// ── Stock Row ─────────────────────────────────────────
function StockRow({ stock }) {
  const isPos = stock.pctNum >= 0;
  const logo = LOGO_MAP[stock.symbol] || FALLBACK_LOGO;
  const changeStr = `${isPos ? '+' : ''}${stock.change} (${isPos ? '+' : ''}${stock.percentage})`;

  return (
    <div className="mover-row">
      <div className="mover-company">
        <img
          src={logo}
          className="mover-logo"
          alt={stock.id}
          onError={e => { e.target.src = FALLBACK_LOGO; }}
        />
        <span className="mover-name">{stock.id}</span>
      </div>

      <div className="mover-chart">
        <Sparkline stockId={stock.id} isPositive={isPos} />
      </div>

      <div className="mover-price-col">
        <div className="mover-price">₹{parseFloat(stock.price).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
        <div className={`mover-change ${isPos ? 'positive' : 'negative'}`}>{changeStr}</div>
      </div>

      <div className="mover-volume">{fmtVol(stock.volume)}</div>

      <div className="mover-actions">
        <button className="mover-btn" title="Compare">
          <span className="material-icons" style={{ fontSize: 16 }}>candlestick_chart</span>
        </button>
        <button className="mover-btn" title="Add to watchlist">
          <span className="material-icons" style={{ fontSize: 16 }}>bookmark_border</span>
        </button>
      </div>
    </div>
  );
}

// ── Main TopMovers Component ──────────────────────────
export default function TopMovers({ allStocks }) {
  const [activeTab, setActiveTab] = useState('Gainers');
  const [indexOpen, setIndexOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState('NIFTY 100');
  const [showAll, setShowAll] = useState(false);

  const sorted = (() => {
    if (!allStocks?.length) return [];
    if (activeTab === 'Gainers') {
      return [...allStocks].sort((a, b) => b.pctNum - a.pctNum).filter(s => s.pctNum > 0);
    } else if (activeTab === 'Losers') {
      return [...allStocks].sort((a, b) => a.pctNum - b.pctNum).filter(s => s.pctNum < 0);
    } else {
      return [...allStocks].sort((a, b) => b.volume - a.volume);
    }
  })();

  const visible = showAll ? sorted : sorted.slice(0, 4);

  return (
    <section className="explore-section">
      <h2 className="section-title">Top movers today</h2>

      {/* Tabs */}
      <div className="movers-tabs">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`movers-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => { setActiveTab(tab); setShowAll(false); }}
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

      {/* Table */}
      <div className="mover-table">
        {/* Header */}
        <div className="mover-thead">
          <span>Company</span>
          <span></span>
          <span>Market price (1D)</span>
          <span>Volume</span>
          <span></span>
        </div>

        {/* Rows */}
        {visible.length > 0
          ? visible.map(stock => <StockRow key={stock.id} stock={stock} />)
          : Array(4).fill(0).map((_, i) => (
              <div className="mover-row skeleton" key={i}>
                <div className="skeleton-logo" />
                <div className="skeleton-text" style={{ width: 88, height: 32 }} />
                <div className="skeleton-text" style={{ width: 100 }} />
                <div className="skeleton-text" style={{ width: 60 }} />
              </div>
            ))
        }
      </div>

      {sorted.length > 4 && (
        <a className="see-more-link" onClick={() => setShowAll(s => !s)} href="#">
          {showAll ? 'Show less' : 'See more'} &gt;
        </a>
      )}
    </section>
  );
}
