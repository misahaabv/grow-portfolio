export default function ToolsWidget() {
  return (
    <div className="widget">
      <h3 className="widget-title">
        <span className="material-icons widget-icon">build</span>
        Products &amp; Tools
      </h3>
      <div className="tool-item">
        <div className="tool-info">
          <span className="material-icons tool-icon">campaign</span>
          <span className="tool-name">IPO</span>
        </div>
        <span className="tool-status">0 open</span>
      </div>
      <div className="tool-item">
        <div className="tool-info">
          <span className="material-icons tool-icon" style={{ color: '#7b809a' }}>bar_chart</span>
          <span className="tool-name">Screener</span>
        </div>
        <span className="tool-arrow material-icons">arrow_forward_ios</span>
      </div>
      <div className="tool-item">
        <div className="tool-info">
          <span className="material-icons tool-icon" style={{ color: '#7b809a' }}>show_chart</span>
          <span className="tool-name">F&amp;O — Futures &amp; Options</span>
        </div>
        <span className="tool-arrow material-icons">arrow_forward_ios</span>
      </div>
    </div>
  );
}
