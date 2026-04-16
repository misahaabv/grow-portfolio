import { formatINR, getChangeClass, formatChange } from '../../utils/format';
import { LOGO_MAP, FALLBACK_LOGO } from '../../data/stockSymbols';

export default function StockCard({ stock }) {
  const cls = getChangeClass(stock.change);
  const changeText = formatChange(stock.change, stock.percentage);
  const logo = LOGO_MAP[stock.symbol] || FALLBACK_LOGO;

  return (
    <div className="stock-card">
      <div className="stock-card-top">
        <img
          src={logo}
          className="company-logo"
          alt={stock.id}
          onError={e => { e.target.src = FALLBACK_LOGO; }}
        />
        <span className="company-name">{stock.id}</span>
      </div>
      <div className="stock-card-bottom">
        <div className="stock-price">{formatINR(stock.price)}</div>
        <div className={`stock-change ${cls}`}>{changeText}</div>
      </div>
    </div>
  );
}
