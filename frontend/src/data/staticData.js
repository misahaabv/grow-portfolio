// ── Sector Movers (static, refreshed-looking) ──────────
export const SECTORS = [
  { name: 'Refractories',                   gainers: 12, losers: 3,   change: '+2.10' },
  { name: 'Electronic Manufacturers',       gainers: 30, losers: 7,   change: '+1.91' },
  { name: 'Distributors',                   gainers: 103, losers: 44, change: '+1.84' },
  { name: 'Telecom Equipment & Infra',      gainers: 14, losers: 12,  change: '-0.43' },
  { name: 'Telecom',                        gainers: 9,  losers: 4,   change: '-0.58' },
  { name: 'Auto Retail',                    gainers: 3,  losers: 3,   change: '-1.34' },
  { name: 'IT — Software',                  gainers: 58, losers: 22,  change: '+0.92' },
  { name: 'Banking',                        gainers: 22, losers: 9,   change: '+0.45' },
  { name: 'Pharmaceuticals',                gainers: 47, losers: 18,  change: '+0.61' },
  { name: 'FMCG',                           gainers: 31, losers: 14,  change: '-0.22' },
  { name: 'Metal & Mining',                 gainers: 19, losers: 8,   change: '+1.15' },
  { name: 'Infrastructure',                 gainers: 26, losers: 11,  change: '+0.78' },
];

// ── Stocks in News ─────────────────────────────────────
export const NEWS_STOCKS = [
  {
    name: 'Cholamandalam Invest',
    change: '+3.23%',
    positive: true,
    headline: 'Cholamandalam Inv gained 3%, trading at ₹1,585.7 as MOFSL reiterated a \'Buy\' rating, citing strong recovery...',
    isin: 'INE121A01024',
  },
  {
    name: 'HDB Financial Services',
    change: '+7.64%',
    positive: true,
    headline: 'HDB Financial stock soared 8% post Q4 strong profit despite weak growth. The stock remains below its IPO...',
    isin: 'INE218K01019',
  },
  {
    name: 'Bajaj Finance',
    change: '+2.11%',
    positive: true,
    headline: 'Bajaj Finance rises on strong loan book growth and improved asset quality in Q4 FY25 results...',
    isin: 'INE296A01024',
  },
  {
    name: 'Infosys',
    change: '-1.34%',
    positive: false,
    headline: 'Infosys slips after cautious FY26 guidance amid global macro uncertainty and client budget freeze...',
    isin: 'INE009A01021',
  },
];

// ── Trading Screens ─────────────────────────────────────
export const TRADING_SCREENS = [
  { signal: 'Bullish', label: 'Resistance breakouts',    color: '#20b08e', count: 12 },
  { signal: 'Bullish', label: 'MACD above signal line',  color: '#20b08e', count: 28 },
  { signal: 'Bearish', label: 'RSI overbought',          color: '#eb5b3c', count: 9  },
  { signal: 'Bullish', label: 'RSI oversold',            color: '#20b08e', count: 17 },
  { signal: 'Bearish', label: 'Bearish engulfing',       color: '#eb5b3c', count: 5  },
  { signal: 'Bullish', label: 'Golden crossovers',       color: '#20b08e', count: 21 },
];
