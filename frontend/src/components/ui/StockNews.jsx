import { NEWS_STOCKS } from '../../data/staticData';

export default function StockNews() {
  return (
    <section className="explore-section">
      <h2 className="section-title">Stocks in news today</h2>
      <div className="news-grid">
        {NEWS_STOCKS.slice(0, 2).map(stock => (
          <div className="news-card" key={stock.name}>
            <div className="news-card-top">
              <div className="news-logo-wrap">
                <img
                  src={`https://assets-netstorage.groww.in/stock-assets/logos/${stock.isin}.png`}
                  alt={stock.name}
                  className="news-logo"
                  onError={e => { e.target.src = 'https://cdn-icons-png.flaticon.com/512/2942/2942821.png'; }}
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
        ))}
      </div>
    </section>
  );
}
