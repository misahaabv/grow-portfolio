import gmdcLogo    from '../assets/GMDC.png';
import gallantLogo  from '../assets/gallant.png';
import hdbLogo      from '../assets/HDB financial srvices.png';
import growwLogo    from '../assets/groww-logo.png';

// ── Index Symbols ──────────────────────────────────────
export const INDEX_SYMBOLS = [
  { id: 'NIFTY',      symbol: '^NSEI' },
  { id: 'SENSEX',     symbol: '^BSESN' },
  { id: 'BANKNIFTY',  symbol: '^NSEBANK' },
  { id: 'MIDCPNIFTY', symbol: '^NSMIDCP' },
  { id: 'FINNIFTY',   symbol: 'NIFTY_FIN_SERVICE.NS' },
];

// ── Stock Symbols (Most Traded + MTF + Intraday + Movers pool) ──
export const STOCK_SYMBOLS = [
  { id: 'GMDC',               symbol: 'GMDC.NS',       isin: 'INE131E01027' },
  { id: 'Gallantt Ispat',     symbol: 'GALLANTT.NS',   isin: 'INE212I01016' },
  { id: 'Firstsource',        symbol: 'FSL.NS',        isin: 'INE684F01012' },
  { id: 'NLC India',          symbol: 'NLCINDIA.NS',   isin: 'INE589A01014' },
  { id: 'L&T',                symbol: 'LT.NS',         isin: 'INE018A01030' },
  { id: 'Coal India',         symbol: 'COALINDIA.NS',  isin: 'INE522F01014' },
  { id: 'Hindalco',           symbol: 'HINDALCO.NS',   isin: 'INE038A01020' },
  { id: 'Reliance',           symbol: 'RELIANCE.NS',   isin: 'INE002A01018' },
  { id: 'HDFC Bank',          symbol: 'HDFCBANK.NS',   isin: 'INE040A01034' },
  { id: 'TCS',                symbol: 'TCS.NS',        isin: 'INE467B01029' },
  { id: 'Infosys',            symbol: 'INFY.NS',       isin: 'INE009A01021' },
  { id: 'Bajaj Finance',      symbol: 'BAJFINANCE.NS', isin: 'INE296A01024' },
  { id: 'SBI',                symbol: 'SBIN.NS',       isin: 'INE062A01020' },
  { id: 'ICICI Bank',         symbol: 'ICICIBANK.NS',  isin: 'INE090A01021' },
  { id: 'Ather Energy',       symbol: 'ATHERENERG.NS', isin: 'INE364U01010' },
  { id: 'Ola Electric',       symbol: 'OLAELEC.NS',    isin: 'INE235Y01020' },
  // Movers pool
  { id: 'Cholamandalam Invest', symbol: 'CHOLAFIN.NS',   isin: 'INE121A01024' },
  { id: 'REC Ltd',              symbol: 'RECLTD.NS',     isin: 'INE020B01018' },
  { id: 'Hindustan Zinc',       symbol: 'HINDZINC.NS',   isin: 'INE267A01025' },
  { id: 'Power Finance Corp',   symbol: 'PFC.NS',        isin: 'INE134E01011' },
  { id: 'Adani Energy Solut.',  symbol: 'ADANIENSOL.NS', isin: 'INE931S01010' },
];

// ── ETF Symbols ────────────────────────────────────────
export const ETF_SYMBOLS = [
  { id: 'Nifty BeES',         symbol: 'NIFTYBEES.NS',  isin: 'INF204KB13I6' },
  { id: 'Bank BeES',          symbol: 'BANKBEES.NS',   isin: 'INF204KB15I1' },
  { id: 'Gold BeES',          symbol: 'GOLDBEES.NS',   isin: 'INF204KB16I9' },
  { id: 'CPSE ETF',           symbol: 'CPSEETF.NS',    isin: 'INF732Q01029' },
];

// Set of ETF stock IDs — used to show Groww logo for ETF cards
export const ETF_IDS = new Set(ETF_SYMBOLS.map(e => e.id));

// ── Local logo overrides (keyed by stock id) ───────────
// These take priority over the Groww CDN for stocks whose CDN logo is missing.
export const LOCAL_LOGO_MAP = {
  'GMDC':                 gmdcLogo,
  'Gallantt Ispat':       gallantLogo,
  'HDB Financial Services': hdbLogo,
};

// The Groww logo (used for all ETF cards)
export { growwLogo };

// ── Logo map (Groww CDN by ISIN) ───────────────────────
export const LOGO_MAP = {};
[...STOCK_SYMBOLS, ...ETF_SYMBOLS].forEach(s => {
  if (s.isin) LOGO_MAP[s.symbol] = `https://assets-netstorage.groww.in/stock-assets/logos/${s.isin}.png`;
});

// ── Fallback: letter avatar via UI Avatars ─────────────
export const FALLBACK_LOGO = 'https://ui-avatars.com/api/?name=S&background=6c63ff&color=fff&size=64&bold=true';

/**
 * Returns the best logo URL for a given stock.
 * Priority: local override → Groww CDN (isin) → symbol map → letter avatar
 */
export function getStockLogo(stock) {
  if (LOCAL_LOGO_MAP[stock?.id]) return LOCAL_LOGO_MAP[stock.id];
  if (ETF_IDS.has(stock?.id)) return growwLogo;
  if (stock?.isin) return `https://assets-netstorage.groww.in/stock-assets/logos/${stock.isin}.png`;
  return LOGO_MAP[stock?.symbol] || FALLBACK_LOGO;
}

/**
 * Returns a letter-avatar URL for any stock name (used as onError fallback).
 */
export function letterAvatar(name = 'S') {
  const initials = name
    .split(/\s+/)
    .map(w => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=6c63ff&color=fff&size=64&bold=true&rounded=true`;
}
