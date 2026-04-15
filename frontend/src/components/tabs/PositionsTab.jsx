const POSITIONS = [
  { month: 'Jan 2022', gross: '2,68,000', loss: '-58,000', net: '+2,10,000', brok: '9,400',  after: '+2,00,600', wr: '71%',  wrCls: '',      cum: '2,00,600' },
  { month: 'Feb 2022', gross: '3,42,000', loss: '-72,000', net: '+2,70,000', brok: '12,200', after: '+2,57,800', wr: '68%',  wrCls: '',      cum: '4,58,400' },
  { month: 'Mar 2022', gross: '4,18,000', loss: '-85,000', net: '+3,33,000', brok: '14,600', after: '+3,18,400', wr: '73%',  wrCls: '',      cum: '7,76,800' },
  { month: 'Apr 2022', gross: '2,94,000', loss: '-63,000', net: '+2,31,000', brok: '10,800', after: '+2,20,200', wr: '67%',  wrCls: '',      cum: '9,97,000' },
  { month: 'May 2022', gross: '1,62,000', loss: '-1,24,000', net: '+38,000', brok: '8,200', after: '+29,800',   wr: '55%',  wrCls: 'low',   cum: '10,26,800' },
  { month: 'Jun 2022', gross: '1,48,000', loss: '-1,36,000', net: '+12,000', brok: '7,600', after: '+4,400',    wr: '52%',  wrCls: 'low',   cum: '10,31,200' },
  { month: 'Jul 2022', gross: '3,28,000', loss: '-61,000', net: '+2,67,000', brok: '12,400', after: '+2,54,600', wr: '74%',  wrCls: '',      cum: '12,85,800' },
  { month: 'Aug 2022', gross: '4,52,000', loss: '-78,000', net: '+3,74,000', brok: '16,200', after: '+3,57,800', wr: '76%',  wrCls: 'high',  cum: '16,43,600' },
  { month: 'Sep 2022', gross: '3,14,000', loss: '-68,000', net: '+2,46,000', brok: '11,400', after: '+2,34,600', wr: '70%',  wrCls: '',      cum: '18,78,200' },
  { month: 'Oct 2022', gross: '2,84,000', loss: '-54,000', net: '+2,30,000', brok: '9,800',  after: '+2,20,200', wr: '69%',  wrCls: '',      cum: '20,98,400' },
  { month: 'Nov 2022', gross: '3,68,000', loss: '-72,000', net: '+2,96,000', brok: '13,200', after: '+2,82,800', wr: '72%',  wrCls: '',      cum: '23,81,200' },
  { month: 'Dec 2022', gross: '2,24,000', loss: '-68,000', net: '+1,56,000', brok: '8,800',  after: '+1,47,200', wr: '66%',  wrCls: '',      cum: '25,28,400' },
  { month: 'Jan 2023', gross: '4,84,000', loss: '-82,000', net: '+4,02,000', brok: '17,600', after: '+3,84,400', wr: '77%',  wrCls: 'high',  cum: '29,12,800' },
  { month: 'Feb 2023', gross: '3,28,000', loss: '-74,000', net: '+2,54,000', brok: '11,400', after: '+2,42,600', wr: '69%',  wrCls: '',      cum: '31,55,400' },
  { month: 'Mar 2023', gross: '2,14,000', loss: '-1,62,000', net: '+52,000', brok: '7,200', after: '+44,800',   wr: '56%',  wrCls: 'low',   cum: '32,00,200' },
  { month: 'Apr 2023', gross: '5,14,000', loss: '-88,000', net: '+4,26,000', brok: '18,800', after: '+4,07,200', wr: '78%',  wrCls: 'high',  cum: '36,07,400' },
  { month: 'May 2023', gross: '3,84,000', loss: '-76,000', net: '+3,08,000', brok: '13,600', after: '+2,94,400', wr: '73%',  wrCls: '',      cum: '39,01,800' },
  { month: 'Jun 2023', gross: '4,24,000', loss: '-64,000', net: '+3,60,000', brok: '15,200', after: '+3,44,800', wr: '76%',  wrCls: 'high',  cum: '42,46,600' },
  { month: 'Jul 2023', gross: '5,48,000', loss: '-94,000', net: '+4,54,000', brok: '19,800', after: '+4,34,200', wr: '79%',  wrCls: 'high',  cum: '46,80,800' },
  { month: 'Aug 2023', gross: '2,68,000', loss: '-1,18,000', net: '+1,50,000', brok: '9,400', after: '+1,40,600', wr: '60%', wrCls: 'low',  cum: '48,21,400' },
  { month: 'Sep 2023', gross: '3,92,000', loss: '-82,000', net: '+3,10,000', brok: '14,200', after: '+2,95,800', wr: '71%',  wrCls: '',      cum: '51,17,200' },
  { month: 'Oct 2023', gross: '4,62,000', loss: '-88,000', net: '+3,74,000', brok: '16,600', after: '+3,57,400', wr: '74%',  wrCls: '',      cum: '54,74,600' },
  { month: 'Nov 2023', gross: '5,84,000', loss: '-1,04,000', net: '+4,80,000', brok: '20,400', after: '+4,59,600', wr: '77%', wrCls: 'high', cum: '59,34,200' },
  { month: 'Dec 2023', gross: '6,24,000', loss: '-86,000', net: '+5,38,000', brok: '22,400', after: '+5,15,600', wr: '79%',  wrCls: 'high',  cum: '64,49,800' },
];

export default function PositionsTab() {
  return (
    <>
      <div className="section-header">
        <div>
          <h2>F&amp;O Monthly P&amp;L (2022–2023)</h2>
          <p className="section-subtitle">24 consecutive months of positive net P&amp;L. Win rate averaged 69.8%.</p>
        </div>
        <div className="summary-pills">
          <span className="pill positive">Cumulative Net: +₹64,49,800</span>
          <span className="pill">Capital: ₹10,00,000</span>
        </div>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Month</th><th>Gross Profit ₹</th><th>Gross Loss ₹</th>
              <th>Net P&amp;L ₹</th><th>Brokerage ₹</th>
              <th>Net After Costs ₹</th><th>Win Rate</th><th>Cumulative ₹</th>
            </tr>
          </thead>
          <tbody>
            {POSITIONS.map(p => (
              <tr key={p.month}>
                <td>{p.month}</td>
                <td>{p.gross}</td>
                <td className="negative">{p.loss}</td>
                <td className="positive">{p.net}</td>
                <td>{p.brok}</td>
                <td className="positive">{p.after}</td>
                <td><span className={`winrate ${p.wrCls}`}>{p.wr}</span></td>
                <td>{p.cum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
