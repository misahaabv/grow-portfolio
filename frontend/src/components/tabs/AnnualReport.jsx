import React from 'react';
import growwLogo from '../../assets/groww-logo.png';

export default function AnnualReport({ selectedYear, onClose }) {
  const getPdfFileName = (year) => {
    if (year.includes('2026 - 2027')) return 'Yearly_Report_2026.pdf';
    if (year.includes('2025 - 2026')) return 'Yearly_Report_2025.pdf';
    if (year.includes('quarter')) return 'Monthly_Report_2026.pdf';
    if (year.includes('30 days')) return 'Weekly_Report_2026.pdf';
    if (year.includes('trading day')) return 'Daily_Report_2026.pdf';
    return 'Yearly_Report_2024.pdf';
  };

  const pdfFile = `/${getPdfFileName(selectedYear)}`;

  return (
    <div className="annual-report-container">
      <div className="report-header-banner">
        <div className="banner-left">
          <div className="groww-logo-white">
            <h2>groww</h2>
          </div>
          <h1>{selectedYear}</h1>
          <p>Stocks P&amp;L Report</p>
        </div>
        <button className="close-report-btn" onClick={onClose}>×</button>
      </div>

      <div className="report-content" style={{ padding: '0', height: 'calc(100vh - 120px)' }}>
        <iframe
          src={pdfFile}
          title="Annual Report PDF"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
}
