import { TRADING_SCREENS } from '../../data/staticData';

export default function TradingScreens() {
  return (
    <div className="widget">
      <h3 className="widget-title">
        <span className="material-icons widget-icon">candlestick_chart</span>
        Trading Screens
      </h3>
      <div className="trading-list">
        {TRADING_SCREENS.map((screen, i) => (
          <div className="trading-item" key={i}>
            <div className="trading-left">
              <span
                className="trading-signal-badge"
                style={{ background: screen.signal === 'Bullish' ? '#e6f8f3' : '#fef0ed',
                         color: screen.signal === 'Bullish' ? '#20b08e' : '#eb5b3c' }}
              >
                {screen.signal}
              </span>
              <span className="trading-label">{screen.label}</span>
            </div>
            <span className="trading-count">{screen.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
