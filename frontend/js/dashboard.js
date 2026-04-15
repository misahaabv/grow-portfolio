document.addEventListener("DOMContentLoaded", () => {
    // ── Live Stock Polling ──────────────────────────────────────────
    fetchLiveStocks();
    setInterval(fetchLiveStocks, 10000);

    // ── Profile Dropdown Toggle ─────────────────────────────────────
    const profileToggle = document.getElementById("profile-toggle");
    const profileDropdown = document.getElementById("profile-dropdown");

    if (profileToggle && profileDropdown) {
        profileToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle("active");
        });
        document.addEventListener("click", (e) => {
            if (!profileToggle.contains(e.target) && !profileDropdown.contains(e.target)) {
                profileDropdown.classList.remove("active");
            }
        });
    }

    // ── SPA Tab Navigation ──────────────────────────────────────────
    const tabs = document.querySelectorAll(".sub-nav a");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));
            tab.classList.add("active");
            const target = document.getElementById(tab.dataset.target);
            if (target) target.classList.add("active");
        });
    });

    // ── Alert Dismiss ───────────────────────────────────────────────
    const closeAlertBtn = document.getElementById("close-alert");
    const marketAlert = document.getElementById("market-alert");
    if (closeAlertBtn && marketAlert) {
        closeAlertBtn.addEventListener("click", () => {
            marketAlert.style.display = "none";
        });
    }

    // ── Keyboard shortcut: Ctrl+K focuses search ───────────────────
    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
            e.preventDefault();
            const searchInput = document.getElementById("search-input");
            if (searchInput) searchInput.focus();
        }
    });
});

// ─────────────────────────────────────────────────────────────────────
// Live Stock Data Fetching
// ─────────────────────────────────────────────────────────────────────

async function fetchLiveStocks() {
    try {
        const res = await fetch("http://localhost:6334/api/live-stocks");
        if (!res.ok) throw new Error("Backend unavailable");
        const data = await res.json();
        renderTicker(data.slice(0, 5));
        renderStocksGrid(data.slice(5));
        // Update last refreshed timestamp
        const badge = document.getElementById("last-refreshed");
        if (badge) {
            const now = new Date();
            badge.textContent = `Last updated: ${now.toLocaleTimeString("en-IN")}`;
        }
    } catch (err) {
        console.warn("Live data unavailable:", err.message);
    }
}

function formatINR(price) {
    const num = parseFloat(price);
    if (isNaN(num)) return price;
    return "₹" + num.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getClass(change) {
    return parseFloat(change) < 0 ? "negative" : "positive";
}

function renderTicker(tickerData) {
    const bar = document.getElementById("ticker-bar");
    if (!bar) return;

    // Preserve the LIVE badge at the end
    const liveBadge = bar.querySelector(".ticker-live-badge");
    bar.innerHTML = "";

    tickerData.forEach(item => {
        const cls = getClass(item.change);
        const sign = parseFloat(item.change) > 0 ? "+" : "";
        const changeText = isNaN(item.change) ? "" : `${sign}${Number(item.change).toFixed(2)} (${item.percentage})`;

        const el = document.createElement("div");
        el.className = "ticker-item";
        el.innerHTML = `
            <span class="ticker-name">${item.id}</span>
            <span class="ticker-price">${formatINR(item.price).replace("₹", "")}</span>
            <span class="ticker-val ${cls}">${changeText}</span>
        `;
        bar.appendChild(el);
    });

    if (liveBadge) bar.appendChild(liveBadge);
    else {
        const badge = document.createElement("div");
        badge.className = "ticker-live-badge";
        badge.innerHTML = `<span class="live-dot"></span> LIVE`;
        bar.appendChild(badge);
    }
}

const LOGOS = {
    "Enviro Infra Engine.": "https://assets-netstorage.groww.in/stock-assets/logos/INE029A01011.png",
    "Ather Energy":         "https://assets-netstorage.groww.in/stock-assets/logos/INE364U01010.png",
    "Ola Electric Mobility":"https://assets-netstorage.groww.in/stock-assets/logos/INE235Y01020.png",
    "New India Assurance":  "https://assets-netstorage.groww.in/stock-assets/logos/INE470Y01017.png"
};

function renderStocksGrid(stocks) {
    const grid = document.getElementById("stocks-grid");
    if (!grid) return;
    grid.innerHTML = "";

    stocks.forEach(stock => {
        const cls = getClass(stock.change);
        const sign = parseFloat(stock.change) > 0 ? "+" : "";
        const changeText = isNaN(stock.change) ? "" : `${sign}${Number(stock.change).toFixed(2)} (${stock.percentage})`;
        const logo = LOGOS[stock.id] || "https://cdn-icons-png.flaticon.com/512/2942/2942821.png";

        const card = document.createElement("div");
        card.className = "stock-card";
        card.innerHTML = `
            <div class="stock-card-top">
                <img src="${logo}" class="company-logo" alt="${stock.id}"
                     onerror="this.src='https://cdn-icons-png.flaticon.com/512/2942/2942821.png'">
                <span class="company-name">${stock.id}</span>
            </div>
            <div class="stock-card-bottom">
                <div class="stock-price">${formatINR(stock.price)}</div>
                <div class="stock-change ${cls}">${changeText}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}