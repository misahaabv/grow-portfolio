import { NEWS_STOCKS } from '../../data/staticData';
import { LOCAL_LOGO_MAP, letterAvatar } from '../../data/stockSymbols';

export default function StockNews() {
  return (
    <section className="explore-section">
      <h2 className="section-title">Stocks in news today</h2>
      <div className="news-grid">
        {NEWS_STOCKS.slice(0, 2).map(stock => {
          const logo = LOCAL_LOGO_MAP[stock.name]
            || `https://assets-netstorage.groww.in/stock-assets/logos/${stock.isin}.png`;
          return (
            <div className="news-card" key={stock.name}>
              <div className="news-card-top">
                <div className="news-logo-wrap">
                  <img
                    src={logo}
                    alt={stock.name}
                    className="news-logo"
                    onError={e => { e.target.onerror = null; e.target.src = letterAvatar(stock.name); }}
                  />
                </div>
                <div className="news-name-wrap">
                  <span className="news-stock-name">{stock.name}</span>
                  <span className={`news-change ${stock.positive ? 'positive' : 'negative'}`}>
                    {stock.change}
                  </span>
                </div>
              </div>
              <p className="news-headline">{stock.headline}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
