document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Live Polling
    fetchLiveStocks();
    setInterval(fetchLiveStocks, 10000); // 10 seconds interval

    // 2. Setup Profile Dropdown Logic
    const profileToggle = document.getElementById("profile-toggle");
    const profileDropdown = document.getElementById("profile-dropdown");
    
    if (profileToggle && profileDropdown) {
        profileToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle("active");
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", (e) => {
            if (!profileToggle.contains(e.target) && !profileDropdown.contains(e.target)) {
                profileDropdown.classList.remove("active");
            }
        });
    }

    // 3. Setup SPA Tab Navigation Logic
    const tabs = document.querySelectorAll(".sub-nav a");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Remove active from all tabs and contents
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));
            
            // Add active to clicked tab
            tab.classList.add("active");
            
            // Show target content
            const targetId = tab.getAttribute("data-target");
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });

    // Alert close logic
    const closeAlert = document.querySelector(".close-alert");
    if(closeAlert) {
        closeAlert.addEventListener("click", function() {
            this.parentElement.style.display = 'none';
        });
    }
});

async function fetchLiveStocks() {
    try {
        const response = await fetch("http://localhost:6334/api/live-stocks");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        
        // 5 Indices, remaining are grid stocks
        renderTicker(data.slice(0, 5));
        renderStocksGrid(data.slice(5));
    } catch (error) {
        console.error("Error fetching live stock data:", error);
    }
}

function formatPrice(price) {
    if(isNaN(price)) return price;
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
}

function getStyleClass(change) {
    const num = parseFloat(change);
    if(isNaN(num)) return 'positive';
    return num < 0 ? 'negative' : 'positive';
}

function renderTicker(tickerData) {
    const tickerContainer = document.getElementById("ticker-bar");
    if(!tickerContainer) return;

    tickerContainer.innerHTML = "";

    tickerData.forEach(item => {
        const styleClass = getStyleClass(item.change);
        const sign = parseFloat(item.change) > 0 ? "+" : "";
        const formattedChange = isNaN(item.change) ? "" : `${sign}${item.change} (${item.percentage})`;

        const tickerEl = document.createElement("div");
        tickerEl.className = "ticker-item";
        tickerEl.innerHTML = `
            <span class="ticker-name">${item.id}</span>
            <span class="ticker-price">${formatPrice(item.price).replace('₹', '')}</span>
            <span class="ticker-val ${styleClass}">${formattedChange}</span>
        `;
        tickerContainer.appendChild(tickerEl);
    });
}

const LOGOS = {
    "Enviro Infra Engine.": "https://assets-netstorage.groww.in/stock-assets/logos/INE029A01011.png", 
    "Ather Energy": "https://assets-netstorage.groww.in/stock-assets/logos/INE364U01010.png",
    "Ola Electric Mobility": "https://assets-netstorage.groww.in/stock-assets/logos/INE008A01015.png",
    "New India Assurance": "https://assets-netstorage.groww.in/stock-assets/logos/INE470Y01017.png"
};

function renderStocksGrid(stocksData) {
    const gridContainer = document.getElementById("stocks-grid");
    if(!gridContainer) return;
    
    gridContainer.innerHTML = "";

    stocksData.forEach(stock => {
        const styleClass = getStyleClass(stock.change);
        const sign = parseFloat(stock.change) > 0 ? "+" : "";
        const formattedChange = isNaN(stock.change) ? "" : `${sign}${stock.change} (${stock.percentage})`;
        const logoUrl = LOGOS[stock.id] || "https://cdn-icons-png.flaticon.com/512/2942/2942821.png";

        const card = document.createElement("div");
        card.className = "stock-card";
        card.innerHTML = `
            <div class="stock-card-top">
                <img src="${logoUrl}" alt="${stock.id}" class="company-logo" onerror="this.src='https://cdn-icons-png.flaticon.com/512/2942/2942821.png'">
                <h4 class="company-name">${stock.id}</h4>
            </div>
            <div class="stock-card-bottom">
                <div class="stock-price">${formatPrice(stock.price)}</div>
                <div class="stock-change ${styleClass}">${formattedChange}</div>
            </div>
        `;
        gridContainer.appendChild(card);
    });
}