import { useState, useMemo } from 'react';
import StockCard from '../ui/StockCard';
import InvestmentsWidget from '../ui/InvestmentsWidget';
import HolidayWidget from '../ui/HolidayWidget';
import ToolsWidget from '../ui/ToolsWidget';
import TradingScreens from '../ui/TradingScreens';
import TopMovers from '../ui/TopMovers';
import StockNews from '../ui/StockNews';
import {
  getTodayHoliday,
  getTomorrowHoliday,
  getNextHoliday,
  formatHolidayDate,
  getNextMarketOpen,
} from '../../data/nseHolidays';

// ── Market Alert Banner ────────────────────────────────
function MarketAlert() {
  const [dismissed, setDismissed] = useState(false);

  const alert = useMemo(() => {
    const today = getTodayHoliday();
    if (today) return {
      type: 'closed',
      title: `Market Holiday — ${formatHolidayDate(today.date)}`,
      message: `Markets are closed today on account of ${today.name}. Next session opens on ${getNextMarketOpen(today.date)}.`,
    };
    const tomorrow = getTomorrowHoliday();
    if (tomorrow) return {
      type: 'upcoming',
      title: `Market Holiday Tomorrow — ${formatHolidayDate(tomorrow.date)}`,
      message: `Markets will be closed tomorrow on account of ${tomorrow.name}. Plan your trades accordingly.`,
    };
    const next = getNextHoliday();
    if (next) return {
      type: 'info',
      title: `Upcoming Holiday — ${formatHolidayDate(next.date)}`,
      message: `NSE will be closed on ${formatHolidayDate(next.date)} on account of ${next.name}.`,
    };
    return null;
  }, []);

  if (!alert || dismissed) return null;

  const iconMap = {
    closed:   'https://cdn-icons-png.flaticon.com/512/3651/3651352.png',
    upcoming: 'https://cdn-icons-png.flaticon.com/512/2088/2088617.png',
    info:     'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  };

  return (
    <div className="alert-box" id="market-alert">
      <div className="alert-info">
        <h3>{alert.title}</h3>
        <p>{alert.message}</p>
      </div>
      <div className="alert-icon">
        <img src={iconMap[alert.type]} alt="Alert" />
      </div>
      <span className="material-icons close-alert" onClick={() => setDismissed(true)}>close</span>
    </div>
  );
}

// ── Stock Grid Section ─────────────────────────────────
function StockSection({ title, stocks, linkLabel, linkHref = '#', isLoading }) {
  return (
    <section className="explore-section">
      <h2 className="section-title">{title}</h2>
      <div className="stocks-grid">
        {isLoading || !stocks?.length
          ? Array(4).fill(0).map((_, i) => (
              <div className="stock-card skeleton-card" key={i}>
                <div className="skeleton-logo" />
                <div className="skeleton-text" />
                <div className="skeleton-text short" />
              </div>
            ))
          : stocks.slice(0, 4).map(stock => <StockCard key={stock.id} stock={stock} />)
        }
      </div>
      {linkLabel && (
        <a className="see-more-link" href={linkHref}>
          {linkLabel} &gt;
        </a>
      )}
    </section>
  );
}

// ── Main ExploreTab ────────────────────────────────────
export default function ExploreTab({ mostTraded, mtfStocks, intradayStocks, topGainers, topLosers, etfs, allStocks, lastUpdated }) {
  const isLoading = !mostTraded?.length;

  return (
    <div className="explore-layout">
      {/* ── Left column ── */}
      <div className="explore-left">
        <MarketAlert />

        {/* 1. Most traded */}
        <StockSection
          title="Most traded stocks on Groww"
          stocks={mostTraded}
          linkLabel="See more"
          isLoading={isLoading}
        />

        {/* 2. Top movers / individual stocks */}
        <TopMovers allStocks={allStocks} />

        {/* 3. ETFs */}
        <StockSection
          title="ETFs by Groww"
          stocks={etfs}
          linkLabel="See all ETFs"
          isLoading={isLoading}
        />

        {/* 4. Stocks in news */}
        <StockNews />

        {/* 5. MTF stocks */}
        <StockSection
          title="Most traded stocks in MTF"
          stocks={mtfStocks}
          linkLabel="See more"
          isLoading={isLoading}
        />

        {/* 6. Intraday */}
        <StockSection
          title="Top intraday stocks"
          stocks={intradayStocks}
          linkLabel="Intraday screener"
          isLoading={isLoading}
        />

        {/* refresh tag */}
        <div style={{ color: '#7b809a', fontSize: 12, marginTop: 8 }}>
          {lastUpdated ? `🕐 Last updated: ${lastUpdated}` : 'Loading live data...'}
        </div>
      </div>

      {/* ── Right sidebar ── */}
      <div className="explore-right">
        <InvestmentsWidget />
        <ToolsWidget />
        <TradingScreens />
        <HolidayWidget />
      </div>
    </div>
  );
}
