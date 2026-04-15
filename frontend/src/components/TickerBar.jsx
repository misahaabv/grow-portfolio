import { getChangeClass, formatChange } from '../utils/format';

export default function TickerBar({ tickerData }) {
  const hasData = tickerData && tickerData.length > 0;

  const defaultTickers = ['NIFTY', 'SENSEX', 'BANKNIFTY', 'MIDCPNIFTY', 'FINNIFTY'];

  return (
    <div className="ticker-bar" id="ticker-bar">
      {hasData
        ? tickerData.map(item => {
            const cls = getChangeClass(item.change);
            const changeText = formatChange(item.change, item.percentage);
            return (
              <div className="ticker-item" key={item.id}>
                <span className="ticker-name">{item.id}</span>
                <span className="ticker-price">
                  {parseFloat(item.price).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </span>
                <span className={`ticker-val ${cls}`}>{changeText}</span>
              </div>
            );
          })
        : defaultTickers.map(name => (
            <div className="ticker-item" key={name}>
              <span className="ticker-name">{name}</span>
              <span className="ticker-val">Loading...</span>
            </div>
          ))
      }
      <div className="ticker-live-badge">
        <span className="live-dot"></span> LIVE
      </div>
    </div>
  );
}
