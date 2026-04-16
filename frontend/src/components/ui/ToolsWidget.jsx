const TOOLS = [
  { icon: 'assignment',     label: 'IPO',                  badge: '1 open',  badgeType: 'open' },
  { icon: 'account_balance',label: 'Bonds',                badge: '16 open', badgeType: 'open' },
  { icon: 'show_chart',     label: 'ETFs',                 badge: null },
  { icon: 'manage_search',  label: 'Intraday Screener',    badge: null },
  { icon: 'date_range',     label: 'Stocks SIP',           badge: null },
  { icon: 'trending_up',    label: 'MTF stocks',           badge: null },
  { icon: 'event',          label: 'Events calendar',      badge: null },
  { icon: 'filter_list',    label: 'All Stocks screener',  badge: null },
];

export default function ToolsWidget() {
  return (
    <div className="widget">
      <h3 className="widget-title">
        <span className="material-icons widget-icon">apps</span>
        Products &amp; Tools
      </h3>
      <div className="tools-list">
        {TOOLS.map(tool => (
          <div className="tool-item" key={tool.label}>
            <div className="tool-info">
              <span className="material-icons tool-icon">{tool.icon}</span>
              <span className="tool-name">{tool.label}</span>
            </div>
            {tool.badge && (
              <span className="tool-status">{tool.badge}</span>
            )}
            {!tool.badge && (
              <span className="material-icons tool-arrow">chevron_right</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
