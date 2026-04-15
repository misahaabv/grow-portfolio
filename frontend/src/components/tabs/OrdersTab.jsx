const ORDERS = [
  { date: '03-Jan-22', inst: 'Nifty 50',   strat: 'Bull Call Spread',  strike: '17000 CE / 17200 CE', entry: 85,  exit: 147, lots: 4, pnl: '+24,800', win: true },
  { date: '10-Jan-22', inst: 'Bank Nifty', strat: 'Short Straddle',    strike: '38000 CE+PE',         entry: 420, exit: 210, lots: 2, pnl: '+42,000', win: true },
  { date: '17-Jan-22', inst: 'Nifty 50',   strat: 'Long Put',          strike: '17500 PE',             entry: 145, exit: 88,  lots: 3, pnl: '-17,100', win: false },
  { date: '24-Jan-22', inst: 'Infosys',    strat: 'Long Call',         strike: '1800 CE',              entry: 62,  exit: 105, lots: 2, pnl: '+17,200', win: true },
  { date: '07-Feb-22', inst: 'Nifty 50',   strat: 'Iron Condor',       strike: '17200 PE / 17800 CE',  entry: 110, exit: 42,  lots: 3, pnl: '+30,600', win: true },
  { date: '14-Feb-22', inst: 'Bank Nifty', strat: 'Bear Put Spread',   strike: '39000 PE / 38500 PE',  entry: 290, exit: 180, lots: 2, pnl: '-22,000', win: false },
  { date: '21-Feb-22', inst: 'Nifty 50',   strat: 'Long Call',         strike: '17600 CE',             entry: 70,  exit: 185, lots: 4, pnl: '+92,000', win: true },
  { date: '07-Mar-22', inst: 'Bank Nifty', strat: 'Short Strangle',    strike: '38500 PE / 39500 CE',  entry: 195, exit: 95,  lots: 3, pnl: '+45,000', win: true },
  { date: '14-Mar-22', inst: 'Nifty 50',   strat: 'Bull Call Spread',  strike: '17000 CE / 17300 CE',  entry: 120, exit: 210, lots: 3, pnl: '+81,000', win: true },
  { date: '21-Mar-22', inst: 'HDFC Bank',  strat: 'Long Put',          strike: '1500 PE',              entry: 55,  exit: 28,  lots: 4, pnl: '-21,600', win: false },
  { date: '04-Apr-22', inst: 'Nifty 50',   strat: 'Iron Fly',          strike: '17500 ATM',            entry: 180, exit: 85,  lots: 2, pnl: '+38,000', win: true },
  { date: '11-Apr-22', inst: 'Bank Nifty', strat: 'Long Straddle',     strike: '38000 ATM',            entry: 380, exit: 520, lots: 2, pnl: '+56,000', win: true },
];

export default function OrdersTab() {
  return (
    <>
      <div className="section-header">
        <div>
          <h2>Trade Log — Q1/Q2 2022</h2>
          <p className="section-subtitle">Representative F&amp;O executions on NSE via Zerodha. Brokerage: ₹20/order.</p>
        </div>
        <div className="summary-pills">
          <span className="pill positive">9 Wins</span>
          <span className="pill negative">3 Losses</span>
        </div>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Date</th><th>Instrument</th><th>Strategy</th><th>Strike / Type</th>
              <th>Entry ₹</th><th>Exit ₹</th><th>Lots</th><th>P&amp;L ₹</th><th>Outcome</th>
            </tr>
          </thead>
          <tbody>
            {ORDERS.map((o, i) => (
              <tr key={i}>
                <td>{o.date}</td>
                <td>{o.inst}</td>
                <td>{o.strat}</td>
                <td>{o.strike}</td>
                <td>{o.entry}</td>
                <td>{o.exit}</td>
                <td>{o.lots}</td>
                <td className={o.win ? 'positive' : 'negative'}>{o.pnl}</td>
                <td><span className={`outcome-badge ${o.win ? 'win' : 'loss'}`}>{o.win ? 'Win' : 'Loss'}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
