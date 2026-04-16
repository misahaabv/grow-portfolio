import { useState, useEffect, useCallback } from 'react';
import { INDEX_SYMBOLS, STOCK_SYMBOLS, ETF_SYMBOLS } from '../data/stockSymbols';

async function fetchSymbol(item) {
  try {
    const url = `/yf/v8/finance/chart/${encodeURIComponent(item.symbol)}?interval=1d`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const result = data?.chart?.result;
    if (result && result.length > 0) {
      const meta = result[0].meta;
      const price = meta.regularMarketPrice ?? item.fallbackPrice ?? 0;
      const prevClose = meta.chartPreviousClose ?? meta.previousClose ?? price;
      const change = price - prevClose;
      const pct = prevClose !== 0 ? (change / prevClose) * 100 : 0;
      return {
        id: item.id,
        symbol: item.symbol,
        isin: item.isin,
        price: price.toFixed(2),
        change: change.toFixed(2),
        percentage: pct.toFixed(2) + '%',
        pctNum: pct,
        volume: meta.regularMarketVolume ?? 0,
      };
    }
  } catch (e) {
    console.warn(`Failed to fetch ${item.symbol}:`, e.message);
  }
  return {
    id: item.id,
    symbol: item.symbol,
    isin: item.isin,
    price: (item.fallbackPrice ?? 0).toFixed(2),
    change: '0.00',
    percentage: '0.00%',
    pctNum: 0,
    volume: 0,
  };
}

export function useLiveStocks() {
  const [tickerData, setTickerData] = useState([]);
  const [allStocks, setAllStocks] = useState([]);
  const [etfs, setEtfs] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchAll = useCallback(async () => {
    const [indices, stocks, etfData] = await Promise.all([
      Promise.all(INDEX_SYMBOLS.map(fetchSymbol)),
      Promise.all(STOCK_SYMBOLS.map(fetchSymbol)),
      Promise.all(ETF_SYMBOLS.map(fetchSymbol)),
    ]);

    setTickerData(indices);
    setAllStocks(stocks);
    setEtfs(etfData);
    setLastUpdated(new Date().toLocaleTimeString('en-IN'));
  }, []);

  useEffect(() => {
    fetchAll();
    const interval = setInterval(fetchAll, 10000);
    return () => clearInterval(interval);
  }, [fetchAll]);

  // Derived slices
  const mostTraded     = allStocks.slice(0, 8);
  const mtfStocks      = allStocks.slice(4, 8);
  const intradayStocks = allStocks.slice(8, 12);

  const sorted       = [...allStocks].sort((a, b) => b.pctNum - a.pctNum);
  const topGainers   = sorted.filter(s => s.pctNum > 0).slice(0, 4);
  const topLosers    = [...allStocks].sort((a, b) => a.pctNum - b.pctNum).filter(s => s.pctNum < 0).slice(0, 4);

  return { tickerData, allStocks, mostTraded, mtfStocks, intradayStocks, topGainers, topLosers, etfs, lastUpdated };
}
