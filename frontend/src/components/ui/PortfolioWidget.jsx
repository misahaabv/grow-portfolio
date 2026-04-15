export default function PortfolioWidget() {
  return (
    <div className="widget">
      <h3 className="widget-title">
        <span className="material-icons widget-icon">analytics</span>
        Portfolio Summary
      </h3>
      <div className="portfolio-summary">
        <div className="summary-row"><span>Total Capital</span><span>₹40,00,000</span></div>
        <div className="summary-row"><span>Equity Deployed</span><span>₹5,00,000</span></div>
        <div className="summary-row"><span>F&amp;O Deployed</span><span>₹10,00,000</span></div>
        <div className="summary-row"><span>Active Period</span><span>Jan 2020 – Dec 2023</span></div>
        <hr className="summary-divider" />
        <div className="summary-row positive"><span>Equity Returns</span><span>+₹7,83,400</span></div>
        <div className="summary-row positive"><span>F&amp;O Returns</span><span>+₹1,18,72,000</span></div>
        <hr className="summary-divider" />
        <div className="summary-row highlight"><span>Total ROI</span><span>~219% (CAGR 34.2%)</span></div>
      </div>
    </div>
  );
}
