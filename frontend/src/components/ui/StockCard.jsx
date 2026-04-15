import { formatINR, getChangeClass, formatChange } from '../../utils/format';

const LOGOS = {
  'Enviro Infra Engine.': 'https://assets-netstorage.groww.in/stock-assets/logos/INE029A01011.png',
  'Ather Energy':         'https://assets-netstorage.groww.in/stock-assets/logos/INE364U01010.png',
  'Ola Electric Mobility':'https://assets-netstorage.groww.in/stock-assets/logos/INE235Y01020.png',
  'New India Assurance':  'https://assets-netstorage.groww.in/stock-assets/logos/INE470Y01017.png',
};

const FALLBACK_LOGO = 'https://cdn-icons-png.flaticon.com/512/2942/2942821.png';

export default function StockCard({ stock }) {
  const cls = getChangeClass(stock.change);
  const changeText = formatChange(stock.change, stock.percentage);
  const logo = LOGOS[stock.id] || FALLBACK_LOGO;

  return (
    <div className="stock-card">
      <div className="stock-card-top">
        <img
          src={logo}
          className="company-logo"
          alt={stock.id}
          onError={(e) => { e.target.src = FALLBACK_LOGO; }}
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
