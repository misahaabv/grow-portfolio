// Aakash Mehta's real portfolio data
const EQUITY = {
  invested:  535350,
  current:   1318750,
  returns:   783400,
  returnPct: 146.3,
  period:    '2020–2021',
};
const FNO = {
  capital:   1000000,
  returns:   11872000,
  returnPct: 1187.2,
  period:    '2022–2023',
};

function fmt(n) {
  return '₹' + Math.abs(n).toLocaleString('en-IN');
}

export default function InvestmentsWidget() {
  const totalInvested = EQUITY.invested + FNO.capital;
  const totalReturns  = EQUITY.returns + FNO.returns;
  const totalCurrent  = EQUITY.current + FNO.returns;
  const totalPct      = ((totalReturns / totalInvested) * 100).toFixed(1);

  return (
    <div className="widget invest-widget">
      <h3 className="widget-title">
        <span className="material-icons widget-icon">account_balance</span>
        Your investments
      </h3>

      {/* Total current value */}
      <div className="invest-total">
        <div className="invest-label-sm">Current value</div>
        <div className="invest-big-num">{fmt(totalCurrent)}</div>
        <div className="invest-tag positive">
          <span className="material-icons" style={{ fontSize: 13 }}>arrow_upward</span>
          {fmt(totalReturns)} (+{totalPct}%)
        </div>
      </div>

      <div className="invest-divider" />

      {/* Breakdown rows */}
      <div className="invest-row">
        <div className="invest-col">
          <div className="invest-label-sm">Total invested</div>
          <div className="invest-num">{fmt(totalInvested)}</div>
        </div>
        <div className="invest-col">
          <div className="invest-label-sm">Total P&amp;L</div>
          <div className="invest-num positive">+{fmt(totalReturns)}</div>
        </div>
      </div>

      <div className="invest-divider" />

      {/* Equity block */}
      <div className="invest-segment">
        <div className="invest-seg-header">
          <span className="seg-dot equity-dot"></span>
          <span className="seg-label">Equity</span>
          <span className="seg-period">{EQUITY.period}</span>
        </div>
        <div className="invest-seg-details">
          <div className="seg-item">
            <span className="invest-label-sm">Invested</span>
            <span>{fmt(EQUITY.invested)}</span>
          </div>
          <div className="seg-item">
            <span className="invest-label-sm">Returns</span>
            <span className="positive">+{fmt(EQUITY.returns)} (+{EQUITY.returnPct}%)</span>
          </div>
        </div>
      </div>

      {/* F&O block */}
      <div className="invest-segment">
        <div className="invest-seg-header">
          <span className="seg-dot fno-dot"></span>
          <span className="seg-label">F&amp;O</span>
          <span className="seg-period">{FNO.period}</span>
        </div>
        <div className="invest-seg-details">
          <div className="seg-item">
            <span className="invest-label-sm">Capital deployed</span>
            <span>{fmt(FNO.capital)}</span>
          </div>
          <div className="seg-item">
            <span className="invest-label-sm">Net P&amp;L</span>
            <span className="positive">+{fmt(FNO.returns)} (+{FNO.returnPct}%)</span>
          </div>
        </div>
      </div>

      <div className="invest-footer">
        <span className="invest-roi-badge">Total ROI ~219% · CAGR 34.2%</span>
      </div>
    </div>
  );
}
