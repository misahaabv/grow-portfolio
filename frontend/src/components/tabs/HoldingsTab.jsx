const HOLDINGS = [
  { name: 'Reliance Inds.', sector: 'Energy/Retail', entry: '1,640', qty: 60, investment: '98,400', exit: '2,310', pnl: '+40,200', ret: '+40.9%', period: '14 mo', pos: true },
  { name: 'HDFC Bank',      sector: 'Banking',       entry: '1,120', qty: 70, investment: '78,400', exit: '1,485', pnl: '+25,550', ret: '+32.6%', period: '18 mo', pos: true },
  { name: 'Infosys',        sector: 'IT',            entry: '820',   qty: 80, investment: '65,600', exit: '1,415', pnl: '+47,600', ret: '+72.6%', period: '20 mo', pos: true },
  { name: 'TCS',            sector: 'IT',            entry: '2,050', qty: 25, investment: '51,250', exit: '3,120', pnl: '+26,750', ret: '+52.2%', period: '22 mo', pos: true },
  { name: 'Bharti Airtel',  sector: 'Telecom',       entry: '535',   qty: 90, investment: '48,150', exit: '695',   pnl: '+14,400', ret: '+29.9%', period: '12 mo', pos: true },
  { name: 'Titan Company',  sector: 'Consumer',      entry: '1,070', qty: 45, investment: '48,150', exit: '1,920', pnl: '+38,250', ret: '+79.4%', period: '19 mo', pos: true },
  { name: 'Bajaj Finance',  sector: 'NBFC',          entry: '4,200', qty: 10, investment: '42,000', exit: '5,650', pnl: '+14,500', ret: '+34.5%', period: '16 mo', pos: true },
  { name: 'Asian Paints',   sector: 'Consumer',      entry: '1,750', qty: 25, investment: '43,750', exit: '2,350', pnl: '+15,000', ret: '+34.3%', period: '15 mo', pos: true },
  { name: 'SBI',            sector: 'PSU Bank',      entry: '285',   qty: 120, investment: '34,200', exit: '410', pnl: '+15,000', ret: '+43.9%', period: '17 mo', pos: true },
  { name: 'Maruti Suzuki',  sector: 'Auto',          entry: '6,850', qty: 6,  investment: '41,100', exit: '7,940', pnl: '+6,540',  ret: '+15.9%', period: '11 mo', pos: true },
  { name: "Divi's Labs",    sector: 'Pharma',        entry: '2,680', qty: 15, investment: '40,200', exit: '3,440', pnl: '+11,400', ret: '+28.4%', period: '13 mo', pos: true },
  { name: 'ICICI Bank',     sector: 'Banking',       entry: '520',   qty: 85, investment: '44,200', exit: '720',   pnl: '+17,000', ret: '+38.5%', period: '15 mo', pos: true },
];

export default function HoldingsTab() {
  return (
    <>
      <div className="section-header">
        <div>
          <h2>Equity Holdings (2020–2021)</h2>
          <p className="section-subtitle">12 large-cap &amp; mid-cap stocks across NSE. Total invested: ₹5,35,350.</p>
        </div>
        <div className="summary-pills">
          <span className="pill positive">Total P&amp;L: +₹7,83,400</span>
          <span className="pill">CAGR: ~24.9%</span>
        </div>
      </div>
      <div className="table-container">
        <table className="data-table" id="holdings-table">
          <thead>
            <tr>
              <th>Stock</th><th>Sector</th><th>Entry ₹</th><th>Qty</th>
              <th>Investment ₹</th><th>Exit ₹</th><th>P&amp;L ₹</th>
              <th>Return %</th><th>Period</th>
            </tr>
          </thead>
          <tbody>
            {HOLDINGS.map(h => (
              <tr key={h.name}>
                <td className="stock-name-cell">{h.name}</td>
                <td>{h.sector}</td>
                <td>{h.entry}</td>
                <td>{h.qty}</td>
                <td>{h.investment}</td>
                <td>{h.exit}</td>
                <td className={h.pos ? 'positive' : 'negative'}>{h.pnl}</td>
                <td className={h.pos ? 'positive' : 'negative'}>{h.ret}</td>
                <td>{h.period}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
