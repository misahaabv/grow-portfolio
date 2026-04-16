import { useState } from 'react';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import TickerBar from './components/TickerBar';
import ExploreTab from './components/tabs/ExploreTab';
import HoldingsTab from './components/tabs/HoldingsTab';
import PositionsTab from './components/tabs/PositionsTab';
import OrdersTab from './components/tabs/OrdersTab';
import WatchlistTab from './components/tabs/WatchlistTab';
import { useLiveStocks } from './hooks/useLiveStocks';

export default function App() {
  const [activeTab, setActiveTab] = useState('explore');
  const {
    tickerData,
    allStocks,
    mostTraded,
    mtfStocks,
    intradayStocks,
    topGainers,
    topLosers,
    etfs,
    lastUpdated,
  } = useLiveStocks();

  return (
    <>
      <Header />
      <SubHeader activeTab={activeTab} onTabChange={setActiveTab} />
      <TickerBar tickerData={tickerData} />

      <main className="main-container">
        <div className={`tab-content ${activeTab === 'explore' ? 'active' : ''}`} id="view-explore">
          <ExploreTab
            mostTraded={mostTraded}
            mtfStocks={mtfStocks}
            intradayStocks={intradayStocks}
            topGainers={topGainers}
            topLosers={topLosers}
            etfs={etfs}
            allStocks={allStocks}
            lastUpdated={lastUpdated}
          />
        </div>

        <div className={`tab-content ${activeTab === 'holdings' ? 'active' : ''}`} id="view-holdings">
          <HoldingsTab />
        </div>

        <div className={`tab-content ${activeTab === 'positions' ? 'active' : ''}`} id="view-positions">
          <PositionsTab />
        </div>

        <div className={`tab-content ${activeTab === 'orders' ? 'active' : ''}`} id="view-orders">
          <OrdersTab />
        </div>

        <div className={`tab-content ${activeTab === 'watchlist' ? 'active' : ''}`} id="view-watchlist">
          <WatchlistTab />
        </div>
      </main>
    </>
  );
}
