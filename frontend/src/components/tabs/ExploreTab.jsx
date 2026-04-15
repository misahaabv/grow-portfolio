import { useState, useMemo } from 'react';
import StockCard from '../ui/StockCard';
import PortfolioWidget from '../ui/PortfolioWidget';
import ToolsWidget from '../ui/ToolsWidget';
import HolidayWidget from '../ui/HolidayWidget';
import {
  getTodayHoliday,
  getTomorrowHoliday,
  getNextHoliday,
  formatHolidayDate,
  getNextMarketOpen,
} from '../../data/nseHolidays';

function MarketAlert() {
  const [dismissed, setDismissed] = useState(false);

  const alert = useMemo(() => {
    const today = getTodayHoliday();
    if (today) {
      return {
        type: 'closed',
        title: `Market Holiday — ${formatHolidayDate(today.date)}`,
        message: `Markets are closed today on account of ${today.name}. Next trading session opens on ${getNextMarketOpen(today.date)}.`,
      };
    }

    const tomorrow = getTomorrowHoliday();
    if (tomorrow) {
      return {
        type: 'upcoming',
        title: `Market Holiday Tomorrow — ${formatHolidayDate(tomorrow.date)}`,
        message: `Markets will be closed tomorrow on account of ${tomorrow.name}. Plan your trades accordingly.`,
      };
    }

    const next = getNextHoliday();
    if (next) {
      return {
        type: 'info',
        title: `Upcoming Holiday — ${formatHolidayDate(next.date)}`,
        message: `NSE will be closed on ${formatHolidayDate(next.date)} on account of ${next.name}.`,
      };
    }

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
      <span
        className="material-icons close-alert"
        id="close-alert"
        onClick={() => setDismissed(true)}
      >
        close
      </span>
    </div>
  );
}

export default function ExploreTab({ stocksData, lastUpdated }) {
  return (
    <div className="content-split">
      <div className="content-left">
        <MarketAlert />

        <div className="section-header">
          <h2>Most traded stocks on Groww</h2>
          <span className="refresh-tag" id="last-refreshed">
            {lastUpdated ? `Last updated: ${lastUpdated}` : 'Refreshing every 10s'}
          </span>
        </div>

        <div className="stocks-grid" id="stocks-grid">
          {stocksData && stocksData.length > 0
            ? stocksData.map(stock => <StockCard key={stock.id} stock={stock} />)
            : <p style={{ color: '#7b809a', fontSize: 14 }}>Loading stock data...</p>
          }
        </div>
      </div>

      <div className="content-right">
        <PortfolioWidget />
        <HolidayWidget />
        <ToolsWidget />
      </div>
    </div>
  );
}
